import {Entity, model, property} from '@loopback/repository';

@model()
export class SolicitudVisita extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreVehiculo: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaVisita: string;

  @property({
    type: 'string',
  })
  placaVehiculo?: string;

  @property({
    type: 'string',
  })
  idLugarParqueo?: string;

  constructor(data?: Partial<SolicitudVisita>) {
    super(data);
  }
}

export interface SolicitudVisitaRelations {
  // describe navigational properties here
}

export type SolicitudVisitaWithRelations = SolicitudVisita & SolicitudVisitaRelations;
