using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProjectController : BaseController
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        public ProjectController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.mapper = mapper;
            this.unitOfWork = unitOfWork;
        }

        [HttpPost]
        public async Task<ActionResult> AddProject(AddProjectDto addProjectDto)
        {
            var project = this.mapper.Map<Projects>(addProjectDto);
            await unitOfWork.ProjectRepository.AddProject(project);


            return await unitOfWork.SaveAll() ? Ok() : BadRequest();
        }
    }
}