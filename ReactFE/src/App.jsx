import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box, CircularProgress } from '@mui/material'; 
import './styles.css'; 
import './App.css';
import './styles/Main Page/homepagestyle.css';
import './styles/Main Page/HeaderStyle.css';
import './styles/Main Page/BannerStyle.css';
import './styles/Main Page/ChooseUsStyle.css';
import './styles/Main Page/CourseListStyle.css';
import './styles/Main Page/LearningPathStyle.css';
import './styles/Main Page/TeacherProfileStyle.css';
import './styles/Main Page/FooterStyle.css';
import Header from './components/Main Page/Header';
import Banner from './components/Main Page/Banner';
import ChooseUs from './components/Main Page/ChooseUs';
import LearningPath from './components/Main Page/LearningPath';
import TeacherSection from './components/Main Page/TeacherSection';
import RegistrationForm from './components/Main Page/RegistrationForm';
import Footer from './components/Main Page/Footer';
import CourseList from './components/CourseList';
import CustomerChatPopup from './components/CustomerChatPopup';


function App() {
  const [courses, setCourses] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const fetchCourses = async () => {
    try {
        const response = await fetch('https://ieltsweb.onrender.com/api/Course', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (response.ok) {
            const data = await response.json();
            setCourses(data); // Set the courses data
        } else {
            console.error('Error fetching courses:', response.statusText);
            setError('Lỗi khi tải dữ liệu!');
        }
    } catch (error) {
        console.error('Lỗi kết nối:', error);
        setError('Lỗi khi tải dữ liệu!');
    } finally {
        setLoading(false);
    }
};


  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <Box className="center-content" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ ml: 2 }}>
          Đang tải dữ liệu...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="center-content" sx={{ textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <div 
      className="center-content" 
      sx={{ minHeight: '100vh', paddingTop: '80px' }} // Thêm padding-top để tránh Header đè lên nội dung
    >
      <Header />
      <Banner/>
      <ChooseUs/>
      <LearningPath/>
      <TeacherSection/>
      <main>
          <CourseList data={courses} />
      </main>
      <RegistrationForm/>
      <CustomerChatPopup/>
      <Footer/>
    </div>
  );
}

export default App;
