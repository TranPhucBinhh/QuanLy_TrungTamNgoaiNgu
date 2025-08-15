using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IeltsWebLearn.Models;

namespace api.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string nameSt { get; set; } = string.Empty;
        public string emailSt { get; set; } = string.Empty;
        public string addressSt { get; set; } = string.Empty;
        public string phoneSt { get; set; } = string.Empty;
        public int? CourseId { get; set; }
        // Thuộc tính điều hướng dùng để truy cập sâu vào Course, ví dụ Course.Id
        public Course? Course { get; set; }
        public int? ClassId { get; set; }
        // Thuộc tính điều hướng dùng để truy cập sâu vào Course, ví dụ Course.Id
        public Class? Class { get; set; }
        
        public int? AccId { get; set; }
        // Thuộc tính điều hướng dùng để truy cập sâu vào Course, ví dụ Course.Id
        public TaiKhoanHV? TaiKhoanHV { get; set; }
    }
}