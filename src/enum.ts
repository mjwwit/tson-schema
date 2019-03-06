import { BaseSchemaDefinition, JSONSchema, TypedSchema } from './common'

type EnumValue = string | number | boolean

interface EnumSchemaDefinition1<V1 extends EnumValue>
  extends BaseSchemaDefinition {
  /**
   * A fixed set of allowed values
   */
  enum: [V1]
}
interface EnumSchemaDefinition2<V1 extends EnumValue, V2 extends EnumValue>
  extends BaseSchemaDefinition {
  /**
   * A fixed set of allowed values
   */
  enum: [V1, V2]
}
interface EnumSchemaDefinition3<
  V1 extends EnumValue,
  V2 extends EnumValue,
  V3 extends EnumValue
> extends BaseSchemaDefinition {
  /**
   * A fixed set of allowed values
   */
  enum: [V1, V2, V3]
}
interface EnumSchemaDefinition4<
  V1 extends EnumValue,
  V2 extends EnumValue,
  V3 extends EnumValue,
  V4 extends EnumValue
> extends BaseSchemaDefinition {
  /**
   * A fixed set of allowed values
   */
  enum: [V1, V2, V3, V4]
}
interface EnumSchemaDefinition5<
  V1 extends EnumValue,
  V2 extends EnumValue,
  V3 extends EnumValue,
  V4 extends EnumValue,
  V5 extends EnumValue
> extends BaseSchemaDefinition {
  /**
   * A fixed set of allowed values
   */
  enum: [V1, V2, V3, V4, V5]
}
interface EnumSchemaDefinitionRest extends BaseSchemaDefinition {
  /**
   * A fixed set of allowed values
   */
  enum: EnumValue[]
}

function enumType<V1 extends EnumValue>(
  schema: EnumSchemaDefinition1<V1>
): TypedSchema<V1>
function enumType<V1 extends EnumValue, V2 extends EnumValue>(
  schema: EnumSchemaDefinition2<V1, V2>
): TypedSchema<V1 | V2>
function enumType<
  V1 extends EnumValue,
  V2 extends EnumValue,
  V3 extends EnumValue
>(schema: EnumSchemaDefinition3<V1, V2, V3>): TypedSchema<V1 | V2 | V3>
function enumType<
  V1 extends EnumValue,
  V2 extends EnumValue,
  V3 extends EnumValue,
  V4 extends EnumValue
>(schema: EnumSchemaDefinition4<V1, V2, V3, V4>): TypedSchema<V1 | V2 | V3 | V4>
function enumType<
  V1 extends EnumValue,
  V2 extends EnumValue,
  V3 extends EnumValue,
  V4 extends EnumValue,
  V5 extends EnumValue
>(
  schema: EnumSchemaDefinition5<V1, V2, V3, V4, V5>
): TypedSchema<V1 | V2 | V3 | V4 | V5>
function enumType(schema: EnumSchemaDefinitionRest): TypedSchema<EnumValue> {
  return {
    getSchema: () => Object.assign({}, schema) as JSONSchema,
    type: 'ENUM_VALUE' as any,
  }
}

export { enumType as enum }
