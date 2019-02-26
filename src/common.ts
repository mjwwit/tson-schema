export interface TypedSchema<T> {
  type: T
  getSchema(): JSONSchema
}

export interface JSONSchema {
  type: string
}

export function defineType<SchemaDefinition extends object, ValueType>(
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
