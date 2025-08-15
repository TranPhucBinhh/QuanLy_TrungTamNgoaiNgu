namespace IeltsWebLearn.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public DateTime creatOn { get; set; } = DateTime.Now;

        // int? là mối quan hệ 1-nhiều
        public int? CourseId { get; set; }
        // Thuộc tính điều hướng dùng để truy cập sâu vào Course, ví dụ Course.Id
        public Course? Course { get; set; }
    }
}
