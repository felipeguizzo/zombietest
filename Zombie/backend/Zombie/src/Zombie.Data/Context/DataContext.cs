using Microsoft.EntityFrameworkCore;
using Zombie.Bussiness.Models;

namespace Zombie.Data.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Resource> Resources { get; set; }
        public DbSet<Movement> Movements { get; set; }
    }
}