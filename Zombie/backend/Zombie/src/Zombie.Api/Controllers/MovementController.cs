using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zombie.Api.Dtos;
using Zombie.Bussiness.Interfaces;
using Zombie.Bussiness.Models;

namespace Zombie.Api.Controllers
{
    [Route("v1/movements")]
    public class MovementController : Controller
    {
        private readonly IMovementRepository _MovementRepository;
        private readonly IMovementService _movementService;
        private readonly IMapper _mapper;
        public MovementController(IMovementRepository MovementRepository, IMapper mapper, IMovementService movementService)
        {
            _MovementRepository = MovementRepository;
            _movementService = movementService;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("")]
        [AllowAnonymous]
        public async Task<IEnumerable<MovementDto>> Get()
        {
            return _mapper.Map<IEnumerable<MovementDto>>((await _MovementRepository.Get()).ToList());
        }

        [HttpGet]
        [Route("{id:guid}")]
        [AllowAnonymous]
        public async Task<MovementDto> GetById(Guid id)
        {
            return _mapper.Map<MovementDto>(await _MovementRepository.GetById(id));
        }

        [HttpPost]
        [Route("")]
        [AllowAnonymous]
        public async Task<ActionResult<MovementDto>> Insert([FromBody] MovementDto movement)
        {
            try
            {
                var entity = _mapper.Map<Movement>(movement);
                await _movementService.Insert(entity);
                return Ok(_mapper.Map<MovementDto>(entity));
            }
            catch (Exception e)
            {
                return BadRequest(new { message = e.Message });
            }

        }
    }
}
