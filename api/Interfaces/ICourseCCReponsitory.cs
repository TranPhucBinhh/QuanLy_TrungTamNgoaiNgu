using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.CourseCurriculum;
using api.Models;
using IeltsWebLearn.Models;

namespace api.Interfaces
{
    public interface ICourseCCReponsitory
    {
        Task<List<CourseCurriculum>> GetAllAsync();
        // ? bởi vì fistordefault có thể trả về null
        Task<CourseCurriculum?> GetByIdAnsyc(int id);
        Task<CourseCurriculum> CreateAsync(CourseCurriculum courseCCModel);
        Task<CourseCurriculum?> UpdateAsync(int id, UpdateCCRequestDto courseCCDto);
        Task<CourseCurriculum?> DeleteAsync(int id);
        Task<bool> CourseCCExists(int id);
    }
}