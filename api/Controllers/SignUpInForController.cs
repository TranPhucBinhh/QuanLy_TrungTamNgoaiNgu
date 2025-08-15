using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.SignUpInfor;
using api.Interfaces;
using api.Mappers;
using IeltsWebLearn.Data;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/SignUpInfor")]
    [ApiController]
    public class SignUpInForController : ControllerBase
    {
        //readonly để chống người dùng chỉnh sửa db
        private readonly ApplicationDBContext _context;
        private readonly ISignUpInforReponsitory _signupinforRepon;
        private readonly ICourseReponsitory _courseRepo;
        //ApplicationDBContext để tương tác với db
        public SignUpInForController(ApplicationDBContext context, ISignUpInforReponsitory signupinforRepon,ICourseReponsitory courseRepo)
        {
            _signupinforRepon= signupinforRepon;
            _courseRepo = courseRepo;
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll(){
            var signUpInfors = await _signupinforRepon.GetAllAsync();
            var signupDto =  signUpInfors.Select(s=>s.ToSignUpInforDto());

            return Ok(signupDto);
        }


        [HttpGet("{Id}")]
        public async Task<IActionResult> GetById([FromRoute]int Id)
        {
            var signUp = await _signupinforRepon.GetByIdAsync(Id);

            if(signUp == null)
            {
                return NotFound();
            }

            return Ok(signUp.ToSignUpInforDto());
        }
        //dùng FromBody bởi vì dữ liệu được truyền vào từ phần body của http 
        //gửi request tới Dto để hạn chế lượng thông tin mà người dùng gửi tới
       [HttpPost("{courseId}")]
       public async Task<IActionResult> Create([FromRoute] int courseId,[FromBody] CreateSignUpInforRequestDto signupDto){
          if(!await _courseRepo.CourseExists(courseId)){
                return BadRequest("Course Không Tồn Tại");
            }
            var signupModel = signupDto.ToSignUpInforFromCreateDTO(courseId);
            await _signupinforRepon.CreateAsync(signupModel);
            return CreatedAtAction(nameof(GetById),new {id=signupModel},signupModel.ToSignUpInforDto());
       }

    
       [HttpDelete]
       [Route("{Id}")]
       public async Task<IActionResult> Delete([FromRoute] int Id){
        var signupModel = await _signupinforRepon.DeleteAsync(Id);
        
        if(signupModel == null){
            return NotFound();
        }
        
        return NoContent();
       }
    }
}