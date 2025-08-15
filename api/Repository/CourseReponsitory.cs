using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Courses;
using api.Interfaces;
using IeltsWebLearn.Data;
using IeltsWebLearn.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Respository
{
    public class CourseReponsitory : ICourseReponsitory
    {
        private readonly ApplicationDBContext _context;
        public CourseReponsitory(ApplicationDBContext context)
        {
            _context = context;
        }

        public Task<bool> CourseExists(int id)
        {
            return _context.Courses.AnyAsync(s=>s.Id==id);
        }

        public async Task<Course> CreateAsync(Course courseModel)
        {
            await _context.Courses.AddAsync(courseModel);
            await _context.SaveChangesAsync();
            return courseModel;
        }

        public async Task<Course?> DeleteAsync(int Id)
        {
            var courseModel = await _context.Courses.FirstOrDefaultAsync(x=>x.Id==Id);

            if(courseModel == null){
                return null;
            }
            _context.Courses.Remove(courseModel);

            await _context.SaveChangesAsync();
            return courseModel;
        }

        public async  Task<List<Course>> GetAllAsync()
        {
            return await _context.Courses.Include(c=>c.Comments).ToListAsync();
        }

        public async Task<Course?> GetByIdAnsyc(int id)
        {
            return await _context.Courses.Include(c=>c.Comments).FirstOrDefaultAsync(i=>i.Id==id);
        }

        public async Task<Course?> UpdateAsync(int id, UpdateCourseRequestDto courseDto)
        {
            var existingCourse = await _context.Courses.FirstOrDefaultAsync(x=>x.Id==id);

            if(existingCourse == null){
                return null;
            }

            existingCourse.courseName= courseDto.courseName;
            existingCourse.price = courseDto.price;
            existingCourse.courseDescription=courseDto.courseDescription;
            existingCourse.courseSignUp=courseDto.courseSignUp;
            existingCourse.startTime=courseDto.startTime;
            existingCourse.endTime=courseDto.endTime;
            
            await _context.SaveChangesAsync();

            return existingCourse; 

        }
    }
}