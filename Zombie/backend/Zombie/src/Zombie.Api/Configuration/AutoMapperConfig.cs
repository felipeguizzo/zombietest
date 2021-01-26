using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zombie.Api.Dtos;
using Zombie.Bussiness.Models;

namespace Zombie.Api.Configuration
{
    public class AutomapperConfig : Profile
    {
        public AutomapperConfig()
        {
            CreateMap<Resource, ResourceDto>().ReverseMap();

            CreateMap<Movement, MovementDto>()
                .ForMember(x => x.resource, map => map.MapFrom(x => x.Resource));

            CreateMap<MovementDto, Movement>()
                .ForMember(x => x.IdResource, map => map.MapFrom(x => x.resource.id));
        }
    }
}
