using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Zombie.Bussiness.Enums;
using Zombie.Bussiness.Interfaces;
using Zombie.Bussiness.Models;

namespace Zombie.Bussiness.Services
{
    public class MovementService : IMovementService
    {

        private readonly IMovementRepository _movementRepository;
        private readonly IResourceRepository _resourceRepository;

        public MovementService(
            IMovementRepository movementRepository,
            IResourceRepository resourceRepository
            )
        {
            _movementRepository = movementRepository;
            _resourceRepository = resourceRepository;
        }

        public async Task Insert(Movement movement)
        {
            if (movement.Type == MovimentationType.OUTPUT)
            {
                if (movement.Resource.Quantity - movement.Quantity < 0)
                {
                    throw new Exception("Saldo insuficiente para esta operação");
                }

                movement.Resource.Quantity = movement.Resource.Quantity - movement.Quantity;
            }
            else
            {
                movement.Resource.Quantity = movement.Resource.Quantity + movement.Quantity;
            }

            await _resourceRepository.Update(movement.Resource);
            await _movementRepository.Insert(movement);
        }

        public void Dispose()
        {
            _movementRepository?.Dispose();
        }
    }
}

