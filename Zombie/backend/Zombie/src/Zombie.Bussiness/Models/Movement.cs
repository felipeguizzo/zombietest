using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Zombie.Bussiness.Enums;

namespace Zombie.Bussiness.Models
{
    public class Movement : Entity
    {
        [Required(ErrorMessage = "Este campo é obrigatório")]
        public Guid IdResource { get; set; }

        [ForeignKey("IdResource")]
        public virtual Resource Resource { get; set; }
        
        [Required(ErrorMessage = "Este campo é obrigatório")]
        public MovimentationType Type { get; set; }
        
        [Required(ErrorMessage = "Este campo é obrigatório")]
        [Range(0, int.MaxValue, ErrorMessage = "A quantidade deve se maior que 0")]
        public int Quantity { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatório")]
        [MaxLength(275, ErrorMessage = "Este campo deve conter no máximo 275 caracteres")]
        public string RequesterName { get; set; }
    }
}
