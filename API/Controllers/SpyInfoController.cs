using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class SpyInfoController : BaseController
    {
        private readonly IUnitOfWork unitOfWork;
        public SpyInfoController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SpyDto>>> GetSpyInfo()
        {
            var spyInfo = await this.unitOfWork.SpyInfoRepository.GetSpyInfos();
            var result = spyInfo.ToList().Select(x => new SpyDto()
            {
                Date = x.RequestDate,
                Host = x.Ip
            });
            return Ok(result);
        }

        [HttpGet("cv")]
        public async Task<ActionResult> GetCvSpy()
        {
            var info = await OutsideSpyRepository.GetCvSpy();
            return Ok(info);
        }

    }
}
