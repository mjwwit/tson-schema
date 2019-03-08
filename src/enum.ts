import { BaseSchemaDefinition, TypedSchema } from './common'

type LiteralValue = string | number | boolean | null

interface EnumSchemaDefinition1<V1 extends LiteralValue>
  extends BaseSchemaDefinition {
  /**
   * A fixed set of allowed values
   */
  enum: [V1]
}
interface EnumSchemaDefinition2<
  V1 extends LiteralValue,
  V2 extends LiteralValue
> extends BaseSchemaDefinition {
  /**
   * A fixed set of allowed values
   */
  enum: [V1, V2]
}
interface EnumSchemaDefinition3<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue
> extends BaseSchemaDefinition {
  /**
   * A fixed set of allowed values
   */
  enum: [V1, V2, V3]
}
interface EnumSchemaDefinition4<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue,
  V4 extends LiteralValue
> extends BaseSchemaDefinition {
  /**
   * A fixed set of allowed values
   */
  enum: [V1, V2, V3, V4]
}
interface EnumSchemaDefinition5<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue,
  V4 extends LiteralValue,
  V5 extends LiteralValue
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
  enum: LiteralValue[]
}

function enumType<V1 extends LiteralValue>(
  schema: EnumSchemaDefinition1<V1>
): TypedSchema<V1>
function enumType<V1 extends LiteralValue, V2 extends LiteralValue>(
  schema: EnumSchemaDefinition2<V1, V2>
): TypedSchema<V1 | V2>
function enumType<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue
>(schema: EnumSchemaDefinition3<V1, V2, V3>): TypedSchema<V1 | V2 | V3>
function enumType<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue,
  V4 extends LiteralValue
>(schema: EnumSchemaDefinition4<V1, V2, V3, V4>): TypedSchema<V1 | V2 | V3 | V4>
function enumType<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue,
  V4 extends LiteralValue,
  V5 extends LiteralValue
>(
  schema: EnumSchemaDefinition5<V1, V2, V3, V4, V5>
): TypedSchema<V1 | V2 | V3 | V4 | V5>
function enumType(schema: EnumSchemaDefinitionRest): TypedSchema<LiteralValue> {
  return {
    getSchema: () => Object.assign({}, schema),
    type: 'ENUM_VALUE' as any,
  }
}

function constType<T extends LiteralValue>(value: T): TypedSchema<T> {
  return {
    getSchema: () => ({ const: value }),
    type: 'CONST_VALUE' as T,
  }
}

export { constType as const, enumType as enum }
