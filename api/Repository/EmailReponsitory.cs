using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Models;
using IeltsWebLearn.Data;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class EmailReponsitory : IEmailReponsitory
    {
        private readonly ApplicationDBContext _context;
        private readonly IConfiguration _config;
        public EmailReponsitory (ApplicationDBContext context, IConfiguration cofig){
            _config = cofig;
            _context = context;
        }
        public async Task<EmailLog> CreateAsync(EmailLog emailModel)
        {
            await _context.EmailLogs.AddAsync(emailModel);
            await _context.SaveChangesAsync();
            return emailModel;
        }

        public async Task<EmailLog?> DeleteAsync(int id)
        {
            var emailModel = await _context.EmailLogs.FirstOrDefaultAsync(x=>x.Id==id);

            if(emailModel == null){
                return null;
            }
            _context.EmailLogs.Remove(emailModel);

            await _context.SaveChangesAsync();
            return emailModel;
        }

        public async Task<List<EmailLog>> GetAllAsync()
        {
            return await _context.EmailLogs.ToListAsync();
        }

        public async Task<EmailLog?> GetByIdAsync(int id)
        {
            return await _context.EmailLogs.FindAsync(id);
        }
    }
}