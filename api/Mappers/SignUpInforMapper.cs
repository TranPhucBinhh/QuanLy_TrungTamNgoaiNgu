using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.SignUpInfor;
using api.Interfaces;
using api.Models;
using api.Repository;
using IeltsWebLearn.Data;
using Microsoft.EntityFrameworkCore;

namespace api.Mappers
{
    public static class SignUpInforMapper 
    {
        public static SignUpInforDto ToSignUpInforDto(this SignUpInfor signUpInforModel){
            return new SignUpInforDto {
                Id = signUpInforModel.Id,
                nameSt = signUpInforModel.nameSt,
                emailSt = signUpInforModel.emailSt,
                phoneSt = signUpInforModel.phoneSt,
                creatOn = signUpInforModel.creatOn,
                CourseId = signUpInforModel.CourseId
            };
        }

        public static SignUpInfor ToSignUpInforFromCreateDTO(this CreateSignUpInforRequestDto signupDto,int courseId){
            return new SignUpInfor{
                nameSt = signupDto.nameSt,
                emailSt = signupDto.emailSt,
                phoneSt = signupDto.phoneSt,
                CourseId = courseId
            };
        }
    }
}