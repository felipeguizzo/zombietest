using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
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
        public override async Task Insert(Movement entity)
        {
            entity.Resource = null;
            entity = DbSet.Add(entity).Entity;
            await SaveChanges();
        }

        public override async Task<List<Movement>> Get()
        {
            return await DbSet
                .Include(x => x.Resource)
                .ToListAsync();
        }
    }
}
