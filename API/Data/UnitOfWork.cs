using System.Threading.Tasks;
using API.Interfaces;
using AutoMapper;
using Data;

namespace API.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext dataContext;
        private readonly IMapper mapper;
        public UnitOfWork(DataContext dataContext, IMapper mapper)
        {
            this.mapper = mapper;
            this.dataContext = dataContext;
        }

        public ISpyInfoRepository SpyInfoRepository => new SpyInfoRepository(this.dataContext);

        public IProjectRepository ProjectRepository => new ProjectRepository(this.dataContext, mapper);

        public async Task<bool> SaveAll()
        {
            return (await this.dataContext.SaveChangesAsync() > 0);
        }
    }
}
