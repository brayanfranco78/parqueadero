import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  LugarParqueo,
  SolicitudVisita,
} from '../models';
import {LugarParqueoRepository} from '../repositories';

export class LugarParqueoSolicitudVisitaController {
  constructor(
    @repository(LugarParqueoRepository) protected lugarParqueoRepository: LugarParqueoRepository,
  ) { }

  @get('/lugar-parqueos/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'Array of LugarParqueo has many SolicitudVisita',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(SolicitudVisita)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<SolicitudVisita>,
  ): Promise<SolicitudVisita[]> {
    return this.lugarParqueoRepository.solicitudVisitas(id).find(filter);
  }

  @post('/lugar-parqueos/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'LugarParqueo model instance',
        content: {'application/json': {schema: getModelSchemaRef(SolicitudVisita)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof LugarParqueo.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudVisita, {
            title: 'NewSolicitudVisitaInLugarParqueo',
            exclude: ['id'],
            optional: ['idLugarParqueo']
          }),
        },
      },
    }) solicitudVisita: Omit<SolicitudVisita, 'id'>,
  ): Promise<SolicitudVisita> {
    return this.lugarParqueoRepository.solicitudVisitas(id).create(solicitudVisita);
  }

  @patch('/lugar-parqueos/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'LugarParqueo.SolicitudVisita PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudVisita, {partial: true}),
        },
      },
    })
    solicitudVisita: Partial<SolicitudVisita>,
    @param.query.object('where', getWhereSchemaFor(SolicitudVisita)) where?: Where<SolicitudVisita>,
  ): Promise<Count> {
    return this.lugarParqueoRepository.solicitudVisitas(id).patch(solicitudVisita, where);
  }

  @del('/lugar-parqueos/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'LugarParqueo.SolicitudVisita DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SolicitudVisita)) where?: Where<SolicitudVisita>,
  ): Promise<Count> {
    return this.lugarParqueoRepository.solicitudVisitas(id).delete(where);
  }
}
