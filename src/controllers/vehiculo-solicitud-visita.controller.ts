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
  Vehiculo,
  SolicitudVisita,
} from '../models';
import {VehiculoRepository} from '../repositories';

export class VehiculoSolicitudVisitaController {
  constructor(
    @repository(VehiculoRepository) protected vehiculoRepository: VehiculoRepository,
  ) { }

  @get('/vehiculos/{id}/solicitud-visita', {
    responses: {
      '200': {
        description: 'Vehiculo has one SolicitudVisita',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SolicitudVisita),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<SolicitudVisita>,
  ): Promise<SolicitudVisita> {
    return this.vehiculoRepository.solicitudVisita(id).get(filter);
  }

  @post('/vehiculos/{id}/solicitud-visita', {
    responses: {
      '200': {
        description: 'Vehiculo model instance',
        content: {'application/json': {schema: getModelSchemaRef(SolicitudVisita)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Vehiculo.prototype.placa,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudVisita, {
            title: 'NewSolicitudVisitaInVehiculo',
            exclude: ['id'],
            optional: ['placaVehiculo']
          }),
        },
      },
    }) solicitudVisita: Omit<SolicitudVisita, 'id'>,
  ): Promise<SolicitudVisita> {
    return this.vehiculoRepository.solicitudVisita(id).create(solicitudVisita);
  }

  @patch('/vehiculos/{id}/solicitud-visita', {
    responses: {
      '200': {
        description: 'Vehiculo.SolicitudVisita PATCH success count',
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
    return this.vehiculoRepository.solicitudVisita(id).patch(solicitudVisita, where);
  }

  @del('/vehiculos/{id}/solicitud-visita', {
    responses: {
      '200': {
        description: 'Vehiculo.SolicitudVisita DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SolicitudVisita)) where?: Where<SolicitudVisita>,
  ): Promise<Count> {
    return this.vehiculoRepository.solicitudVisita(id).delete(where);
  }
}
