using System;
using System.Collections.Generic;
using System.Diagnostics.Metrics;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Courses;
using IeltsWebLearn.Models;

namespace api.Interfaces
{
    public interface ICourseReponsitory
    {
        Task<List<Course>> GetAllAsync();
        // ? bởi vì fistordefault có thể trả về null
        Task<Course?> GetByIdAnsyc(int id);
        Task<Course> CreateAsync(Course courseModel);
        Task<Course?> UpdateAsync(int id, UpdateCourseRequestDto courseDto);
        Task<Course?> DeleteAsync(int id);
        Task<bool> CourseExists(int id);
    }
}