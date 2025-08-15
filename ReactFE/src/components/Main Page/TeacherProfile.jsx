import React from 'react';

const TeacherProfile = ({ name, score, achievements, image }) => {
  return (
    <div className="teacher-profile">
      <div className="teacher-image-container">
        <img
          src={image}
          alt={`Teacher ${name}`}
          className="teacher-image"
        />
      </div>
      <div className="teacher-info">
        <h3 className="teacher-name">{name}</h3>
        <p className='teacher-divider'></p>
        <ul className="teacher-achievements">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherProfile;
