import React from 'react';
import TeacherProfile from './TeacherProfile';

const TeacherSection = () => {
  const teachers = [
    {
      name: "Ms. Nhi - 8.5 IELTS",
      score: 8.5,
      achievements: [
        "IELTS 8.5 overall",
        "Tốt nghiệp loại: The University of Melbourne/Master Of Financial Management",
        "Kinh nghiệm giảng dạy tiếng Anh 5 năm tại IELTS Fighter"
      ],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e73c248d8a3dde041dcc694ac334510f35f2a422f439e3a26825f6595c7477c?placeholderIfAbsent=true&apiKey=a7156eeee83b466eb594d236000740da"
    },
    {
      name: "Mr. Nam - 8.0 IELTS",
      score: 8.0,
      achievements: [
        "Tốt nghiệp: Loại giỏi Học viện Ngoại Giao",
        "8.0 IELTS Speaking",
        "Ngôn ngữ: Tiếng Anh và tiếng Hàn Quốc",
        "Nguyên Phó Chủ tịch Hội Sinh viên Học viện Ngoại giao"
      ],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c17e1bfc074887d7076b53e82839c5477c11aa506d701181bca1fdf9cdee58b7?placeholderIfAbsent=true&apiKey=a7156eeee83b466eb594d236000740da"
    },
    {
      name: "Ms. Thương - 8.0 IELTS",
      score: 8.0,
      achievements: [
        "IELTS 8.0 overall",
        "Từng đạt 70% học bổng THPT Hoa Kỳ IDC",
        "Giải Đồng cuộc thi Hùng biện Tiếng Anh TP Hà Nội",
        "Tham gia các chương trình: AIESEC, IM Venture, VietAbroader, VYMUN"
      ],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/85c8f5883ef3e0561cdf20210509e95f421f33b621e8c123ee6cf5e1f60d3f7b?placeholderIfAbsent=true&apiKey=a7156eeee83b466eb594d236000740da"
    },
    {
      name: "Ms. Trang - 8.0 IELTS",
      score: 8.0,
      achievements: [
        "Cô giáo có giọng Anh - Anh ngọt ngào, còn giỏi tiếng Nhật, TBN",
        "Kinh nghiệm 5 năm",
        "Cô giáo với sự hài hước, \"lầy\", luôn biến những giờ học vui vẻ và hứng khởi để học tập tốt nhất"
      ],
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/880d4aad03bb4d5fbbb573f85fc36b7fa0ec0154f559f13cfc8bca0b2acc22a4?placeholderIfAbsent=true&apiKey=a7156eeee83b466eb594d236000740da"
    }
  ];

  return (
    <section className="teacher-section">
      <h2 className="section-title">
        <span className="highlight">300+</span> Giáo viên xuất sắc
      </h2>
      <p className="section-description">
        Giàu nhiệt huyết và kinh nghiệm sẵn sàng cùng bạn chinh phục đỉnh IELTS
      </p>
      <div className="teacher-profiles">
        {teachers.map((teacher, index) => (
          <TeacherProfile key={index} {...teacher} />
        ))}
      </div>
    </section>
  );
};

export default TeacherSection;
