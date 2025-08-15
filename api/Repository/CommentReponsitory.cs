using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using IeltsWebLearn.Data;
using IeltsWebLearn.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class CommentReponsitory : ICommentReponsitory
    {
        private readonly ApplicationDBContext _context;
        public CommentReponsitory(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Comment> CreateAsync(Comment commentModel)
        {
            await _context.Comments.AddAsync(commentModel);
            await _context.SaveChangesAsync();
            return commentModel;
        }

        public async Task<List<Comment>> GetAllAsync()
        {
            return await _context.Comments.ToListAsync();
        }

        public async Task<Comment?> GetByIdAsync(int id)
        {
           return await _context.Comments.FindAsync(id);
        }
        
    }
}