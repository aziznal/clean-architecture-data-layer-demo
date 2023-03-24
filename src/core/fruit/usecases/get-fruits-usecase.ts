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
        description: 'This is an apple',
        pricePerKilo: 1,
        thumbnailUrl:
          'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
      },
      {
        id: '2',
        name: 'Orange',
        description: 'This is an orange',
        pricePerKilo: 2,
        thumbnailUrl:
          'https://i5.walmartimages.ca/images/Enlarge/234/6_r/6000191272346_R.jpg',
      },
      {
        id: '3',
        name: 'Banana',
        description: 'This is a banana',
        pricePerKilo: 2.5,
        thumbnailUrl:
          'https://th-thumbnailer.cdn-si-edu.com/xK6NAJHiv_51fzn5sDiQt0eD5Is=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg',
      },
      {
        id: '4',
        name: 'Pineapple',
        description: 'This is a pineapple',
        pricePerKilo: 5,
        thumbnailUrl:
          'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71+qAJehpkL.jpg',
      },
    ];
  }
}
