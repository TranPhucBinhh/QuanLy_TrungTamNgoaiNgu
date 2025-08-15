import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sideNav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#dashboard" className={styles.navLink}>
              <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/103b74f03025fc5f1b4100bb53d4b60af540d8986e00f22f3b62b9327fe00f2e?apiKey=a7156eeee83b466eb594d236000740da&" alt="" className={styles.navIcon} />
              <span>Dashboard</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#my-course" className={styles.navLink}>
              <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/53f3801a2461e52bfd722c03bd363630a2f16e83022817841b053f2ad56adcbb?apiKey=a7156eeee83b466eb594d236000740da&" alt="" className={styles.navIcon} />
              <span>My course</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#more" className={styles.navLink}>
              <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/4f74cdeeec72a994024227f9e578b896d1be50a519e6090b88f5d2c0c1fefa82?apiKey=a7156eeee83b466eb594d236000740da&" alt="" className={styles.navIcon} />
              <span>More</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.userProfile}>
        <img src="https://cdn.builder.io/api/v1/image/assets/a7156eeee83b466eb594d236000740da/379cff6590e80a2f52268c7d8d5f1c4fe27d3f4e40bed163db75872ef7e403d7?apiKey=a7156eeee83b466eb594d236000740da&" alt="User profile" className={styles.profileImage} />
      </div>
    </aside>
  );
};

export default Sidebar;