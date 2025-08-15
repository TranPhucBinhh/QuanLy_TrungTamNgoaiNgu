import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Typography, Box } from '@mui/material';
import '../styles/Other/CourseRegistrationPopupStyle.css';

export default function CourseRegistrationPopup({ open, onClose, course }) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({ email: '', phone: '' });
    const [successPopupOpen, setSuccessPopupOpen] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    const subject = "Chào mừng bạn đến với Jumbo Book Store";

    const handleCreateSignUp = async () => {
        let isValid = true;
        const newErrors = { email: '', phone: '' };
    
        if (!emailRegex.test(email)) {
            newErrors.email = 'Email không hợp lệ';
            isValid = false;
        }
    
        if (!phoneRegex.test(phone)) {
            newErrors.phone = 'Số điện thoại phải là 10 chữ số';
            isValid = false;
        }
    
        setErrors(newErrors);
    
        if (isValid) {
            const signUpData = { nameSt: name, emailSt: email, phoneSt: phone };
    
            try {
                const response = await fetch(`https://ieltsweb.onrender.com/api/SignUpInfor/${course.id}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(signUpData),
                });
    
                if (response.ok) {
                    const createdSignUp = await response.json();
                    console.log('Đăng Ký Thành Công:', createdSignUp);
                    setSuccessPopupOpen(true);
                    sendEmailWithTemplate(email, name, phone, subject);  // Send email after successful sign-up
                    onClose();
                } else {
                    console.error('Lỗi tạo đăng ký:', await response.json());
                    alert('Có lỗi xảy ra khi đăng ký.');
                }
            } catch (error) {
                console.error('Lỗi kết nối:', error);
                alert('Lỗi kết nối đến máy chủ.');
            }
        } else {
            alert('Vui lòng sửa lỗi trước khi đăng ký.');
        }
    };

    const sendEmailWithTemplate = async (customerEmail) => {
        try {
            const response = await fetch('https://ieltsweb.onrender.com/api/Email/SendWithTemplate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customerEmail, 
                    customerName: name, 
                    phone: phone, 
                    subject: "Course Registration Confirmation", // Set your subject here
                }),
            });
    
            if (response.ok) {
                console.log('Email sent with template successfully!');
            } else {
                console.error('Error:', await response.json());
                alert('Error sending email with template.');
            }
        } catch (error) {
            console.error('Connection error:', error);
            alert('Connection error.');
        }
    };
    
    
    
    return (
        <>
            <Dialog 
                open={open} 
                onClose={onClose} 
                PaperProps={{ className: 'dialog-paper' }}
            >
                <DialogTitle className="dialog-title">
                    Đăng ký khóa học: {course.courseName}
                </DialogTitle>

                <DialogContent className="dialog-content">
                    <Typography variant="h6" gutterBottom className="course-description">
                        Mô tả khóa học:
                    </Typography>
                    <Typography variant="body2" paragraph className="course-paragraph">
                        {course.courseDescription ? course.courseDescription : 'Không có mô tả.'}
                    </Typography>

                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            marginTop: 2
                        }}
                    >
                        <TextField
                            label="Tên đầy đủ"
                            variant="outlined"
                            fullWidth
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input-field"
                        />
                        <TextField
                            label="Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                        <TextField
                            label="Số điện thoại"
                            type="tel"
                            variant="outlined"
                            fullWidth
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="input-field"
                            error={!!errors.phone}
                            helperText={errors.phone}
                        />
                    </Box>
                </DialogContent>

                <DialogActions className="actions-container">
                    <Button 
                        onClick={onClose} 
                        className="cancel-button"
                    >
                        Hủy
                    </Button>
                    <Button 
                        onClick={() => {
                            handleCreateSignUp();
                        }} 
                        className="register-button"
                    >
                        Đăng ký
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Success Popup */}
            <Dialog open={successPopupOpen} onClose={() => setSuccessPopupOpen(false)}>
                <DialogTitle>Đăng ký thành công</DialogTitle>
                <DialogContent>
                    <Typography>Cảm ơn bạn đã đăng ký khóa học!</Typography>
                    <Typography>Email xác nhận đã được gửi tới {email}. Vui lòng kiểm tra!</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setSuccessPopupOpen(false)}>Đóng</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
