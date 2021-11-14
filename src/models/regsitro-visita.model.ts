import {Entity, model, property} from '@loopback/repository';

@model()
export class RegsitroVisita extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  tiempo: number;

  @property({
    type: 'number',
    required: true,
  })
  numLugarParqueadero: number;

  @property({
    type: 'string',
    required: true,
  })
  placa: string;

  @property({
    type: 'string',
  })
  idDuenoLocal?: string;

  constructor(data?: Partial<RegsitroVisita>) {
    super(data);
  }
}

export interface RegsitroVisitaRelations {
  // describe navigational properties here
}

export type RegsitroVisitaWithRelations = RegsitroVisita & RegsitroVisitaRelations;
