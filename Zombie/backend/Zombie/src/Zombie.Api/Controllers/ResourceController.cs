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

    [Route("v1/resources")]
    public class ResourceController : Controller
    {

        private readonly IResourceRepository _resourceRepository;
        private readonly IMapper _mapper;
        public ResourceController(IResourceRepository resourceRepository, IMapper mapper)
        {
            _resourceRepository = resourceRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("")]
        [AllowAnonymous]
        public async Task<IEnumerable<ResourceDto>> Get()
        {
            return _mapper.Map<IEnumerable<ResourceDto>>((await _resourceRepository.Get()).ToList());
        }

        [HttpGet]
        [Route("{id:guid}")]
        [AllowAnonymous]
        public async Task<ResourceDto> GetById(Guid id)
        {
            return _mapper.Map<ResourceDto>(await _resourceRepository.GetById(id));
        }

        [HttpPost]
        [Route("")]
        [AllowAnonymous]
        public async Task<ActionResult<ResourceDto>> Insert([FromBody] ResourceDto resourceDto)
        {
            try
            {
                var entity = _mapper.Map<Resource>(resourceDto);
                await _resourceRepository.Insert(entity);
                return Ok(_mapper.Map<ResourceDto>(entity));
            }
            catch (Exception e)
            {
                return BadRequest(new { message = e.Message });
            }
        }

        [HttpPut]
        [Route("")]
        [AllowAnonymous]
        public async Task<ActionResult<ResourceDto>> Update([FromBody] ResourceDto resourceDto)
        {
            try
            {
                var entity = _mapper.Map<Resource>(resourceDto);
                await _resourceRepository.Update(entity);
                return Ok(_mapper.Map<ResourceDto>(entity));
            }
            catch (Exception e)
            {
                return BadRequest(new { message = e.Message });
            }
        }

        [HttpDelete]
        [Route("{id:guid}")]
        [AllowAnonymous]
        public async Task<ActionResult<ResourceDto>> Delete(Guid id)
        {
            try
            {
                await _resourceRepository.Delete(id);
                return Ok(id);
            }
            catch (Exception e)
            {
                return BadRequest(new { message = e.Message });
            }

        }
    }
}
