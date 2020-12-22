using System.IO;
using API.DTOs;
using Data;
using Entities;
using Microsoft.AspNetCore.Mvc;

namespace Controllers
{
    public class Fallbackcontroller : Controller
    {
        private readonly DataContext dataContext;
        public Fallbackcontroller(DataContext dataContext)
        {
            this.dataContext = dataContext;

        }

        [HttpGet]
        [HttpPost]
        public async System.Threading.Tasks.Task<ActionResult> IndexAsync([FromQuery] GetTokenLoginDto tokenDto, string token)
        {
            string ip = this.Request.HttpContext.Connection.RemoteIpAddress + "@" + this.Request.HttpContext.Connection.LocalIpAddress;
            await dataContext.SpyInfos.AddAsync(
                new SpyInfo()
                {
                    Ip = ip
                }
            );
            await dataContext.SaveChangesAsync();
            if (tokenDto.Token == null)
            {
                tokenDto.Token = "";
            }
            if (token == null)
            {
                token = "";
            }
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/HTML");

        }
    }
}
