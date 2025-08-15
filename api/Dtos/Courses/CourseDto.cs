using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using api.Dtos.Comment;
using api.Models;


namespace api.Dtos.Courses
{
    //Data Transfer Object
    public class CourseDto
    {
        public int Id { get; set; }
        public string courseName { get; set; } = string.Empty;
        public string courseIMG { get; set; } = string.Empty;
        public decimal price { get; set; }
        public string courseDescription { get; set; } = string.Empty;
        public List<CommentDto> Comments {get;set;}
        public int courseSignUp { get; set; }
        public int? IdClass;
        public Class? Class;
        public DateTime startTime {get;set;}
        public DateTime endTime {get;set;}
        public List<ImgLinkCourse> courseIMGMore { get; set; }  
        public List<Student> Student { get; set; } 
        public List<VideoLinkCourse> videoLinkCourses { get; set; } 
    }
}