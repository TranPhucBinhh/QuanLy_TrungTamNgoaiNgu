import React, { memo } from 'react';
import { Link } from 'react-router-dom'; 
import AdminDashboard from '../../AdminDashboard';

const Container = memo(function Container() {
  return (
    <div className="main-header">
      {/* Logo */}
      <div className="logo-container">
        <div className="logo">
          <img src="./src/images/Main page/Group 248.png" alt=""/>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="main-nav">
        <ul className="nav-list">
          {/*<li><Link to="/AdminDashboard" className="nav-link" style={{ color: 'black' }}>Giới thiệu</Link></li>*/}
          <li><Link to="#" className="nav-link" style={{ color: 'black' }}>Giới thiệu</Link></li>
          <li><a href="#" className="nav-link" style={{color:'black'}}>Giảng viên</a></li>
          <li><a href="#" className="nav-link" style={{color:'black'}}>Học viên</a></li>
          <li><a href="#" className="nav-link" style={{color:'black'}}>Khóa học</a></li>
        </ul>
      </nav>

      {/* CTA Buttons */}
      <div className="cta-container">
        <button className="cta-button outline btn-consult">Tư vấn</button>
        <button className="cta-button solid btn-register">Đăng ký</button>
      </div>

      {/* Horizontal Divider */}
      <div className="horizontal-divider"></div>
    </div>
  );
});

export default Container;
