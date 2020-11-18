using System.Threading.Tasks;
using API.Interfaces;
using Data;

namespace API.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext dataContext;
        public UnitOfWork(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public ISpyInfoRepository SpyInfoRepository => new SpyInfoRepository(this.dataContext);

        public async Task<bool> SaveAll()
        {
            return (await this.dataContext.SaveChangesAsync() > 0);
        }
    }
}
