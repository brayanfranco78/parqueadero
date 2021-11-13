import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {SolicitudVisita, SolicitudVisitaRelations} from '../models';

export class SolicitudVisitaRepository extends DefaultCrudRepository<
  SolicitudVisita,
  typeof SolicitudVisita.prototype.id,
  SolicitudVisitaRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(SolicitudVisita, dataSource);
  }
}
