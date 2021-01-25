using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zombie.Api.Dtos
{
    public class ResourceDto
    {
        public Guid id { get; set; }
     
        public string title { get; set; }

        public string description { get; set; }

        public int quantity { get; set; }

        public string observation { get; set; }

        public virtual List<MovementDto> movements { get; set; }
    }
}
