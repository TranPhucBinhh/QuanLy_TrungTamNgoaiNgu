using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using IeltsWebLearn.Models;

namespace api.Dtos.CourseCurriculum
{
    public class CreateCCRequestDto
    {
        public int IdCourse { get; set; }
        public int? IdDOC { get; set; }
        public DayOfCourseCurriculum dayOfCourseCurriculum {get;set;}
        public List<DayOfCourseCurriculum> dayOfCourseCurricula {get;set;} = new List<DayOfCourseCurriculum>();
        // Navigation properties
        public Course Course { get; set; }
    }
}