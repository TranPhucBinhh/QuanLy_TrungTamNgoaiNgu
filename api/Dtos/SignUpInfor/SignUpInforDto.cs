using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.SignUpInfor
{
    public class SignUpInforDto
    {
         public int Id { get; set; }
        public string nameSt { get; set; } = string.Empty;
        public string emailSt { get; set; } = string.Empty;

        public string phoneSt { get; set; } = string.Empty;
        public DateTime creatOn { get; set; } = DateTime.Now;
        public int CourseId { get; set; }
    }
}