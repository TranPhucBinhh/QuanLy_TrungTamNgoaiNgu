using System.ComponentModel.DataAnnotations;

namespace api.Models
{

    public class HocVien
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Họ tên không được để trống")]
        public string HoTen { get; set; }

        public DateTime NgaySinh { get; set; }
        public string DiaChi { get; set; }

        [Required(ErrorMessage = "Email không được để trống")]
        [EmailAddress(ErrorMessage = "Email không đúng định dạng")]
        public string Email { get; set; }
        public int Sdt { get; set; }
    }
}
