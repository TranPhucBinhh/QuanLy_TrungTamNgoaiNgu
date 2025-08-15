using System.ComponentModel.DataAnnotations.Schema;
using api.Models;

namespace IeltsWebLearn.Models
{
    /*
    cách tạo bảng trong db
    1.tạo file cs trong models
    2.add vào file ApplicationDBContext.cs
    3. chạy trong terminal lệnh dotnet ef migrations add (Tên)
    4. dotnet ef database update
    */
    public class Course
    {
        public int Id { get; set; }
        public string courseName { get; set; } = string.Empty;
        public string courseIMG { get; set; } = string.Empty;
        public int courseSignUp { get; set; } 
        //Giới hạn số nhập vào ,1 là chỉ có 1 số thập phân
        [Column(TypeName ="decimal(18,1)")]
        public decimal price { get; set; }
        public string courseDescription { get; set; } = string.Empty;
        public DateTime startTime {get;set;}
        public DateTime endTime {get;set;}
        public List<Class> Class  { get; set; }  = new List<Class>();
        public List<ImgLinkCourse> courseIMGMore { get; set; }  = new List<ImgLinkCourse>();
        public List<VideoLinkCourse> videoLinkCourses { get; set; } = new List<VideoLinkCourse>();
        public List<Comment> Comments { get; set; } = new List<Comment>();
        public List<Student> Students { get; set; } = new List<Student>();
        public List<Teacher> Teachers { get; set; } = new List<Teacher>();
        public int? IdCourseCurr;
        public CourseCurriculum? courseCurriculum;
    }
}
