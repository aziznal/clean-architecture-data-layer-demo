import { FruitEntity } from '../../core/fruit/entities/fruit-entity.model';

import { FruitRepository } from '../../core/fruit/fruit-repository';

export class FruitRepositoryImpl extends FruitRepository {
  async getFruits(): Promise<FruitEntity[]> {
    return [];
  }
}
