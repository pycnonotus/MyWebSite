using System.Threading.Tasks;
using API.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AccountController : BaseController
    {
        public AccountController()
        {
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDto registerDto)
        {
            return Ok(registerDto);
        }
        // private async Task<bool> UserExists(string username)
        // {
        //     return await this.userManager.Users.AnyAsync(x => x.UserName == username.ToLower());
        // }

    }
}
