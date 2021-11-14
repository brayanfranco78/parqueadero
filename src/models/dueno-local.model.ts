import {Entity, model, property, hasMany} from '@loopback/repository';
import {RegsitroVisita} from './regsitro-visita.model';
import {Local} from './local.model';

@model()
export class DuenoLocal extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  telefono?: string;

  @hasMany(() => RegsitroVisita, {keyTo: 'idDuenoLocal'})
  regsitroVisitas: RegsitroVisita[];

  @hasMany(() => Local, {keyTo: 'idDuenoLocal'})
  locals: Local[];

  constructor(data?: Partial<DuenoLocal>) {
    super(data);
  }
}

export interface DuenoLocalRelations {
  // describe navigational properties here
}

export type DuenoLocalWithRelations = DuenoLocal & DuenoLocalRelations;
