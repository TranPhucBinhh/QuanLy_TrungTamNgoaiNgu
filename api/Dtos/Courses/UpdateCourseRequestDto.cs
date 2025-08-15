using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Dtos.Courses
{
    public class UpdateCourseRequestDto
    {
        public string courseName { get; set; } = string.Empty;
        public string courseIMG { get; set; } = string.Empty;
        //Giới hạn số nhập vào ,1 là chỉ có 1 số thập phân
        [Column(TypeName ="decimal(18,1)")]
        public decimal price { get; set; }

        public string courseDescription { get; set; } = string.Empty;
        public int courseSignUp { get; set; }
         public DateTime startTime {get;set;}
        public DateTime endTime {get;set;}
        public List<ImgLinkCourse> courseIMGMore { get; set; }  = new List<ImgLinkCourse>();
        public List<VideoLinkCourse> videoLinkCourses { get; set; } = new List<VideoLinkCourse>();
    }
}