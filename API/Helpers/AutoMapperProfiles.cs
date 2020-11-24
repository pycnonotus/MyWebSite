using System.Collections.Generic;
using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<RegisterDto, AppUsers>();
            CreateMap<AddProjectDto, Projects>();
            CreateMap<string, Tags>()
            .ForMember(x => x.Tag,
                o => o.MapFrom(s => s)
            );
            CreateMap<Projects, ProjectDto>();
            CreateMap<Tags, string>().ConvertUsing(r => r.Tag);
            
        }
    }
}
