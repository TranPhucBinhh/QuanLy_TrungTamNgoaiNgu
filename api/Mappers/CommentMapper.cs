using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Comment;
using IeltsWebLearn.Models;

namespace api.Mappers
{
    public static class CommentMapper
    {
        public static CommentDto ToCommentDto(this Comment commentModel){
            return new CommentDto{
                Id = commentModel.Id,
                Title = commentModel.Title,
                Content = commentModel.Content,
                creatOn = commentModel.creatOn,
                CourseId = commentModel.CourseId
            };
        }
        public static Comment ToCommentFromCreate(this CreateCommentDto commentDto,int courseId){
            return new Comment{
                Title = commentDto.Title,
                Content = commentDto.Content,
                CourseId = courseId
            };
        }
    }
}