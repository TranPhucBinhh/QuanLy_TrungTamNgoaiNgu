using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using IeltsWebLearn.Models;

namespace api.Models
{
    public class SignUpInfor
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Tên không được để trống")]
        public string nameSt { get; set; } = string.Empty;
         [EmailAddress(ErrorMessage = "Email không đúng định dạng")]
        [StringLength(100, ErrorMessage = "Email không được quá 100 ký tự")]
        public string? emailSt { get; set; } = string.Empty;

         [Phone(ErrorMessage = "Số điện thoại không đúng định dạng")]
        [StringLength(15, ErrorMessage = "Số điện thoại không được quá 15 ký tự")]
        public string phoneSt { get; set; } = string.Empty;

        [Required(ErrorMessage = "Ngày tạo không được để trống")]
        [DataType(DataType.DateTime)]
        public DateTime creatOn { get; set; } = DateTime.Now;
        public int CourseId { get; set; }
        // Thuộc tính điều hướng dùng để truy cập sâu vào Course, ví dụ Course.Id
        public Course? Course { get; set; }

    }
}