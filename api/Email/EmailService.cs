using System.IO;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MimeKit;

namespace api.Email
{
    public class EmailService
    {
        private readonly IConfiguration _config;

        public EmailService(IConfiguration config)
        {
            _config = config;
        }

        public async Task SendEmailAsync(string customerEmail, string customerName, string customerPhone)
        {
            string subject = "Welcome to L&T Education";

            // Read and populate email template with user data
            string message = await ReadTemplateFileAsync(customerName, customerEmail, customerPhone);

            var email = new MimeMessage();
            email.From.Add(new MailboxAddress("L&T Education", "lt.educationielts@gmail.com"));
            email.To.Add(new MailboxAddress("", customerEmail));
            email.Subject = subject;

            email.Body = new TextPart("plain")
            {
                Text = message
            };

            using (var smtp = new SmtpClient())
            {
                smtp.Connect("smtp.gmail.com", 587, false);
                smtp.Authenticate("lt.educationielts@gmail.com", "jocy stit fkvn yihx");

                await smtp.SendAsync(email);
                smtp.Disconnect(true);
            }
        }

        private async Task<string> ReadTemplateFileAsync(string name, string email, string phone)
        {
            string templatePath = Path.Combine(Directory.GetCurrentDirectory(), "Templates", "EmailTemplate.txt");
            string templateContent = await File.ReadAllTextAsync(templatePath);

            // Replace placeholders with customer details
            templateContent = templateContent.Replace("{Name}", name)
                                             .Replace("{Email}", email)
                                             .Replace("{Phone}", phone);

            return templateContent;
        }
    }
}
