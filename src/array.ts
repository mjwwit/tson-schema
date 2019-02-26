import { TypedSchema } from './common'

interface BaseArrayDefinition {
  minItems?: number
  maxItems?: number
  uniqueItems?: boolean
}

export interface ListSchemaDefinition<T> extends BaseArrayDefinition {
  items?: TypedSchema<T>
  contains?: TypedSchema<T>
}

function arrayType<T>(schema: ListSchemaDefinition<T> = {}): TypedSchema<T[]> {
  return {
    getSchema: () =>
      Object.assign(
        {},
        schema,
        schema.items
          ? {
              items: schema.items.getSchema(),
              type: 'array',
            }
          : { type: 'array' }
      ),
    type: [],
  }
}

export interface Tuple1SchemaDefinition<T1> extends BaseArrayDefinition {
  items: [TypedSchema<T1>]
  // additionalItems?: boolean | TypedSchema<V>
}
export interface Tuple2SchemaDefinition<T1, T2> extends BaseArrayDefinition {
  items: [TypedSchema<T1>, TypedSchema<T2>]
  // additionalItems?: boolean | TypedSchema<V>
}
export interface Tuple3SchemaDefinition<T1, T2, T3>
  extends BaseArrayDefinition {
  items: [TypedSchema<T1>, TypedSchema<T2>, TypedSchema<T3>]
  // additionalItems?: boolean | TypedSchema<V>
}
export interface Tuple4SchemaDefinition<T1, T2, T3, T4>
  extends BaseArrayDefinition {
  items: [TypedSchema<T1>, TypedSchema<T2>, TypedSchema<T3>, TypedSchema<T4>]
  // additionalItems?: boolean | TypedSchema<V>
}
export interface TupleAnySchemaDefinition extends BaseArrayDefinition {
  items: TypedSchema<any>[]
}

function tupleType<T1>(schema: Tuple1SchemaDefinition<T1>): TypedSchema<[T1]>
function tupleType<T1, T2>(
  schema: Tuple2SchemaDefinition<T1, T2>
): TypedSchema<[T1, T2]>
function tupleType<T1, T2, T3>(
  schema: Tuple3SchemaDefinition<T1, T2, T3>
): TypedSchema<[T1, T2, T3]>
function tupleType<T1, T2, T3, T4>(
  schema: Tuple4SchemaDefinition<T1, T2, T3, T4>
): TypedSchema<[T1, T2, T3, T4]>
function tupleType(schema: TupleAnySchemaDefinition): TypedSchema<any[]> {
  return {
    getSchema: () =>
      Object.assign({}, schema, {
        items: schema.items.map((i) => i.getSchema()),
        type: 'array',
      }),
    type: [],
  }
}

export { arrayType as array, tupleType as tuple }
