import { FruitRepository } from '../fruit-repository';
import { FruitEntity } from './../entities/fruit-entity.model';

export abstract class GetFruitsUseCase {
  abstract execute(): Promise<FruitEntity[]>;
}

export class GetFruitsUseCaseImpl implements GetFruitsUseCase {
  constructor(private fruitRepository: FruitRepository) {}

  async execute(): Promise<FruitEntity[]> {
    return this.fruitRepository.getFruits();
  }
}
