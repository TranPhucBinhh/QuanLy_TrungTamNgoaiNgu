using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.CourseCurriculum;
using api.Models;
using IeltsWebLearn.Models;

namespace api.Mappers
{
    public static class CCMapper
    {
        public static CCDto ToCCDto(this CourseCurriculum courseCCModel){
            return new CCDto {
                Id = courseCCModel.Id,
                IdCourse = courseCCModel.IdCourse,
               
            };
        }

        public static CourseCurriculum ToCourseCCFromCreateDTO(this CreateCCRequestDto courseCCDto){
            return new CourseCurriculum{
                IdCourse = courseCCDto.IdCourse,
            };
        }
    }
}