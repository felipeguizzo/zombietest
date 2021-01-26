using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zombie.Bussiness.Enums;

namespace Zombie.Api.Dtos
{
    public class MovementDto
    {
        public Guid id { get; set; }

        public MovimentationType type { get; set; }

        public int? quantity { get; set; }

        public string requesterName { get; set; }

        public ResourceDto resource { get; set; }
    }
}
