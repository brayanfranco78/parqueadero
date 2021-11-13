import {Entity, model, property, hasOne} from '@loopback/repository';
import {SolicitudVisita} from './solicitud-visita.model';

@model()
export class Vehiculo extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  placa?: string;

  @property({
    type: 'string',
    required: true,
  })
  modelo: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoVehiculo: string;

  @property({
    type: 'string',
    required: true,
  })
  numeroSoat: string;

  @property({
    type: 'string',
  })
  idCliente?: string;

  @hasOne(() => SolicitudVisita, {keyTo: 'placaVehiculo'})
  solicitudVisita: SolicitudVisita;

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
