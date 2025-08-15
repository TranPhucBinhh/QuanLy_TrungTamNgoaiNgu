import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CourseRegistrationPopup from './CourseRegistrationPopup'; // Import the pop-up component

export default function CourseList({ data }) {
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = React.useState(false); // State to open/close the pop-up
  const [selectedCourse, setSelectedCourse] = React.useState(null); // State for selected course

  // Handle click event to open the pop-up and pass the selected course
  const handleClick = (course) => {
    setSelectedCourse(course); // Set the course that was clicked
    setOpenPopup(true); // Open the pop-up
  };

  // Handle closing the pop-up
  const handleClosePopup = () => {
    setOpenPopup(false); // Close the pop-up
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: '0 auto',
        position: 'relative',
        paddingTop: '60px', // Add space at the top to prevent overlap with courses
      }}
    >
      {/* Display list of courses */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr', // 1 box per row on small screens
            sm: '1fr 1fr', // 2 boxes per row on medium screens
            md: 'repeat(3, 1fr)', // 3 boxes per row on large screens
          },
          gap: '20px',
          width: '900px',
        }}
      >
        {data.length > 0 ? (
          data.map((item, index) => (
            <Box
              key={item.id}
              sx={{
                padding: '20px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                background: index % 2 === 0 ? '#17205E' : '#1F2A6B', // Different background for alternating colors
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              {/* Display course image */}
              <img
                src={item.courseIMG}
                alt={item.courseName} // Add alt text for accessibility
                style={{
                  width: '100%',
                  height: '150px',
                  marginBottom: '15px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />

              {/* Display course name */}
              <Typography variant="h6" sx={{ marginBottom: '10px', color: 'white' }}>
                {item.courseName}
              </Typography>

              {/* Display course description */}
              <Typography variant="body2" sx={{ marginBottom: '15px', color: 'white' }}>
                {item.courseDescription ? item.courseDescription : 'Không có mô tả.'}
              </Typography>

              {/* Registration button */}
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleClick(item)} // Pass the selected course
              >
                Đăng ký
              </Button>
            </Box>
          ))
        ) : (
          <Typography
            variant="h6"
            component="div"
            sx={{ color: 'text.secondary', textAlign: 'center' }}
          >
            Không có khóa học nào để hiển thị.
          </Typography>
        )}
      </Box>

      {/* Course Registration Pop-up */}
      {selectedCourse && (
        <CourseRegistrationPopup
          open={openPopup}
          onClose={handleClosePopup}
          course={selectedCourse} // Pass the selected course details to the pop-up
        />
      )}
    </Box>
  );
}
