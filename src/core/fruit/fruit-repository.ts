import { NewFruitEntity } from './entities/new-fruit-entity.model';
import { FruitEntity } from './entities/fruit-entity.model';

export abstract class FruitRepository {
  abstract getFruits(): Promise<FruitEntity[]>;

  abstract createFruit(newFruit: NewFruitEntity): Promise<FruitEntity>;
}
