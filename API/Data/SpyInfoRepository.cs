using System.Collections.Generic;
using System.Threading.Tasks;
using API.Interfaces;
using Data;
using Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class SpyInfoRepository : ISpyInfoRepository
    {
        private readonly DataContext context;
        public SpyInfoRepository(DataContext context)
        {
            this.context = context;
        }


        public async Task<IEnumerable<SpyInfo>> GetSpyInfos()
        {
            return await this.context.SpyInfos.ToListAsync();
        }
    }
}
