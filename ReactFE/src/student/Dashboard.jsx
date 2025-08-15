import React from 'react';
import Header from '../components/Main Page/Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from '../components/Main Page/Footer';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div>
    <Header />
    <div className={styles.dashboard}>
      
      <main className={styles.mainContent}>
        <Sidebar />
        <MainContent />
      </main>
     
    </div>
     <Footer />
     </div>
  );
};

export default Dashboard;