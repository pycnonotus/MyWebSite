using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Data;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class ProjectRepository : IProjectRepository
    {
        private readonly DataContext dataContext;
        private readonly IMapper mapper;
        public ProjectRepository(DataContext dataContext, IMapper mapper)
        {
            this.mapper = mapper;
            this.dataContext = dataContext;
        }

        public Task AddProject(AddProjectDto addProjectDto)
        {
            throw new System.NotImplementedException();
        }

        public async Task AddProject(Projects projectDto)
        {
            await this.dataContext.Projects.AddAsync(projectDto);
        }

        public async Task<IEnumerable<ProjectDto>> GetProjects()
        {
            var projects = await this.dataContext.Projects.Where(x => x.Name != "")
            .ProjectTo<ProjectDto>(mapper.ConfigurationProvider)
            .ToListAsync();
            return projects;
        }
    }
}
