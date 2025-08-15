using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Interfaces
{
    public interface IEmailReponsitory
    {
        Task<List<EmailLog>> GetAllAsync();
        // ? bởi vì fistordefault có thể trả về null
        Task<EmailLog?> GetByIdAsync(int id);
        Task<EmailLog> CreateAsync(EmailLog emailModel);
        Task<EmailLog?> DeleteAsync(int id);
        
    }
}