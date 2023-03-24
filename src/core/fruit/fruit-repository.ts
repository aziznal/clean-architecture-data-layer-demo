import { FruitEntity } from './entities/fruit-entity.model';

export abstract class FruitRepository {
  abstract getFruits(): Promise<FruitEntity[]>;
}
