
import React from 'react';
import '../../styles/Main Page/RegistrationFormStyle.css';
const RegistrationForm = () => {
  return (
    <section className="registration-section">
      <h2 className="section-title">Đăng ký trong hôm nay</h2>
      <h3 className="section-subtitle">Nhận ưu đãi học phí lên tới 5.000.000 VNĐ</h3>
      <form className="registration-form">
        <div className="form-group">
          <input type="text" id="name" name="name" placeholder="Họ tên" required />
          <input type="tel" id="phone" name="phone" placeholder="Số điện thoại" required />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <select id="role" name="role" required>
            <option value="">Bạn là</option>
            <option value="student">Học sinh</option>
            <option value="parent">Phụ huynh</option>
          </select>
        </div>
        <div className="form-group">
          <select id="location" name="location" required>
            <option value="">Chọn cơ sở gần bạn nhất</option>
            <option value="hanoi">Hà Nội</option>
            <option value="hcm">TP. Hồ Chí Minh</option>
            <option value="danang">Đà Nẵng</option>
          </select>
        </div>
        <button type="submit" className="submit-button">ĐĂNG KÝ NGAY</button>
      </form>
      <div className="countdown">
        <p className="countdown-title">Ưu đãi hết hạn sau</p>
        <div className="countdown-timer">
          <div className="countdown-item">
            <span className="countdown-value">00</span>
            <span className="countdown-label">ngày</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">00</span>
            <span className="countdown-label">giờ</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">00</span>
            <span className="countdown-label">phút</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">00</span>
            <span className="countdown-label">giây</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;