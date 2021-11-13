import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {LugarParqueo, LugarParqueoRelations, SolicitudVisita} from '../models';
import {SolicitudVisitaRepository} from './solicitud-visita.repository';

export class LugarParqueoRepository extends DefaultCrudRepository<
  LugarParqueo,
  typeof LugarParqueo.prototype.id,
  LugarParqueoRelations
> {

  public readonly solicitudVisitas: HasManyRepositoryFactory<SolicitudVisita, typeof LugarParqueo.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('SolicitudVisitaRepository') protected solicitudVisitaRepositoryGetter: Getter<SolicitudVisitaRepository>,
  ) {
    super(LugarParqueo, dataSource);
    this.solicitudVisitas = this.createHasManyRepositoryFactoryFor('solicitudVisitas', solicitudVisitaRepositoryGetter,);
    this.registerInclusionResolver('solicitudVisitas', this.solicitudVisitas.inclusionResolver);
  }
}
