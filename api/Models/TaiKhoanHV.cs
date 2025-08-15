using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class TaiKhoanHV
{
    [Key] 
    public int ID { get; set; }
    [EmailAddress(ErrorMessage = "Email không đúng định dạng")]
    public string Email { get; set; }

    [Required(ErrorMessage = "Mật khẩu không được để trống")]
    [StringLength(50, ErrorMessage = "Mật khẩu không được quá 50 ký tự")]
    public string MatKhau { get; set; }

    [Required(ErrorMessage = "Mã học viên không được để trống")]
    public int? idHV { get; set; } 

}
}