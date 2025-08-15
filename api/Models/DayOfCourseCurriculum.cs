using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IeltsWebLearn.Models;

namespace api.Models
{
    public class DayOfCourseCurriculum
    {
        public int Id { get; set; }
        public DateTime ngayHoc { get; set; } =  DateTime.Now;
        public string Content { get; set; } = string.Empty;
        public List<ImgLinkCourseCurr> IdIMGlink { get; set; } = new List<ImgLinkCourseCurr>();
        public List<VideoLinkCourseCurr> IdlinkVideo { get; set; } = new List<VideoLinkCourseCurr>();
        public string? LinkQuiz { get; set; }
       

        // Navigation properties
         public int? IDClass { get; set; }
        public Class? Class { get; set; }
        public int? IDCourse { get; set; }
        public Course? Course { get; set; }
        public int? IDCourseCC { get; set; }
        public CourseCurriculum? CourseCurriculum { get; set; }
    }
}