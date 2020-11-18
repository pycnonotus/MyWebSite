using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IUnitOfWork
    {
        ISpyInfoRepository SpyInfoRepository { get; }
        Task<bool> SaveAll();
    }
}
