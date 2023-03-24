import { FruitEntity } from './../../core/fruit/entities/fruit-entity.model';
import { FruitRepository } from '../../core/fruit/fruit-repository';

export class FruitRepositoryImpl extends FruitRepository {
  async getFruits(): Promise<FruitEntity[]> {
    return [
      {
        id: '1',
        name: 'Apple',
        pricePerKilo: 2.5,
      },
      {
        id: '2',
        name: 'Banana',
        pricePerKilo: 1.5,
      },
    ];
  }
}
