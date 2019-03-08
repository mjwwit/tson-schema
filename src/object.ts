import { BaseSchemaDefinition, JSONSchema, TypedSchema } from './common'

export interface ObjectDefinition<T extends {}> extends BaseSchemaDefinition {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: (keyof T)[]
}

export interface PartialObjectDefinition<T extends {}>
  extends BaseSchemaDefinition {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: []
}

export interface ObjectDefinition1<T extends {}, R1 extends keyof T>
  extends BaseSchemaDefinition {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: [R1]
}
export interface ObjectDefinition2<
  T extends {},
  R1 extends keyof T,
  R2 extends keyof T
> extends BaseSchemaDefinition {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: [R1, R2]
}
export interface ObjectDefinition3<
  T extends {},
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T
> extends BaseSchemaDefinition {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: [R1, R2, R3]
}
export interface ObjectDefinition4<
  T extends {},
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T,
  R4 extends keyof T
> extends BaseSchemaDefinition {
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
> extends BaseSchemaDefinition {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: [R1, R2, R3, R4, R5]
}
export interface ObjectDefinition6<
  T extends {},
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T,
  R4 extends keyof T,
  R5 extends keyof T,
  R6 extends keyof T
> extends BaseSchemaDefinition {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: [R1, R2, R3, R4, R5, R6]
}
export interface ObjectDefinition7<
  T extends {},
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T,
  R4 extends keyof T,
  R5 extends keyof T,
  R6 extends keyof T,
  R7 extends keyof T
> extends BaseSchemaDefinition {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: [R1, R2, R3, R4, R5, R6, R7]
}
export interface ObjectDefinition8<
  T extends {},
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T,
  R4 extends keyof T,
  R5 extends keyof T,
  R6 extends keyof T,
  R7 extends keyof T,
  R8 extends keyof T
> extends BaseSchemaDefinition {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: [R1, R2, R3, R4, R5, R6, R7, R8]
}
export interface ObjectDefinition9<
  T extends {},
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T,
  R4 extends keyof T,
  R5 extends keyof T,
  R6 extends keyof T,
  R7 extends keyof T,
  R8 extends keyof T,
  R9 extends keyof T
> extends BaseSchemaDefinition {
  properties: { [Key in keyof T]: TypedSchema<T[Key]> }
  required: [R1, R2, R3, R4, R5, R6, R7, R8, R9]
}

function objectType<T>(
  schema: PartialObjectDefinition<T>
): TypedSchema<Partial<T>>
function objectType<T, R1 extends keyof T>(
  schema: ObjectDefinition1<T, R1>
): TypedSchema<Partial<T> & { [key in R1]: T[key] }>
function objectType<T, R1 extends keyof T, R2 extends keyof T>(
  schema: ObjectDefinition2<T, R1, R2>
): TypedSchema<Partial<T> & { [key in R1 | R2]: T[key] }>
function objectType<
  T,
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T
>(
  schema: ObjectDefinition3<T, R1, R2, R3>
): TypedSchema<Partial<T> & { [key in R1 | R2 | R3]: T[key] }>
function objectType<
  T,
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T,
  R4 extends keyof T
>(
  schema: ObjectDefinition4<T, R1, R2, R3, R4>
): TypedSchema<Partial<T> & { [key in R1 | R2 | R3 | R4]: T[key] }>
function objectType<
  T,
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T,
  R4 extends keyof T,
  R5 extends keyof T
>(
  schema: ObjectDefinition5<T, R1, R2, R3, R4, R5>
): TypedSchema<Partial<T> & { [key in R1 | R2 | R3 | R4 | R5]: T[key] }>
function objectType<
  T,
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T,
  R4 extends keyof T,
  R5 extends keyof T,
  R6 extends keyof T
>(
  schema: ObjectDefinition6<T, R1, R2, R3, R4, R5, R6>
): TypedSchema<Partial<T> & { [key in R1 | R2 | R3 | R4 | R5 | R6]: T[key] }>
function objectType<
  T,
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T,
  R4 extends keyof T,
  R5 extends keyof T,
  R6 extends keyof T,
  R7 extends keyof T
>(
  schema: ObjectDefinition7<T, R1, R2, R3, R4, R5, R6, R7>
): TypedSchema<
  Partial<T> & { [key in R1 | R2 | R3 | R4 | R5 | R6 | R7]: T[key] }
>
function objectType<
  T,
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T,
  R4 extends keyof T,
  R5 extends keyof T,
  R6 extends keyof T,
  R7 extends keyof T,
  R8 extends keyof T
>(
  schema: ObjectDefinition8<T, R1, R2, R3, R4, R5, R6, R7, R8>
): TypedSchema<
  Partial<T> & { [key in R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8]: T[key] }
>
function objectType<
  T,
  R1 extends keyof T,
  R2 extends keyof T,
  R3 extends keyof T,
  R4 extends keyof T,
  R5 extends keyof T,
  R6 extends keyof T,
  R7 extends keyof T,
  R8 extends keyof T,
  R9 extends keyof T
>(
  schema: ObjectDefinition9<T, R1, R2, R3, R4, R5, R6, R7, R8, R9>
): TypedSchema<
  Partial<T> & { [key in R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9]: T[key] }
>
function objectType<T>(schema: ObjectDefinition<T>): TypedSchema<T> {
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

export { objectType as object }
