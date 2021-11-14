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
  DuenoLocal,
  RegsitroVisita,
} from '../models';
import {DuenoLocalRepository} from '../repositories';

export class DuenoLocalRegsitroVisitaController {
  constructor(
    @repository(DuenoLocalRepository) protected duenoLocalRepository: DuenoLocalRepository,
  ) { }

  @get('/dueno-locals/{id}/regsitro-visitas', {
    responses: {
      '200': {
        description: 'Array of DuenoLocal has many RegsitroVisita',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(RegsitroVisita)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<RegsitroVisita>,
  ): Promise<RegsitroVisita[]> {
    return this.duenoLocalRepository.regsitroVisitas(id).find(filter);
  }

  @post('/dueno-locals/{id}/regsitro-visitas', {
    responses: {
      '200': {
        description: 'DuenoLocal model instance',
        content: {'application/json': {schema: getModelSchemaRef(RegsitroVisita)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof DuenoLocal.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegsitroVisita, {
            title: 'NewRegsitroVisitaInDuenoLocal',
            exclude: ['id'],
            optional: ['idDuenoLocal']
          }),
        },
      },
    }) regsitroVisita: Omit<RegsitroVisita, 'id'>,
  ): Promise<RegsitroVisita> {
    return this.duenoLocalRepository.regsitroVisitas(id).create(regsitroVisita);
  }

  @patch('/dueno-locals/{id}/regsitro-visitas', {
    responses: {
      '200': {
        description: 'DuenoLocal.RegsitroVisita PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegsitroVisita, {partial: true}),
        },
      },
    })
    regsitroVisita: Partial<RegsitroVisita>,
    @param.query.object('where', getWhereSchemaFor(RegsitroVisita)) where?: Where<RegsitroVisita>,
  ): Promise<Count> {
    return this.duenoLocalRepository.regsitroVisitas(id).patch(regsitroVisita, where);
  }

  @del('/dueno-locals/{id}/regsitro-visitas', {
    responses: {
      '200': {
        description: 'DuenoLocal.RegsitroVisita DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(RegsitroVisita)) where?: Where<RegsitroVisita>,
  ): Promise<Count> {
    return this.duenoLocalRepository.regsitroVisitas(id).delete(where);
  }
}
