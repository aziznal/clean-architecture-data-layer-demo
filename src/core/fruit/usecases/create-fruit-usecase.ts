import { FruitEntity } from '../entities/fruit-entity.model';
import { NewFruitEntity } from '../entities/new-fruit-entity.model';

import { FruitRepository } from '../fruit-repository';

export abstract class CreateFruitUseCase {
  abstract execute(newFruit: NewFruitEntity): Promise<FruitEntity>;
}

export class CreateFruitUseCaseImpl implements CreateFruitUseCase {
  constructor(private fruitRepository: FruitRepository) {}

  async execute(newFruit: NewFruitEntity): Promise<FruitEntity> {
    return this.fruitRepository.createFruit(newFruit);
  }
}
