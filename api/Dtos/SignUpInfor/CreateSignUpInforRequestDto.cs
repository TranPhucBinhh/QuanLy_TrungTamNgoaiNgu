using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.SignUpInfor
{
    public class CreateSignUpInforRequestDto
    {
        
        public string nameSt { get; set; } = string.Empty;
        public string emailSt { get; set; } = string.Empty;

        public string phoneSt { get; set; } = string.Empty;
        public DateTime creatOn { get; set; } = DateTime.Now;

    }
}