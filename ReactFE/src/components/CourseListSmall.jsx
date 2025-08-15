import * as React from 'react';
import { useNavigate,  } from 'react-router-dom';


export default function CourseListSmall({ data }) {
  const navigate = useNavigate();

  

  const handleClick = (id) => {
    navigate(`/Course/${id}`);
  };

  return (
    <ul className="footer-nav-list">
      {data && data.length > 0 ? (
        data.map((course) => (
          <li key={course.id}>
            <a href="#online" onClick={() => handleClick(course.id)}>
              {course.courseName}
            </a>
          </li>
        ))
      ) : (
        <p>Không có khóa học nào để hiển thị.</p>
      )}
    </ul>
  );
}
