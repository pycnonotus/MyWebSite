using System.IO;
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

        public async System.Threading.Tasks.Task<ActionResult> IndexAsync()
        {
            string ip = this.Request.HttpContext.Connection.RemoteIpAddress + "@" + this.Request.HttpContext.Connection.LocalIpAddress;
            await dataContext.SpyInfos.AddAsync(
                new SpyInfo()
                {
                    Ip = ip
                }
            );
            await dataContext.SaveChangesAsync();
            if (User.Identity.IsAuthenticated)
            {

                return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/HTML");
            }
            else
            {
                return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwrootUnAuth", "index.html"), "text/HTML");
            }
        }
    }
}
