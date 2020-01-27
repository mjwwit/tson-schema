import { TypedSchema, UnwrapTypedSchema } from './common'

function anyOf<OptionsType extends TypedSchema<any>[] | [TypedSchema<any>]>(
  schemas: OptionsType
): TypedSchema<UnwrapTypedSchema<OptionsType[keyof OptionsType]>>
function anyOf(schemas: TypedSchema<any>[]): TypedSchema<any> {
  return {
    getSchema() {
      return {
        anyOf: schemas.map((schema) => schema.getSchema()),
      }
    },
    type: null as any,
  }
}

export { anyOf }
