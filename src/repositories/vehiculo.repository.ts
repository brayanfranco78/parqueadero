import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Vehiculo, VehiculoRelations, SolicitudVisita} from '../models';
import {SolicitudVisitaRepository} from './solicitud-visita.repository';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.placa,
  VehiculoRelations
> {

  public readonly solicitudVisita: HasOneRepositoryFactory<SolicitudVisita, typeof Vehiculo.prototype.placa>;

  constructor(@inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('SolicitudVisitaRepository') protected solicitudVisitaRepositoryGetter: Getter<SolicitudVisitaRepository>,) {
    super(Vehiculo, dataSource);
    this.solicitudVisita = this.createHasOneRepositoryFactoryFor('solicitudVisita', solicitudVisitaRepositoryGetter);
    this.registerInclusionResolver('solicitudVisita', this.solicitudVisita.inclusionResolver);
  }
}
