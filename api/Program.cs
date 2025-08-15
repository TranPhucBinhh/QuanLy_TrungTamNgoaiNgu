using api.Email;
using api.Interfaces;
using api.Repository;
using api.Respository;
using IeltsWebLearn.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add NewtonsoftJson to prevent reference loop issues
builder.Services.AddControllers().AddNewtonsoftJson(options =>
{
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
});

// Cấu hình CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173", "http://localhost:5174","https://ielts-ntcy29pfr-anhdophans-projects.vercel.app") // Địa chỉ frontend
                  .AllowAnyHeader()
                  .AllowAnyMethod()
                  .AllowCredentials(); // Cho phép gửi credentials nếu cần
        });
});

// Connect to the PostgreSQL database
builder.Services.AddDbContext<ApplicationDBContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// Đăng ký SignalR service
builder.Services.AddSignalR();  // Thêm dòng này để đăng ký SignalR

// Register Repositories
builder.Services.AddScoped<ICourseReponsitory, CourseReponsitory>();
builder.Services.AddScoped<ICommentReponsitory, CommentReponsitory>();
builder.Services.AddScoped<ISignUpInforReponsitory, SignUpInforReponsitory>();
builder.Services.AddScoped<ICourseCCReponsitory, CourseCCReponsitory>();
builder.Services.AddScoped<IEmailReponsitory, EmailReponsitory>(); // Assuming EmailReponsitory is the implementation
builder.Services.AddScoped<EmailService>();



// Build the app after configuring services
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment() || !app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();

// Use CORS (Ensure this is placed before app.UseAuthorization)
app.UseCors("AllowSpecificOrigin");

app.UseAuthorization();

app.MapHub<ChatHub>("/chatHub");

app.MapControllers();

app.Run();
