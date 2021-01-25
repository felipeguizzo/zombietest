using System;
using System.Collections.Generic;
using System.Text;
using Zombie.Bussiness.Interfaces;

namespace Zombie.Bussiness.Services
{
    public class MovementService : IMovementService
    {

        private readonly IMovementRepository _movementRepository;

        public MovementService(IMovementRepository movementRepository)
        {
            _movementRepository = movementRepository;
        }

        public void Dispose()
        {
            _movementRepository?.Dispose();
        }
    }
}

