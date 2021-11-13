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
import {LugarParqueo} from '../models';
import {LugarParqueoRepository} from '../repositories';

export class LugarParqueoController {
  constructor(
    @repository(LugarParqueoRepository)
    public lugarParqueoRepository : LugarParqueoRepository,
  ) {}

  @post('/lugar-parqueos')
  @response(200, {
    description: 'LugarParqueo model instance',
    content: {'application/json': {schema: getModelSchemaRef(LugarParqueo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LugarParqueo, {
            title: 'NewLugarParqueo',
            exclude: ['id'],
          }),
        },
      },
    })
    lugarParqueo: Omit<LugarParqueo, 'id'>,
  ): Promise<LugarParqueo> {
    return this.lugarParqueoRepository.create(lugarParqueo);
  }

  @get('/lugar-parqueos/count')
  @response(200, {
    description: 'LugarParqueo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(LugarParqueo) where?: Where<LugarParqueo>,
  ): Promise<Count> {
    return this.lugarParqueoRepository.count(where);
  }

  @get('/lugar-parqueos')
  @response(200, {
    description: 'Array of LugarParqueo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(LugarParqueo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(LugarParqueo) filter?: Filter<LugarParqueo>,
  ): Promise<LugarParqueo[]> {
    return this.lugarParqueoRepository.find(filter);
  }

  @patch('/lugar-parqueos')
  @response(200, {
    description: 'LugarParqueo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LugarParqueo, {partial: true}),
        },
      },
    })
    lugarParqueo: LugarParqueo,
    @param.where(LugarParqueo) where?: Where<LugarParqueo>,
  ): Promise<Count> {
    return this.lugarParqueoRepository.updateAll(lugarParqueo, where);
  }

  @get('/lugar-parqueos/{id}')
  @response(200, {
    description: 'LugarParqueo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(LugarParqueo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(LugarParqueo, {exclude: 'where'}) filter?: FilterExcludingWhere<LugarParqueo>
  ): Promise<LugarParqueo> {
    return this.lugarParqueoRepository.findById(id, filter);
  }

  @patch('/lugar-parqueos/{id}')
  @response(204, {
    description: 'LugarParqueo PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LugarParqueo, {partial: true}),
        },
      },
    })
    lugarParqueo: LugarParqueo,
  ): Promise<void> {
    await this.lugarParqueoRepository.updateById(id, lugarParqueo);
  }

  @put('/lugar-parqueos/{id}')
  @response(204, {
    description: 'LugarParqueo PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() lugarParqueo: LugarParqueo,
  ): Promise<void> {
    await this.lugarParqueoRepository.replaceById(id, lugarParqueo);
  }

  @del('/lugar-parqueos/{id}')
  @response(204, {
    description: 'LugarParqueo DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.lugarParqueoRepository.deleteById(id);
  }
}
