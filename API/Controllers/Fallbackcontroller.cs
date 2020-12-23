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
        public async System.Threading.Tasks.Task<ActionResult> IndexAsync()
        {

            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/HTML");

        }
    }
}
