import React, { useEffect, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

const AdminChat = () => {
    const [connection, setConnection] = useState(null);
    const [message, setMessage] = useState('');
    const [selectedCustomerId, setSelectedCustomerId] = useState('');
    const [customers, setCustomers] = useState([]);
    const [messages, setMessages] = useState({}); // Lưu tin nhắn theo từng customerId

    useEffect(() => {
        const connect = new HubConnectionBuilder()
            .withUrl("https://ieltsweb.onrender.com/chatHub") // URL Hub của bạn
            .withAutomaticReconnect()
            .build();
    
        setConnection(connect);
    
        connect.start()
            .then(() => {
                console.log("Connected to chat");
            })
            .catch(err => console.log("Connection failed: ", err));
    
        connect.on("ReceiveMessage", (customerId, message) => {
            setMessages(prevMessages => ({
                ...prevMessages,
                [customerId]: [...(prevMessages[customerId] || []), { user: customerId, message }] // Cập nhật tin nhắn cho customerId cụ thể
            }));
        });

        connect.on("ReceiveCustomerId", (customerId) => {
            setCustomers(prev => [...new Set([...prev, customerId])]); // Thêm khách hàng mới
        });
    
        return () => {
            connect.stop();
        };
    }, []);

    const sendMessage = async () => {
        if (message && connection && selectedCustomerId) {
            try {
                await connection.invoke("SendMessageToCustomer", selectedCustomerId, message); // Gửi tin nhắn cho khách hàng
                setMessages(prevMessages => ({
                    ...prevMessages,
                    [selectedCustomerId]: [...(prevMessages[selectedCustomerId] || []), { user: "Admin", message }] // Cập nhật tin nhắn cho Admin
                }));
                setMessage('');
            } catch (err) {
                console.error("Error sending message: ", err);
            }
        }
    };

    return (
        <div>
            <h2>Admin Chat</h2>
            <div>
                <label>Choose a Customer:</label>
                <select onChange={(e) => setSelectedCustomerId(e.target.value)} value={selectedCustomerId}>
                    <option value="">Select a customer</option>
                    {customers.map((customer, index) => (
                        <option key={index} value={customer}>{customer}</option>
                    ))}
                </select>
            </div>

            {/* Hiển thị tin nhắn của khách hàng đã chọn */}
            <div className="chat-messages">
                {selectedCustomerId && messages[selectedCustomerId] ? (
                    messages[selectedCustomerId].map((msg, index) => (
                        <div key={index} className={msg.user === 'Admin' ? 'admin-message' : 'customer-message'}>
                            <strong>{msg.user === 'Admin' ? 'Admin' : msg.user}: </strong>{msg.message}
                        </div>
                    ))
                ) : (
                    <p>No messages for this customer yet.</p> // Thông báo khi chưa có tin nhắn
                )}
            </div>

            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={sendMessage} disabled={!message || !selectedCustomerId}>Send</button>
        </div>
    );
};

export default AdminChat;
