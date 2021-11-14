import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {DuenoLocal, DuenoLocalRelations, RegsitroVisita, Local} from '../models';
import {RegsitroVisitaRepository} from './regsitro-visita.repository';
import {LocalRepository} from './local.repository';

export class DuenoLocalRepository extends DefaultCrudRepository<
  DuenoLocal,
  typeof DuenoLocal.prototype.id,
  DuenoLocalRelations
> {

  public readonly regsitroVisitas: HasManyRepositoryFactory<RegsitroVisita, typeof DuenoLocal.prototype.id>;

  public readonly locals: HasManyRepositoryFactory<Local, typeof DuenoLocal.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('RegsitroVisitaRepository') protected regsitroVisitaRepositoryGetter: Getter<RegsitroVisitaRepository>, @repository.getter('LocalRepository') protected localRepositoryGetter: Getter<LocalRepository>,
  ) {
    super(DuenoLocal, dataSource);
    this.locals = this.createHasManyRepositoryFactoryFor('locals', localRepositoryGetter,);
    this.registerInclusionResolver('locals', this.locals.inclusionResolver);
    this.regsitroVisitas = this.createHasManyRepositoryFactoryFor('regsitroVisitas', regsitroVisitaRepositoryGetter,);
    this.registerInclusionResolver('regsitroVisitas', this.regsitroVisitas.inclusionResolver);
  }
}
