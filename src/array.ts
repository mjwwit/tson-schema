import { BaseSchemaDefinition, TypedSchema } from './common'

interface BaseArrayDefinition extends BaseSchemaDefinition {
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
export interface Tuple5SchemaDefinition<T1, T2, T3, T4, T5>
  extends BaseArrayDefinition {
  items: [
    TypedSchema<T1>,
    TypedSchema<T2>,
    TypedSchema<T3>,
    TypedSchema<T4>,
    TypedSchema<T5>
  ]
  // additionalItems?: boolean | TypedSchema<V>
}
export interface Tuple6SchemaDefinition<T1, T2, T3, T4, T5, T6>
  extends BaseArrayDefinition {
  items: [
    TypedSchema<T1>,
    TypedSchema<T2>,
    TypedSchema<T3>,
    TypedSchema<T4>,
    TypedSchema<T5>,
    TypedSchema<T6>
  ]
  // additionalItems?: boolean | TypedSchema<V>
}
export interface Tuple7SchemaDefinition<T1, T2, T3, T4, T5, T6, T7>
  extends BaseArrayDefinition {
  items: [
    TypedSchema<T1>,
    TypedSchema<T2>,
    TypedSchema<T3>,
    TypedSchema<T4>,
    TypedSchema<T5>,
    TypedSchema<T6>,
    TypedSchema<T7>
  ]
  // additionalItems?: boolean | TypedSchema<V>
}
export interface Tuple8SchemaDefinition<T1, T2, T3, T4, T5, T6, T7, T8>
  extends BaseArrayDefinition {
  items: [
    TypedSchema<T1>,
    TypedSchema<T2>,
    TypedSchema<T3>,
    TypedSchema<T4>,
    TypedSchema<T5>,
    TypedSchema<T6>,
    TypedSchema<T7>,
    TypedSchema<T8>
  ]
  // additionalItems?: boolean | TypedSchema<V>
}
export interface Tuple9SchemaDefinition<T1, T2, T3, T4, T5, T6, T7, T8, T9>
  extends BaseArrayDefinition {
  items: [
    TypedSchema<T1>,
    TypedSchema<T2>,
    TypedSchema<T3>,
    TypedSchema<T4>,
    TypedSchema<T5>,
    TypedSchema<T6>,
    TypedSchema<T7>,
    TypedSchema<T8>,
    TypedSchema<T9>
  ]
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
function tupleType<T1, T2, T3, T4, T5>(
  schema: Tuple5SchemaDefinition<T1, T2, T3, T4, T5>
): TypedSchema<[T1, T2, T3, T4, T5]>
function tupleType<T1, T2, T3, T4, T5, T6>(
  schema: Tuple6SchemaDefinition<T1, T2, T3, T4, T5, T6>
): TypedSchema<[T1, T2, T3, T4, T5, T6]>
function tupleType<T1, T2, T3, T4, T5, T6, T7>(
  schema: Tuple7SchemaDefinition<T1, T2, T3, T4, T5, T6, T7>
): TypedSchema<[T1, T2, T3, T4, T5, T6, T7]>
function tupleType<T1, T2, T3, T4, T5, T6, T7, T8>(
  schema: Tuple8SchemaDefinition<T1, T2, T3, T4, T5, T6, T7, T8>
): TypedSchema<[T1, T2, T3, T4, T5, T6, T7, T8]>
function tupleType<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  schema: Tuple9SchemaDefinition<T1, T2, T3, T4, T5, T6, T7, T8, T9>
): TypedSchema<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>
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
