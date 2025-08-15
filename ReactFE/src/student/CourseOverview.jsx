import React from 'react';
import styles from './CourseOverview.module.css';

const CourseOverview = () => {
  const courses = [
    { id: 1, title: 'Khóa học' },
    { id: 2, title: 'Khóa học' },
    { id: 3, title: 'Khóa học' },
    { id: 4, title: 'Khóa học' },
    { id: 5, title: 'Khóa học' },
    { id: 6, title: 'Khóa học' },
    { id: 7, title: 'Khóa học' },
    { id: 8, title: 'Khóa học' },
  ];

  return (
    <section className={styles.courseOverview}>
      <h2 className={styles.sectionTitle}>
        <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/983f8ef725916056c4e43aa9921616f40ed936a0d014f5b595759216fe163ea9?apiKey=a7156eeee83b466eb594d236000740da&" alt="" className={styles.icon} />
        Course overview
        <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/eee17c65b9e97983c81e12bcc3d306fb601f7a6d2bd7702963c28584b008ca60?apiKey=a7156eeee83b466eb594d236000740da&" alt="" className={styles.icon} />
      </h2>
      <div className={styles.filterSection}>
        <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/ea1066cb83f692691855e909751042f6afae3a96e2217d1fd31c67ccda8ba97e?apiKey=a7156eeee83b466eb594d236000740da&" alt="" className={styles.filterIcon} />
        <span className={styles.filterText}>All (except removed from view)</span>
      </div>
      <div className={styles.courseGrid}>
        {courses.map((course) => (
          <div key={course.id} className={styles.courseCard}>
            <h3 className={styles.courseTitle}>{course.title}</h3>
          </div>
        ))}
      </div>
      <div className={styles.showMore}>
        <span>Show</span>
        <div className={styles.showMoreControl}>
          <span>0</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/51af284e18bb753d0fbe6e23a3079d2bb862cb99e21e0ba64b854c3693d9d316?apiKey=a7156eeee83b466eb594d236000740da&" alt="Expand" className={styles.expandIcon} />
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;