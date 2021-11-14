import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Local, LocalRelations} from '../models';

export class LocalRepository extends DefaultCrudRepository<
  Local,
  typeof Local.prototype.id,
  LocalRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Local, dataSource);
  }
}
