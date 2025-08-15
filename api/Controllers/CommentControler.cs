using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Comment;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
    [Route("api/Comment")]
    [ApiController]
    public class CommentControler : ControllerBase
    {
       private readonly ICommentReponsitory _commentRepo;
       private readonly ICourseReponsitory _courseRepo;
       public CommentControler(ICommentReponsitory commentRepo,ICourseReponsitory courseRepo)
       {
            _commentRepo = commentRepo;
            _courseRepo = courseRepo;
       }

       [HttpGet]
       public async Task<IActionResult> GetAllAsync(){
            var comments = await _commentRepo.GetAllAsync();

            var commentDto = comments.Select(s=>s.ToCommentDto());

            return Ok(commentDto);
       }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetById([FromRoute]int Id)
        {
            var comment = await _commentRepo.GetByIdAsync(Id);

            if(comment == null)
            {
                return NotFound();
            }

            return Ok(comment.ToCommentDto());
        }

        [HttpPost("{courseId}")]
        public async Task<IActionResult> Create([FromRoute] int courseId,CreateCommentDto commentDto){
            if(!await _courseRepo.CourseExists(courseId)){
                return BadRequest("Course Không Tồn Tại");
            }
            var commentModel = commentDto.ToCommentFromCreate(courseId);
            await _commentRepo.CreateAsync(commentModel);
            return CreatedAtAction(nameof(GetById),new{id=commentModel},commentModel.ToCommentDto());
        }
    }
}