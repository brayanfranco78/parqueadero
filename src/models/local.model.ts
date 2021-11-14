import {Entity, model, property} from '@loopback/repository';

@model()
export class Local extends Entity {
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
  referenciaComercial: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'date',
    required: true,
  })
  anoCreacion: string;

  @property({
    type: 'string',
    required: true,
  })
  ubicacion: string;

  @property({
    type: 'string',
  })
  idDuenoLocal?: string;

  constructor(data?: Partial<Local>) {
    super(data);
  }
}

export interface LocalRelations {
  // describe navigational properties here
}

export type LocalWithRelations = Local & LocalRelations;
