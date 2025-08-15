using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IeltsWebLearn.Models;

namespace api.Models
{
    public class Class
    {
        public int Id { get; set; }
        public string Room { get; set; }

        // Change WeakTime to a list to store multiple days
        public List<DayOfWeek> WeakTimes { get; set; } = new List<DayOfWeek>();

        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }
        public int? IdGV { get; set; }
        public List<Student> Students { get; set; } = new List<Student>();
        public int? CourseCurr;

        // Navigation properties
        public int IdCourse { get; set; }
        public Course? Course { get; set; }
    }
}