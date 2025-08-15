using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Comment
{
    public class CommentDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public DateTime creatOn { get; set; } = DateTime.Now;

        // int? là mối quan hệ 1-nhiều
        public int? CourseId { get; set; }
    
    }
}