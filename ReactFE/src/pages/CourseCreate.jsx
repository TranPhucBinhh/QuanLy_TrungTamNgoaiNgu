import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CourseCreate() {
  const navigate = useNavigate();

  const [courseName, setCourseName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateCourse = async () => {
    // Kiểm tra dữ liệu trước khi gửi API
    if (!courseName || !price || !description) {
      alert('Vui lòng nhập đầy đủ thông tin khóa học');
      return;
    }
  
    const courseData = {
      courseName,
      price: parseFloat(price), // Chuyển giá sang dạng số
      courseDescription: description,
    };
  
    try {
      const response = await fetch('https://ieltsweb.onrender.com/api/Course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });
  
      if (response.ok) {
        const createdCourse = await response.json();
        console.log('Khóa học đã được tạo:', createdCourse);
  
        // Điều hướng trở lại trang danh sách khóa học
        navigate('/Course');
      } else {
        // Xử lý lỗi nếu API không thành công
        const errorData = await response.json();
        console.error('Lỗi tạo khóa học:', errorData);
        alert('Có lỗi xảy ra khi tạo khóa học.');
      }
    } catch (error) {
      console.error('Lỗi kết nối:', error);
      alert('Lỗi kết nối đến máy chủ.');
    }
  };

  return (
    <Box sx={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Tạo khóa học mới
      </Typography>
      <TextField
        label="Tên khóa học"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        fullWidth
        sx={{ marginBottom: '20px' }}
      />
      <TextField
        label="Giá"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
        sx={{ marginBottom: '20px' }}
        type="number" // Giới hạn input chỉ cho phép số
        slotProps={{
          input: {
            min: 0, // Thiết lập giá trị nhỏ nhất là 0 để tránh giá trị âm
          },
        }}
      />
      <TextField
        label="Mô tả khóa học"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
        rows={4}
        sx={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={handleCreateCourse}>
        Tạo khóa học
      </Button>
    </Box>
  );
}
