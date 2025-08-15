using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.CourseCurriculum;
using api.Interfaces;
using api.Models;
using IeltsWebLearn.Data;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class CourseCCReponsitory : ICourseCCReponsitory
    {
        private readonly ApplicationDBContext _context;
        public CourseCCReponsitory(ApplicationDBContext context)
        {
            _context = context;
        }

        public Task<bool> CourseCCExists(int id)
        {
           return _context.CourseCurricula.AnyAsync(s=>s.Id==id);
        }

        public async Task<CourseCurriculum> CreateAsync(CourseCurriculum courseCCModel)
        {
            await _context.CourseCurricula.AddAsync(courseCCModel);
            await _context.SaveChangesAsync();
            return courseCCModel;
        }

        public async Task<CourseCurriculum?> DeleteAsync(int id)
        {
           var courseCCModel = await _context.CourseCurricula.FirstOrDefaultAsync(x=>x.Id==id);

            if(courseCCModel == null){
                return null;
            }
            _context.CourseCurricula.Remove(courseCCModel);

            await _context.SaveChangesAsync();
            return courseCCModel;
        }

        public async Task<List<CourseCurriculum>> GetAllAsync()
        {
            return await _context.CourseCurricula.ToListAsync();
        }

        public async Task<CourseCurriculum?> GetByIdAnsyc(int id)
        {
           return await _context.CourseCurricula.FirstOrDefaultAsync(i=>i.Id==id);
        }

        public async Task<CourseCurriculum?> UpdateAsync(int id, UpdateCCRequestDto courseCCDto)
        {
            var existingCourseCC = await _context.CourseCurricula.FirstOrDefaultAsync(x=>x.Id==id);

            if(existingCourseCC == null){
                return null;
            }

            existingCourseCC.IdCourse= courseCCDto.IdCourse;
            await _context.SaveChangesAsync();

            return existingCourseCC; 
        }
    }

}