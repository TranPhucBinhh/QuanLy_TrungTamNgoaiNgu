using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Email
{
    public class CreateEmailRequestDto
    {
        public string CustomerEmail { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        public DateTime SentTime { get; set; } = DateTime.Now;
    }
}