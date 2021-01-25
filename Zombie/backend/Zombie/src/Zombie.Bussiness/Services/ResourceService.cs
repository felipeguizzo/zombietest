using System;
using System.Collections.Generic;
using System.Text;
using Zombie.Bussiness.Interfaces;

namespace Zombie.Bussiness.Services
{
    public class ResourceService : IResourceService
    {

        private readonly IResourceRepository _ResourceRepository;

        public ResourceService(IResourceRepository ResourceRepository)
        {
            _ResourceRepository = ResourceRepository;
        }

        public void Dispose()
        {
            _ResourceRepository?.Dispose();
        }
    }
}

