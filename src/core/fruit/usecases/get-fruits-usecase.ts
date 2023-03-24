import { FruitRepository } from '../fruit-repository';
import { FruitEntity } from './../entities/fruit-entity.model';

export abstract class GetFruitsUseCase {
  abstract getFruits(): Promise<FruitEntity[]>;
}

export class GetFruitsUseCaseImpl implements GetFruitsUseCase {
  constructor(private fruitRepository: FruitRepository) {}

  async getFruits(): Promise<FruitEntity[]> {
    // TODO: change to use repo
    // return this.fruitRepository.getFruits();

    return [
      {
        id: '1',
        name: 'Apple',
        pricePerKilo: 100,
        thumbnailUrl:
          'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      },
      {
        id: '2',
        name: 'Orange',
        pricePerKilo: 200,
        thumbnailUrl:
          'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      },
      {
        id: '3',
        name: 'Banana',
        pricePerKilo: 300,
        thumbnailUrl:
          'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      },
    ];
  }
}
