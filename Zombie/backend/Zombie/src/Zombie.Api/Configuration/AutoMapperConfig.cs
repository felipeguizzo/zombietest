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
            CreateMap<Movement, MovementDto>().ReverseMap();
        }
    }
}
