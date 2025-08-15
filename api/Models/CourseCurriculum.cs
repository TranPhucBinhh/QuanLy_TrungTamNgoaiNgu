using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IeltsWebLearn.Models;

namespace api.Models
{
    public class CourseCurriculum
    {
        public int Id { get; set; }
        

        public List<DayOfCourseCurriculum> dayOfCourseCurricula {get;set;} = new List<DayOfCourseCurriculum>();
        // Navigation properties
        public int IdCourse { get; set; }
        public Course? Course { get; set; }
    }
}