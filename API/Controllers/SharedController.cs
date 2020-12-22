using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using API.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class SharedController : BaseController
    {
        [HttpPost("contact")]
        public async Task<ActionResult> SendContactInfo(ContactDto contactDto)
        {
            try
            {
                var smtpClient = new SmtpClient("mail.antonweb.co.il")
                {
                    Port = 587,
                    Credentials = new NetworkCredential("antweb", "@f7g36V8;F)P;x*F"),
                    EnableSsl = true,
                };
                string title = "contact me mail from antonweb.co.il";
                string body = $"from\nmail:\t{contactDto.Email}\ntel:\t{contactDto.PhoneNumber}\nname:\t{contactDto.Name}\n\n\n{contactDto.Message}";
                smtpClient.Send("antweb@antonweb.co.il", "anton@antonweb.co.il", title, body);
                return Ok();
            }
            catch
            {
                return StatusCode(500);
            }


        }
    }
}
