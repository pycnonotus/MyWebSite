using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IProjectRepository
    {
        Task AddProject(AddProjectDto addProjectDto);
        Task AddProject(Projects projectDto);
        Task<IEnumerable<ProjectDto>> GetProjects();
    }
}
