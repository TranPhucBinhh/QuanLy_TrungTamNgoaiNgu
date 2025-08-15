using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class TeacherAccount
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [EmailAddress]
        //[StringLength(30,MinimumLength = 6,ErrorMessage ="User Name phải có độ dài từ 6 đến 30 ký tự")]
        public string EmailAddress { get; set; }
        [Required]
        [PasswordPropertyText]
        //[StringLength(50,MinimumLength =6,ErrorMessage ="Password phải có độ dài từ 6 đến 50 ký tự")]
        public string Password { get; set; }
        
        
        public int TeacherId { get; set; }
        public Teacher teacher {get;set;}
    }
}