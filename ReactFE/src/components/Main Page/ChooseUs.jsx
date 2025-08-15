
import React from 'react';

const ChooseUs = () => {
  const reasons = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a711a0f4495a1dc2715ab9dcce58a0bf43e8f65e8804962e90905f7f332fabc?placeholderIfAbsent=true&apiKey=a7156eeee83b466eb594d236000740da",
      title: "Đội ngũ giáo viên",
      description: "Đội ngũ giáo viên \"xịn sò\" 8.0+ với hơn 5 năm kinh nghiệm giảng dạy và đầy nhiệt huyết"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/971fa3a064d55bc519259deade06ec74fbbc9c4b14932eced529949d5aa30274?placeholderIfAbsent=true&apiKey=a7156eeee83b466eb594d236000740da",
      title: "Nhiều hoạt động thú vị",
      description: "Luyện tập qua brainstorming, teamwork, outdoor ... giúp nhanh chóng \"ngấm kiến thức\""
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bbfd34811e550b2cec581c2c73c1d0760914b933d5060698bbdada77fbb52e77?placeholderIfAbsent=true&apiKey=a7156eeee83b466eb594d236000740da",
      title: "Online/offline",
      description: "Linh hoạt chuyển đổi giữa việc học offline trực tiếp tại trung tâm và học online tại nhà"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3026fe3b7619392580fea3ae7ea7a8b9cafc9f3c6f0e57c917fb22290c84240b?placeholderIfAbsent=true&apiKey=a7156eeee83b466eb594d236000740da",
      title: "Cam kết đầu ra",
      description: "Nếu sau khóa học bạn vẫn không đạt được target thì sẽ được học lại 100% miễn phí"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d03955a063545fa0edc69a25db78e488e2578730d745c419bba76c22fcee2251?placeholderIfAbsent=true&apiKey=a7156eeee83b466eb594d236000740da",
      title: "89k/h",
      description: "Học phí rẻ nhất hệ mặt trời chỉ từ 89k/h là đã có thể học IELTS chất lượng cao"
    }
  ];

  return (
    <section className="why-choose-us">
      <h2 className="section-title">TẠI SAO NÊN HỌC IELTS TẠI L & T Education ?</h2>
      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <img src={reason.icon} alt="" className="reason-icon" />
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-description">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;