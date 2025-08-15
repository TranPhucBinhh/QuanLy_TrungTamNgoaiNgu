using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Email;
using api.Models;

namespace api.Mappers
{
    public static class EmailMapper
    {
        public  static EmailDto ToEmailDto (this EmailLog emailModel ){
            return new EmailDto {
                Id = emailModel.Id,
                CustomerEmail = emailModel.CustomerEmail,
                Subject = emailModel.Subject,
                Message =emailModel.Message,
            };
        }

        public static EmailLog  ToEmailFromCreateDTO(this CreateEmailRequestDto emailDto){
            return new EmailLog{
                CustomerEmail = emailDto.CustomerEmail,
                Subject = emailDto.Subject,
                Message = emailDto.Message
            };
        }
    }
}