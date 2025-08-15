import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseListSmall from '../CourseListSmall';

const Footer = () => {
  const [courses, setCourses] = useState([]); 
  const [loading, setLoading] = useState(true); // Thêm state loading
  const [error, setError] = useState(null); // Thêm state error nếu cần

  const fetchCourses = async () => {
    try {
      const response = await axios.get('https://ieltsweb.onrender.com/api/Course');
      setCourses(response.data);
    } catch (error) {
      setError('Lỗi khi tải dữ liệu!');
    } finally {
      setLoading(false); // Dừng loading khi có dữ liệu hoặc gặp lỗi
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return <div>Đang tải dữ liệu...</div>; // Thông báo đang tải
  }

  if (error) {
    return <div>{error}</div>; // Thông báo lỗi nếu có
  }

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="logo">
            <img src="./src/images/Main page/Logo.png" alt=""/>
          </div>
        </div>
        
        <nav className="footer-nav">
          <div className="footer-nav-column">
            <p className="footer-description">
              L & T Education - trung tâm luyện thi IELTS số 1 Việt Nam. Với sứ mệnh giúp hàng
              triệu người Việt đạt 6.5-7.0 IELTS, L & T Education nỗ lực mỗi ngày để cùng các bạn
              học IELTS dễ như ăn bánh, chinh phục được đỉnh cao IELTS!
            </p>
            <ul className="footer-achievements">
              <li>Đào tạo 70.000 học viên IELTS mỗi năm</li>
              <li>Đối tác Bạch kim của IDP Việt Nam</li>
              <li>Đối tác uy tín lâu năm của VnExpress, Viettel, Panasonic...</li>
            </ul>
          </div>
          <div className="footer-nav-column">
            <h4 className="footer-nav-title">Thông tin</h4>
            <ul className="footer-nav-list">
              <li><a href="#about">Về chúng tôi</a></li>
              <li><a href="#teachers">Đội ngũ giảng viên</a></li>
              <li><a href="#locations">Hệ thống 60+ cơ sở</a></li>
              <li><a href="#method">Phương pháp đào tạo</a></li>
              <li><a href="#activities">Hoạt động tiêu biểu</a></li>
              <li><a href="#students">Học viên điểm cao</a></li>
              <li><a href="#feedback">Feedback của học viên</a></li>
              <li><a href="#trial">Thi thử IELTS miễn phí</a></li>
            </ul>
          </div>
          <div className="footer-nav-column">
            <h4 className="footer-nav-title">Khóa học</h4>
            <ul className="footer-nav-list">
              <CourseListSmall data={courses} />
            </ul>
          </div>
          <div className="footer-nav-column">
            <h4 className="footer-contact-title">Liên hệ</h4>
            <p className="footer-contact-item">Hotline: <a href="tel:0903411666" style={{color:'white'}}>0903 411 666</a></p>
            <p className="footer-contact-item">Email: <a href="mailto:chienbinh@l&t-education.com" style={{color:'white'}}>chienbinh@l&t-education.com</a></p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/258a33a1bcb03358aa044f67245d8c7ca5dcb5dc61f1f5b98d62819f4c584666?placeholderIfAbsent=true&apiKey=a7156eeee83b466eb594d236000740da" alt="" /></a>
              <a href="#" aria-label="Instagram"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/812ef2d93543109dc12e9abc98727a5badf9dda5b96921c8624caacc69613134?placeholderIfAbsent=true&apiKey=a7156eeee83b466eb594d236000740da" alt="" /></a>
              <a href="#" aria-label="YouTube"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/394d64f2bf3befc755a90c71ff255ad34ec56812e8372819ce2c4506c9101e2c?placeholderIfAbsent=true&apiKey=a7156eeee83b466eb594d236000740da" alt="" /></a>
            </div>
          </div>
        </nav>
      </div>
      <h3 className="footer-subtitle">Hệ thống cơ sở trải dài khắp 3 miền</h3>
      <div className="footer-locations">
        <span className="location">HÀ NỘI</span>
        <span className="location">TP. HỒ CHÍ MINH</span>
        <span className="location">ĐÀ NẴNG</span>
        <span className="location">HẢI PHÒNG</span>
        <span className="location">BẮC NINH</span>
        <span className="location">THANH HÓA</span>
        <span className="location">NGHỆ AN</span>
        <span className="location">ĐỒNG NAI</span>
        <span className="location">VŨNG TÀU</span>
        <span className="location">HÀ TĨNH</span>
        <span className="location">KHÁNH HÒA</span>
        <span className="location">BÌNH DƯƠNG</span>
      </div>
    </footer>
  );
};

export default Footer;
