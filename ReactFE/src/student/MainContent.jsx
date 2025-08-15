import React from 'react';
import RecentCourses from './RecentCourses';
import CourseOverview from './CourseOverview';
import Calendar from './Calendar';
import styles from './MainContent.module.css';

const MainContent = () => {
    return (
        <div className={styles.mainContent}>
          <div className={styles.leftContainer}>
            <RecentCourses />
            <CourseOverview />
          </div>
          <div className={styles.rightContainer}>
            <Calendar />
          </div>
        </div>
  );
};

export default MainContent;