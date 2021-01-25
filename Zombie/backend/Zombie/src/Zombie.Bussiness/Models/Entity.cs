using System;
using System.ComponentModel.DataAnnotations;

namespace Zombie.Bussiness.Models
{
    public abstract class Entity
    {
        protected Entity()
        {
            Id = Guid.NewGuid();
        }
        [Key]
        public Guid Id { get; set; }
    }
}
