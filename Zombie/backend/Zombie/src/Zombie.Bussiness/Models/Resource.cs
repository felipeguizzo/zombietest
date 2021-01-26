using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Zombie.Bussiness.Models
{
    public class Resource : Entity
    {
        [Required(ErrorMessage = "Este campo é obrigatório")]
        [MaxLength(60, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
        [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
        public string Title { get; set; }

        [MaxLength(500, ErrorMessage = "Este campo deve conter no máximo 500 caracteres")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatório")]
        [Range(0, int.MaxValue, ErrorMessage = "A quantidade deve se maior que 0")]
        public int Quantity { get; set; }

        [MaxLength(1024, ErrorMessage = "Este campo deve conter no máximo 1024 caracteres")]
        public string Observation { get; set; }

    }

}
