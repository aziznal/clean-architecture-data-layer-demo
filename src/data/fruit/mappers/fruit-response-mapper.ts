import { FruitEntity } from './../../../core/fruit/entities/fruit-entity.model';
import { FruitResponse } from '../responses/fruit-response';

export class FruitResponseMapper {
  static fromFruitResponse(fruitResponse: FruitResponse): FruitEntity {
    return {
      id: fruitResponse.id,
      name: fruitResponse.name,
      description: fruitResponse.description,

      pricePerKilo: fruitResponse.pricePerPound * 2.20462,
      thumbnailUrl: fruitResponse.imageUrl,
    };
  }
}
