import { BaseSchemaDefinition, TypedSchema, UnwrapTypedSchema } from './common'

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

export interface TupleSchemaDefinition<
  ElementsType extends TypedSchema<any>[] | [TypedSchema<any>]
> extends BaseArrayDefinition {
  items: ElementsType
}

function tupleType<
  ElementsType extends TypedSchema<any>[] | [TypedSchema<any>]
>(
  schema: TupleSchemaDefinition<ElementsType>
): TypedSchema<
  { [K in keyof ElementsType]: UnwrapTypedSchema<ElementsType[K]> }
> {
  return {
    getSchema: () =>
      Object.assign({}, schema, {
        items: schema.items.map((i) => i.getSchema()),
        type: 'array',
      }),
    type: [] as any,
  }
}

export { arrayType as array, tupleType as tuple }
