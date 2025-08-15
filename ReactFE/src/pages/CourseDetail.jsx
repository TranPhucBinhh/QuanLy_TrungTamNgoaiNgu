// src/pages/CourseDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Paper, Button, Grid, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageIcon from '@mui/icons-material/Image';

export default function CourseDetail() {
  const { id } = useParams(); // Lấy id từ URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hàm lấy thông tin khóa học từ API
  const fetchCourseDetail = async () => {
    try {
      const response = await axios.get(`https://ieltsweb.onrender.com/api/Course/${id}`);
      setCourse(response.data);
    } catch (error) {
      console.error('Error fetching course details:', error);
      setError('Không thể tải thông tin khóa học.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourseDetail();
  }, [id]); // Chạy lại hàm khi id thay đổi

  // Nếu đang tải hoặc có lỗi, hiển thị thông báo
  if (loading) return <Typography variant="h6">Đang tải...</Typography>;
  if (error) return <Typography variant="h6" color="error">{error}</Typography>;

  // Nếu khóa học không tồn tại
  if (!course) return <Typography variant="h6" color="error">Khóa học không tồn tại.</Typography>;

  return (
    <Box 
      sx={{ 
        padding: 2, 
        backgroundColor: '#f4f6f8', 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}
    >
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, width: '100%', maxWidth: 800 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar  src={course.courseIMG} sx={ { width: 120, height: 120, bgcolor: 'primary.main' }}>
              <ImageIcon sx={{ fontSize: 60 }} />
            </Avatar>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              {course.courseName}
            </Typography>
            <Typography variant="body1" paragraph>
              {course.courseDescription}
            </Typography>
            <Typography variant="h6" color="green" sx={{ fontWeight: 'bold' }}>
              Giá: {course.price}
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Đăng ký ngay
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
