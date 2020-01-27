import { BaseSchemaDefinition, JSONSchema, TypedSchema } from './common'

export interface ObjectDefinition<
  ObjType extends object,
  RequiredKeysType extends (keyof ObjType)[]
> extends BaseSchemaDefinition {
  properties: {
    [KeyType in keyof ObjType]: TypedSchema<ObjType[KeyType]>
  }
  required: RequiredKeysType
}

function objectType<
  ObjectType extends object,
  KeyType extends (keyof ObjectType)[]
>(
  schema: ObjectDefinition<ObjectType, KeyType>
): TypedSchema<
  Partial<ObjectType> &
    { [RequiredKey in KeyType[number]]: ObjectType[RequiredKey] }
> {
  return {
    getSchema: () =>
      schema.properties
        ? Object.assign({}, schema, {
            properties: (Object.keys(
              schema.properties
            ) as (keyof ObjectType)[]).reduce<
              Record<keyof ObjectType, JSONSchema>
            >(
              (o, k) =>
                schema.properties
                  ? Object.assign(o, { [k]: schema.properties[k].getSchema() })
                  : o,
              // tslint:disable-next-line:no-object-literal-type-assertion
              {} as Record<keyof ObjectType, JSONSchema>
            ),
            type: 'object',
          })
        : Object.assign({}, schema, { type: 'object' }),
    // tslint:disable-next-line:no-object-literal-type-assertion
    type: {} as ObjectType,
  }
}

export { objectType as object }
