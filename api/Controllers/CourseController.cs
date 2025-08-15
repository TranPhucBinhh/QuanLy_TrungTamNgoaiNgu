using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Courses;
using api.Interfaces;
using api.Mappers;
using IeltsWebLearn.Data;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
    [Route("api/Course")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        //readonly để chống người dùng chỉnh sửa db
        private readonly ApplicationDBContext _context;
        private readonly ICourseReponsitory _courseRepon;
        //ApplicationDBContext để tương tác với db
        public CourseController(ApplicationDBContext context, ICourseReponsitory courseRepon)
        {
            _courseRepon= courseRepon;
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll(){
            var courses = await _courseRepon.GetAllAsync();
            var courseDto =  courses.Select(s=>s.ToCourseDto());

            return Ok(courseDto);
        }


        [HttpGet("{Id}")]
        public async Task<IActionResult> GetById([FromRoute]int Id)
        {
            var course = await _courseRepon.GetByIdAnsyc(Id);

            if(course == null)
            {
                return NotFound();
            }

            return Ok(course.ToCourseDto());
        }
        //dùng FromBody bởi vì dữ liệu được truyền vào từ phần body của http 
        //gửi request tới Dto để hạn chế lượng thông tin mà người dùng gửi tới
       [HttpPost]
       public async Task<IActionResult> Create([FromBody] CreateCourseRequestDto courseDto){
            var courseModel = courseDto.ToCourseFromCreateDTO();
            await _courseRepon.CreateAsync(courseModel);
            return CreatedAtAction(nameof(GetById),new {id=courseModel.Id},courseModel.ToCourseDto());
       }

       [HttpPut]
       [Route("{Id}")]
       public async Task<IActionResult> Update([FromRoute] int Id,[FromBody] UpdateCourseRequestDto updateDto){
            var courseModel = await _courseRepon.UpdateAsync(Id,updateDto);
            if(courseModel == null){
                return NotFound();
            }

            return Ok(courseModel.ToCourseDto());
       }

       [HttpDelete]
       [Route("{Id}")]
       public async Task<IActionResult> Delete([FromRoute] int Id){
        var courseModel = await _courseRepon.DeleteAsync(Id);
        
        if(courseModel == null){
            return NotFound();
        }
        
        return NoContent();
       }
    }
}