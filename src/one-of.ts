import { TypedSchema, UnwrapTypedSchema } from './common'

function oneOf<OptionsType extends TypedSchema<any>[] | [TypedSchema<any>]>(
  schemas: OptionsType
): TypedSchema<UnwrapTypedSchema<OptionsType[keyof OptionsType]>>
function oneOf(schemas: TypedSchema<any>[]): TypedSchema<any> {
  return {
    getSchema() {
      return {
        oneOf: schemas.map((schema) => schema.getSchema()),
      }
    },
    type: null as any,
  }
}

export { oneOf }
