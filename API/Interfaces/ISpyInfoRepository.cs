using System.Collections.Generic;
using System.Threading.Tasks;
using Entities;

namespace API.Interfaces
{
    public interface ISpyInfoRepository
    {
        Task<IEnumerable<SpyInfo>> GetSpyInfos();
    }
}
