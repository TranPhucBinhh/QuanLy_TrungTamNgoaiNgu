import React from 'react';
import styles from './Calendar.module.css';

const Calendar = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = Array.from({ length: 35 }, (_, i) => i + 24);

  return (
    <section className={styles.calendar}>
      <h2 className={styles.calendarTitle}>
        <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/c02aee181e20387cd712fc9fdfb7581acca89430b803a11fce6cba99d132683c?apiKey=a7156eeee83b466eb594d236000740da&" alt="" className={styles.calendarIcon} />
        Calendar
      </h2>
      <div className={styles.dateRange}>
        <span>3/28/2024 - 12/28/2024</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/a877d22ac67947892d1a74aee46940908e34e43bb600a910852b4465e2aaceec?apiKey=a7156eeee83b466eb594d236000740da&" alt="Expand" className={styles.expandIcon} />
      </div>
      <div className={styles.calendarGrid}>
        <div className={styles.monthSelector}>
          <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/8ccbfd11deffc00cff7a44d890706ad37966f0dd68213762bcc4420dce905712?apiKey=a7156eeee83b466eb594d236000740da&" alt="Previous month" className={styles.monthArrow} />
          <span className={styles.currentMonth}>September 2024</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/e42d43cb9e95e5b1267a149024663b84a40603bc2321f627fab89c194bf4ffea?apiKey=a7156eeee83b466eb594d236000740da&" alt="Next month" className={styles.monthArrow} />
        </div>
        <div className={styles.weekdays}>
          {days.map((day) => (
            <div key={day} className={styles.weekday}>{day}</div>
          ))}
        </div>
        <div className={styles.dates}>
          {dates.map((date, index) => (
            <div key={index} className={`${styles.date} ${date === 6 ? styles.selected : ''}`}>
              {date > 30 ? date - 30 : date}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.eventInfo}>
        <p>06: Khóa Ielts 5.0 - 5.5+: Speaking</p>
        <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/19462a0d450e7e54c0204700a1e08396b45f0b151e261d07a297831b28bd56b8?apiKey=a7156eeee83b466eb594d236000740da&" alt="Event icon" className={styles.eventIcon} />
      </div>
    </section>
  );
};

export default Calendar;