import { BaseSchemaDefinition, TypedSchema } from './common'

function anyType(schema: BaseSchemaDefinition = {}): TypedSchema<any> {
  return {
    getSchema: () => schema,
    type: 'ANY',
  }
}

export { anyType as any }
