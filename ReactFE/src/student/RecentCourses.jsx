import React from 'react';
import styles from './RecentCourses.module.css';

const RecentCourses = () => {
  return (
    <section className={styles.recentCourses}>
      <h2 className={styles.sectionTitle}>
        <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/983f8ef725916056c4e43aa9921616f40ed936a0d014f5b595759216fe163ea9?apiKey=a7156eeee83b466eb594d236000740da&" alt="" className={styles.icon} />
        Recently accessed courses
        <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/eee17c65b9e97983c81e12bcc3d306fb601f7a6d2bd7702963c28584b008ca60?apiKey=a7156eeee83b466eb594d236000740da&" alt="" className={styles.icon} />
      </h2>
      <div className={styles.courseControls}>
        <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/dfd9e60e890bf79ca251e7ab20fed026bfda1637f42fcfd469a01adb3f27f1f9?apiKey=a7156eeee83b466eb594d236000740da&" alt="Previous" className={styles.controlIcon} />
        <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/ed20121847b4737ad6c642111c11b58e56ee808a122c6e2a0b60dced6b466a23?apiKey=a7156eeee83b466eb594d236000740da&" alt="Next" className={styles.controlIcon} />
      </div>
      <div className={styles.course}>
        <h3 className={styles.courseTitle}>Khóa học</h3>
      </div>
    </section>
  );
};

export default RecentCourses;