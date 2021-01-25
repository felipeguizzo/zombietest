using System;
using System.Collections.Generic;
using System.Text;
using Zombie.Bussiness.Interfaces;
using Zombie.Bussiness.Models;
using Zombie.Data.Context;

namespace Zombie.Data.Repository
{
    public class MovementRepository : Repository<Movement>, IMovementRepository
    {

        public MovementRepository(DataContext context) : base(context)
        {
               
        }
    }
}
