export interface TypedSchema<T> {
  type: T
  getSchema(): JSONSchema
}

export type JSONSchema = object

export type UnwrapTypedSchema<Schema> = Schema extends TypedSchema<
  infer InnerType
>
  ? InnerType
  : never

export type TypeOf<Schema extends TypedSchema<any>> = Schema['type']

export interface BaseSchemaDefinition {
  /**
   * Schema title
   */
  title?: string
  /**
   * Schema description
   */
  description?: string
  /**
   * A comment to be added to the schema
   */
  $comment?: string
  /**
   * Default value to be assigned when no value is given in
   * the document
   */
  default?: any
  /**
   * A list of example values that match this schema
   */
  examples?: any[]
}

export function defineType<
  SchemaDefinition extends BaseSchemaDefinition,
  ValueType
>(
  type: string,
  value: ValueType
): (schema?: SchemaDefinition) => TypedSchema<ValueType> {
  return (schema: any = {}) => {
    return {
      getSchema: () => Object.assign({}, schema, { type }),
      type: value as ValueType,
    }
  }
}
