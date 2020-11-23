using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IUnitOfWork
    {
        ISpyInfoRepository SpyInfoRepository { get; }
        IProjectRepository ProjectRepository { get; }
        Task<bool> SaveAll();
    }
}
