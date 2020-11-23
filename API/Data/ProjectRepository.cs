using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Data;

namespace API.Data
{
    public class ProjectRepository : IProjectRepository
    {
        private readonly DataContext dataContext;
        public ProjectRepository(DataContext dataContext)
        {
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
    }
}
