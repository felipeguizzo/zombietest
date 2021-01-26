using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Zombie.Bussiness.Models;

namespace Zombie.Bussiness.Interfaces
{
    public interface IMovementService : IDisposable
    {

        public Task Insert(Movement movement);
    }


}
