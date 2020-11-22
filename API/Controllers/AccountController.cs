using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AccountController : BaseController
    {
        private readonly UserManager<AppUsers> userManager;
        private readonly IMapper mapper;
        private readonly ITokenService tokenService;
        private readonly SignInManager<AppUsers> signInManager;
        public AccountController(UserManager<AppUsers> userManager, SignInManager<AppUsers> signInManager, ITokenService tokenService, IMapper mapper)
        {
            this.signInManager = signInManager;
            this.tokenService = tokenService;
            this.mapper = mapper;
            this.userManager = userManager;
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (await UserExists(registerDto.Username.ToUpper()))
            {
                return BadRequest("Username already exists");
            }
            var user = this.mapper.Map<AppUsers>(registerDto);
            var result = await this.userManager.CreateAsync(user, registerDto.Password);
            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }




            return new UserDto
            {
                Username = registerDto.Username,
                Token = await tokenService.CreateToken(user),

            };
        }


        [HttpGet("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {

            var user = await userManager.Users.
           SingleOrDefaultAsync(x => x.UserName == loginDto.Username.ToLower());
            if (user == null)
            {
                return Unauthorized("Cant find user with the name");
            }

            var result = await this.signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);
            if (!result.Succeeded)
            {
                return Unauthorized();
            }


            return new UserDto
            {
                Username = user.UserName,
                Token = await tokenService.CreateToken(user),

            };
        }

        private async Task<bool> UserExists(string username)
        {
            return await this.userManager.Users.AnyAsync(x => x.NormalizedUserName == username.ToUpper());
        }

    }
}
