import { TypedSchema } from './common'

type LiteralValue = string | number | boolean | null

type Enum1<V1 extends LiteralValue> = [V1]
type Enum2<V1 extends LiteralValue, V2 extends LiteralValue> = [V1, V2]
type Enum3<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue
> = [V1, V2, V3]
type Enum4<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue,
  V4 extends LiteralValue
> = [V1, V2, V3, V4]
type Enum5<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue,
  V4 extends LiteralValue,
  V5 extends LiteralValue
> = [V1, V2, V3, V4, V5]
type Enum6<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue,
  V4 extends LiteralValue,
  V5 extends LiteralValue,
  V6 extends LiteralValue
> = [V1, V2, V3, V4, V5, V6]
type Enum7<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue,
  V4 extends LiteralValue,
  V5 extends LiteralValue,
  V6 extends LiteralValue,
  V7 extends LiteralValue
> = [V1, V2, V3, V4, V5, V6, V7]
type Enum8<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue,
  V4 extends LiteralValue,
  V5 extends LiteralValue,
  V6 extends LiteralValue,
  V7 extends LiteralValue,
  V8 extends LiteralValue
> = [V1, V2, V3, V4, V5, V6, V7, V8]
type Enum9<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue,
  V4 extends LiteralValue,
  V5 extends LiteralValue,
  V6 extends LiteralValue,
  V7 extends LiteralValue,
  V8 extends LiteralValue,
  V9 extends LiteralValue
> = [V1, V2, V3, V4, V5, V6, V7, V8, V9]
type EnumRest = LiteralValue[]

function enumType<V1 extends LiteralValue>(values: Enum1<V1>): TypedSchema<V1>
function enumType<V1 extends LiteralValue, V2 extends LiteralValue>(
  values: Enum2<V1, V2>
): TypedSchema<V1 | V2>
function enumType<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue
>(values: Enum3<V1, V2, V3>): TypedSchema<V1 | V2 | V3>
function enumType<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue,
  V4 extends LiteralValue
>(values: Enum4<V1, V2, V3, V4>): TypedSchema<V1 | V2 | V3 | V4>
function enumType<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue,
  V4 extends LiteralValue,
  V5 extends LiteralValue
>(values: Enum5<V1, V2, V3, V4, V5>): TypedSchema<V1 | V2 | V3 | V4 | V5>
function enumType<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue,
  V4 extends LiteralValue,
  V5 extends LiteralValue,
  V6 extends LiteralValue
>(
  values: Enum6<V1, V2, V3, V4, V5, V6>
): TypedSchema<V1 | V2 | V3 | V4 | V5 | V6>
function enumType<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue,
  V4 extends LiteralValue,
  V5 extends LiteralValue,
  V6 extends LiteralValue,
  V7 extends LiteralValue
>(
  values: Enum7<V1, V2, V3, V4, V5, V6, V7>
): TypedSchema<V1 | V2 | V3 | V4 | V5 | V6 | V7>
function enumType<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue,
  V4 extends LiteralValue,
  V5 extends LiteralValue,
  V6 extends LiteralValue,
  V7 extends LiteralValue,
  V8 extends LiteralValue
>(
  values: Enum8<V1, V2, V3, V4, V5, V6, V7, V8>
): TypedSchema<V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8>
function enumType<
  V1 extends LiteralValue,
  V2 extends LiteralValue,
  V3 extends LiteralValue,
  V4 extends LiteralValue,
  V5 extends LiteralValue,
  V6 extends LiteralValue,
  V7 extends LiteralValue,
  V8 extends LiteralValue,
  V9 extends LiteralValue
>(
  values: Enum9<V1, V2, V3, V4, V5, V6, V7, V8, V9>
): TypedSchema<V1 | V2 | V3 | V4 | V5 | V6 | V7 | V8 | V9>
function enumType(values: EnumRest): TypedSchema<LiteralValue> {
  return {
    getSchema: () => Object.assign({}, { enum: values }),
    type: 'ENUM_VALUE' as any,
  }
}

function constType<Value extends LiteralValue>(
  value: Value
): TypedSchema<Value> {
  return {
    getSchema: () => ({ const: value }),
    type: 'CONST_VALUE' as Value,
  }
}

export { constType as const, enumType as enum }
