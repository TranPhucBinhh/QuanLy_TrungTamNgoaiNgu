using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IeltsWebLearn.Models;

namespace api.Models
{
    public class VideoLinkCourse
    {
        public int Id { get; set; }
        public int? IdCourse { get; set; }
        public string Url { get; set; }

        // Navigation properties
       
    }
}