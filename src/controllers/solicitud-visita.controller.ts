import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {SolicitudVisita} from '../models';
import {SolicitudVisitaRepository} from '../repositories';

export class SolicitudVisitaController {
  constructor(
    @repository(SolicitudVisitaRepository)
    public solicitudVisitaRepository : SolicitudVisitaRepository,
  ) {}

  @post('/solicitud-visitas')
  @response(200, {
    description: 'SolicitudVisita model instance',
    content: {'application/json': {schema: getModelSchemaRef(SolicitudVisita)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudVisita, {
            title: 'NewSolicitudVisita',
            exclude: ['id'],
          }),
        },
      },
    })
    solicitudVisita: Omit<SolicitudVisita, 'id'>,
  ): Promise<SolicitudVisita> {
    return this.solicitudVisitaRepository.create(solicitudVisita);
  }

  @get('/solicitud-visitas/count')
  @response(200, {
    description: 'SolicitudVisita model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SolicitudVisita) where?: Where<SolicitudVisita>,
  ): Promise<Count> {
    return this.solicitudVisitaRepository.count(where);
  }

  @get('/solicitud-visitas')
  @response(200, {
    description: 'Array of SolicitudVisita model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SolicitudVisita, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SolicitudVisita) filter?: Filter<SolicitudVisita>,
  ): Promise<SolicitudVisita[]> {
    return this.solicitudVisitaRepository.find(filter);
  }

  @patch('/solicitud-visitas')
  @response(200, {
    description: 'SolicitudVisita PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudVisita, {partial: true}),
        },
      },
    })
    solicitudVisita: SolicitudVisita,
    @param.where(SolicitudVisita) where?: Where<SolicitudVisita>,
  ): Promise<Count> {
    return this.solicitudVisitaRepository.updateAll(solicitudVisita, where);
  }

  @get('/solicitud-visitas/{id}')
  @response(200, {
    description: 'SolicitudVisita model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SolicitudVisita, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(SolicitudVisita, {exclude: 'where'}) filter?: FilterExcludingWhere<SolicitudVisita>
  ): Promise<SolicitudVisita> {
    return this.solicitudVisitaRepository.findById(id, filter);
  }

  @patch('/solicitud-visitas/{id}')
  @response(204, {
    description: 'SolicitudVisita PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudVisita, {partial: true}),
        },
      },
    })
    solicitudVisita: SolicitudVisita,
  ): Promise<void> {
    await this.solicitudVisitaRepository.updateById(id, solicitudVisita);
  }

  @put('/solicitud-visitas/{id}')
  @response(204, {
    description: 'SolicitudVisita PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() solicitudVisita: SolicitudVisita,
  ): Promise<void> {
    await this.solicitudVisitaRepository.replaceById(id, solicitudVisita);
  }

  @del('/solicitud-visitas/{id}')
  @response(204, {
    description: 'SolicitudVisita DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.solicitudVisitaRepository.deleteById(id);
  }
}
