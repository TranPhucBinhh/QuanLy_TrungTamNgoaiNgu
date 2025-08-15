import React, { useEffect, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import "../styles/Other/CustomerChatPopupStyle.css"

const CustomerChatPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [connection, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [customerId, setCustomerId] = useState(() => {
        const savedCustomerId = localStorage.getItem('customerId');
        return savedCustomerId || '';
    });

    const generateUniqueCustomerId = () => {
        const newCustomerId = `cus${Date.now()}`;
        localStorage.setItem('customerId', newCustomerId);
        setCustomerId(newCustomerId);
    };

    useEffect(() => {
        if (isOpen && customerId) {
            const connect = new HubConnectionBuilder()
                .withUrl("https://ieltsweb.onrender.com/chatHub")
                .withAutomaticReconnect()
                .build();
    
            setConnection(connect);
    
            connect.start()
                .then(() => {
                    console.log("Connected to chat");
                    connect.invoke("SendCustomerIdToAdmin", customerId);
    
                    // Set up the listener here
                    connect.on("ReceiveMessage", (fromUser, receivedMessage) => {
                        console.log(`Received message from ${fromUser}: ${receivedMessage}`); // Debug log
                        if (fromUser === 'Admin' || fromUser === customerId) {
                            setMessages(prevMessages => {
                                const messageExists = prevMessages.some(msg => msg.message === receivedMessage && msg.user === fromUser);
                                if (!messageExists) {
                                    return [...prevMessages, { user: fromUser, message: receivedMessage }];
                                }
                                return prevMessages;
                            });
                        }
                    });
                })
                .catch(err => console.log("Connection failed: ", err));
    
            return () => {
                connect.stop();
                connect.off("ReceiveMessage"); // Clean up the listener
            };
        } else if (isOpen && !customerId) {
            generateUniqueCustomerId();
        }
    }, [isOpen, customerId]);
    
    const sendMessage = async () => {
        if (message && connection) {
            console.log("Sending message:", message); // Debug log
            try {
                await connection.invoke("SendMessageFromCustomer", customerId, message);
                setMessages(prevMessages => [...prevMessages, { user: "Customer", message }]);
                setMessage('');
            } catch (err) {
                console.error("Error sending message: ", err);
            }
        }
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="chat-container">
            {/* Open Chat Button */}
            <button className="open-chat-btn" onClick={toggleModal}>
                💬
            </button>

            {/* Chat modal only displays when isOpen is true */}
            {isOpen && (
                <div className="chat-modal">
                    <h2>Customer Chat</h2>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.user === 'Admin' ? 'admin-message' : 'customer-message'}>
                                <strong>{msg.user === 'Admin' ? 'Admin' : 'You'}: </strong>{msg.message}
                            </div>
                        ))}
                    </div>
                    <div className="chat-input-container">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button onClick={sendMessage} disabled={!message}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomerChatPopup;
