using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Interfaces
{
    public interface ISignUpInforReponsitory
    {
        Task<List<SignUpInfor>> GetAllAsync();
        // ? bởi vì fistordefault có thể trả về null
        Task<SignUpInfor?> GetByIdAsync(int id);
        Task<SignUpInfor> CreateAsync(SignUpInfor signUpInforModel);
        Task<SignUpInfor?> DeleteAsync(int id);
        Task<bool> SignUpExists(int id);
    }
}