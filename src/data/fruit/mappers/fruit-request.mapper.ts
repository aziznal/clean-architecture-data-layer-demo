import { CreateFruitRequest } from './../requests/create-fruit-request';
import { NewFruitEntity } from './../../../core/fruit/entities/new-fruit-entity.model';
export class FruitRequestMapper {
  static fromNewFruitEntity(
    newFruitEntity: NewFruitEntity
  ): CreateFruitRequest {
    return {
      name: newFruitEntity.name,
      description: newFruitEntity.description,

      pricePerPound: newFruitEntity.pricePerKilo / 2.20462,
      imageUrl: newFruitEntity.thumbnailUrl,
    };
  }
}
