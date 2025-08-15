using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IeltsWebLearn.Models;

namespace api.Models
{
    public class Teacher
    {
        public int Id { get; set; }
        public string NameGV { get; set; } = string.Empty;
        public string EmailGV { get; set; } = string.Empty;
        public string PhoneGV { get; set; } = string.Empty;
        public string DiaChi { get; set; } = string.Empty;
        public float? IeltsScore { get; set; }
        public string teacherIMG { get; set; } = string.Empty;

        // Các lớp học mà giảng viên giảng dạy
        public List<Class> Classes { get; set; } = new List<Class>();
        public List<Course> Courses { get; set; } = new List<Course>();

        public int? IdAccountGV { get; set; }
        public TeacherAccount AccountGV { get; set; }
    }
}