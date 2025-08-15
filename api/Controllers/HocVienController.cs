using api.Models;
using IeltsWebLearn.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HocVienController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public HocVienController(ApplicationDBContext context)
        {
            _context = context;
        }
        // GET: api/HocVien
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HocVien>>> GetAllHocViens()
        {
            return await _context.HocViens.ToListAsync();
        }

        // GET: api/HocVien/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<HocVien>> GetHocVien(int id)
        {
            var hocVien = await _context.HocViens.FindAsync(id);

            if (hocVien == null)
            {
                return NotFound();
            }

            return hocVien;
        }

        // POST: api/HocVien
        [HttpPost]
        public async Task<ActionResult<HocVien>> CreateHocVien(HocVien hocVien)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.HocViens.Add(hocVien);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetHocVien), new { id = hocVien.Id }, hocVien);
        }

        // PUT: api/HocVien/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateHocVien(int id, HocVien hocVien)
        {
            if (id != hocVien.Id)
            {
                return BadRequest("Id không khớp.");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Entry(hocVien).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HocVienExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/HocVien/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHocVien(int id)
        {
            var hocVien = await _context.HocViens.FindAsync(id);
            if (hocVien == null)
            {
                return NotFound();
            }

            _context.HocViens.Remove(hocVien);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HocVienExists(int id)
        {
            return _context.HocViens.Any(e => e.Id == id);
        }
    }
}
