import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Vehiculo, VehiculoRelations} from '../models';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.placa,
  VehiculoRelations
> {
  constructor(@inject('datasources.mongo') dataSource: MongoDataSource) {
    super(Vehiculo, dataSource);
  }
}
