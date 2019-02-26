export interface TypedSchema<T> {
  type: T
  getSchema(): JSONSchema
}

export interface JSONSchema {
  type: string
}

function defineType<SchemaDefinition extends object, ValueType>(
  type: string,
  value: ValueType
): (schema?: SchemaDefinition) => TypedSchema<ValueType> {
  return (schema: any = {}) => {
    return {
      getSchema: () => Object.assign({}, schema, { type }),
      type: value,
    }
  }
}

// TODO: Add `enum`

/********
 * Null *
 ********/

export interface NullSchema extends JSONSchema {
  type: 'null'
}

const Null = defineType<never, null>('null', null)

/***********
 * Numbers *
 ***********/

export interface NumberSchemaDefinition {
  minimum?: number
  maximum?: number
  exclusiveMinimum?: boolean
  exclusingMaximum?: boolean
  multipleOf?: number
}

export interface NumberSchema extends JSONSchema, NumberSchemaDefinition {
  type: 'number'
}

// tslint:disable-next-line:variable-name
const Number = defineType<NumberSchemaDefinition, number>('number', 0)

export interface IntegerSchema extends JSONSchema, NumberSchemaDefinition {
  type: 'integer'
}

const Integer = defineType<NumberSchemaDefinition, number>('integer', 0)

/**********
 * String *
 **********/

export type JSONSchemaStringFormat =
  | 'date-time'
  | 'email'
  | 'hostname'
  | 'ipv4'
  | 'ipv6'
  | 'uri'
  | 'uri-reference'
  | 'json-pointer'
  | 'uri-template'
export interface StringSchemaDefinition {
  minLength?: number
  maxLength?: number
  pattern?: string
  format?: JSONSchemaStringFormat
}

export interface StringSchema extends JSONSchema, StringSchemaDefinition {
  type: 'string'
}

// tslint:disable-next-line:variable-name
const String = defineType<StringSchemaDefinition, string>('string', '')

/***********
 * Boolean *
 ***********/

export interface BooleanSchema extends JSONSchema {
  type: 'boolean'
}

// tslint:disable-next-line:variable-name
const Boolean = defineType<never, boolean>('boolean', true)

/**********
 * Arrays *
 **********/

interface BaseArrayDefinition {
  minItems?: number
  maxItems?: number
  uniqueItems?: boolean
}

export interface ListSchemaDefinition<T> extends BaseArrayDefinition {
  items?: TypedSchema<T>
  contains?: TypedSchema<T>
}

function Array<T>(
  schema: ListSchemaDefinition<T> = {}
): TypedSchema<T[]> {
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

// TODO: Add support for `additionalItems`
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

function Tuple<T1>(schema: Tuple1SchemaDefinition<T1>): TypedSchema<[T1]>
function Tuple<T1, T2>(
  schema: Tuple2SchemaDefinition<T1, T2>
): TypedSchema<[T1, T2]>
function Tuple<T1, T2, T3>(
  schema: Tuple3SchemaDefinition<T1, T2, T3>
): TypedSchema<[T1, T2, T3]>
function Tuple<T1, T2, T3, T4>(
  schema: Tuple4SchemaDefinition<T1, T2, T3, T4>
): TypedSchema<[T1, T2, T3, T4]>
function Tuple(schema: TupleAnySchemaDefinition): TypedSchema<any[]> {
  return {
    getSchema: () =>
      Object.assign({}, schema, {
        items: schema.items.map((i) => i.getSchema()),
        type: 'array',
      }),
    type: [],
  }
}

/***********
 * Objects *
 ***********/

// TODO: Somehow make `properties` and `required` optional
// TODO: Add support for `additionalProperties`
export interface ObjectDefinition<T extends {}> {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: (keyof T)[]
}

export interface PartialObjectDefinition<T extends {}> {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: []
}

export interface ObjectDefinition1<T extends {}, R1 extends keyof T> {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: [R1]
}
export interface ObjectDefinition2<
  T extends {},
  R1 extends keyof T,
  R2 extends keyof T
> {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: [R1, R2]
}
export interface ObjectDefinition3<
  T extends {},
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T
> {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: [R1, R2, R3]
}
export interface ObjectDefinition4<
  T extends {},
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T,
  R4 extends keyof T
> {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: [R1, R2, R3, R4]
}
export interface ObjectDefinition5<
  T extends {},
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T,
  R4 extends keyof T,
  R5 extends keyof T
> {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: [R1, R2, R3, R4, R5]
}

function Obj<T>(
  schema: PartialObjectDefinition<T>
): TypedSchema<Partial<T>>
function Obj<T, R1 extends keyof T>(
  schema: ObjectDefinition1<T, R1>
): TypedSchema<Partial<T> & { [key in R1]: T[key] }>
function Obj<T, R1 extends keyof T, R2 extends keyof T>(
  schema: ObjectDefinition2<T, R1, R2>
): TypedSchema<Partial<T> & { [key in R1 | R2]: T[key] }>
function Obj<
  T,
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T
>(
  schema: ObjectDefinition3<T, R1, R2, R3>
): TypedSchema<Partial<T> & { [key in R1 | R2 | R3]: T[key] }>
function Obj<
  T,
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T,
  R4 extends keyof T
>(
  schema: ObjectDefinition4<T, R1, R2, R3, R4>
): TypedSchema<Partial<T> & { [key in R1 | R2 | R3 | R4]: T[key] }>
function Obj<
  T,
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T,
  R4 extends keyof T,
  R5 extends keyof T
>(
  schema: ObjectDefinition5<T, R1, R2, R3, R4, R5>
): TypedSchema<Partial<T> & { [key in R1 | R2 | R3 | R4 | R5]: T[key] }>
function Obj<T>(schema: ObjectDefinition<T>): TypedSchema<T> {
  return {
    getSchema: () =>
      schema.properties
        ? Object.assign({}, schema, {
            properties: (Object.keys(schema.properties) as (keyof T)[]).reduce<
              Record<keyof T, JSONSchema>
            >(
              (o, k) =>
                schema.properties
                  ? Object.assign(o, { [k]: schema.properties[k].getSchema() })
                  : o,
              // tslint:disable-next-line:no-object-literal-type-assertion
              {} as Record<keyof T, JSONSchema>
            ),
            type: 'object',
          })
        : Object.assign({}, schema, { type: 'object' }),
    // tslint:disable-next-line:no-object-literal-type-assertion
    type: {} as T,
  }
}

export {
  Null as null,
  Number as number,
  Integer as integer,
  String as string,
  Boolean as boolean,
  Array as array,
  Tuple as tuple,
  Obj as object
}