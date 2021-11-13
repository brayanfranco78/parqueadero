import {Entity, model, property, hasMany} from '@loopback/repository';
import {SolicitudVisita} from './solicitud-visita.model';

@model()
export class LugarParqueo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  numeroLugar: number;

  @property({
    type: 'number',
    required: true,
  })
  ancho: number;

  @property({
    type: 'number',
    required: true,
  })
  alto: number;

  @property({
    type: 'boolean',
    required: true,
  })
  ocupado: boolean;

  @hasMany(() => SolicitudVisita, {keyTo: 'idLugarParqueo'})
  solicitudVisitas: SolicitudVisita[];

  constructor(data?: Partial<LugarParqueo>) {
    super(data);
  }
}

export interface LugarParqueoRelations {
  // describe navigational properties here
}

export type LugarParqueoWithRelations = LugarParqueo & LugarParqueoRelations;
