import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {RegsitroVisita, RegsitroVisitaRelations} from '../models';

export class RegsitroVisitaRepository extends DefaultCrudRepository<
  RegsitroVisita,
  typeof RegsitroVisita.prototype.id,
  RegsitroVisitaRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(RegsitroVisita, dataSource);
  }
}
