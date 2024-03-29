import { FruitRequestMapper } from './mappers/fruit-request.mapper';
import { FruitResponseMapper } from './mappers/fruit-response-mapper';
import { RemoteDataSource } from './data-sources/remote-data-source';
import { FruitEntity } from '../../core/fruit/entities/fruit-entity.model';
import { NewFruitEntity } from '../../core/fruit/entities/new-fruit-entity.model';

import { FruitRepository } from '../../core/fruit/fruit-repository';

export class FruitRepositoryImpl implements FruitRepository {
  constructor(private remoteDataSource: RemoteDataSource) {}

  async getFruits(): Promise<FruitEntity[]> {
    const fruitResponse = await this.remoteDataSource.getFruits();

    return fruitResponse.map((response) =>
      FruitResponseMapper.fromFruitResponse(response)
    );
  }

  async createFruit(newFruit: NewFruitEntity): Promise<FruitEntity> {
    const newFruitResponse = await this.remoteDataSource.createFruit(
      FruitRequestMapper.fromNewFruitEntity(newFruit)
    );

    return FruitResponseMapper.fromFruitResponse(newFruitResponse);
  }
}
