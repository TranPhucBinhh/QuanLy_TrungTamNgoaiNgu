using api.Models;
using IeltsWebLearn.Models;
using Microsoft.EntityFrameworkCore;

namespace IeltsWebLearn.Data
{
    //Dùng để tìm kiếm và sử dụng các bảng riêng lẻ trong DB
    // : DbContext là kế thừa
    public class ApplicationDBContext : DbContext
    {
        //Tạo db và các bảng bằng EntityFrameWork
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> dbContextOptions) : base(dbContextOptions)
        {

        }
        //Tạo bảng cho db
        public DbSet<Course> Courses { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Class> Classes { get; set; }
        public DbSet<CourseCurriculum> CourseCurricula { get; set; }
        public DbSet<DayOfCourseCurriculum> DayOfCourseCurricula { get; set; }
        public DbSet<SignUpInfor> SignUpInfors { get; set; }
        public DbSet<Student> Student { get; set; }
        public DbSet<EmailLog> EmailLogs { get; set; }
        public DbSet<TaiKhoanHV> TaiKhoanHVs { get; set; }
        public DbSet<ImgLinkCourse> ImgLinkCourses { get; set; }
        public DbSet<ImgLinkCourseCurr> ImgLinkCourseCurrs { get; set; }
        public DbSet<VideoLinkCourse> VideoLinkCourses { get; set; }
        public DbSet<VideoLinkCourseCurr> VideoLinkCourseCurrs { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<TeacherAccount> TeacherAccounts { get; set; }
        public DbSet<HocVien> HocViens { get; set; }
    }


}

