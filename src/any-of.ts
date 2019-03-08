import { TypedSchema } from './common'

function anyOf<T1>(schemas: [TypedSchema<T1>]): TypedSchema<T1>
function anyOf<T1, T2>(
  schemas: [TypedSchema<T1>, TypedSchema<T2>]
): TypedSchema<T1 | T2>
function anyOf<T1, T2, T3>(
  schemas: [TypedSchema<T1>, TypedSchema<T2>, TypedSchema<T3>]
): TypedSchema<T1 | T2 | T3>
function anyOf<T1, T2, T3, T4>(
  schemas: [TypedSchema<T1>, TypedSchema<T2>, TypedSchema<T3>, TypedSchema<T4>]
): TypedSchema<T1 | T2 | T3 | T4>
function anyOf<T1, T2, T3, T4, T5>(
  schemas: [
    TypedSchema<T1>,
    TypedSchema<T2>,
    TypedSchema<T3>,
    TypedSchema<T4>,
    TypedSchema<T5>
  ]
): TypedSchema<T1 | T2 | T3 | T4 | T5>
function anyOf<T1, T2, T3, T4, T5, T6>(
  schemas: [
    TypedSchema<T1>,
    TypedSchema<T2>,
    TypedSchema<T3>,
    TypedSchema<T4>,
    TypedSchema<T5>,
    TypedSchema<T6>
  ]
): TypedSchema<T1 | T2 | T3 | T4 | T5 | T6>
function anyOf<T1, T2, T3, T4, T5, T6, T7>(
  schemas: [
    TypedSchema<T1>,
    TypedSchema<T2>,
    TypedSchema<T3>,
    TypedSchema<T4>,
    TypedSchema<T5>,
    TypedSchema<T6>,
    TypedSchema<T7>
  ]
): TypedSchema<T1 | T2 | T3 | T4 | T5 | T6 | T7>
function anyOf<T1, T2, T3, T4, T5, T6, T7, T8>(
  schemas: [
    TypedSchema<T1>,
    TypedSchema<T2>,
    TypedSchema<T3>,
    TypedSchema<T4>,
    TypedSchema<T5>,
    TypedSchema<T6>,
    TypedSchema<T7>,
    TypedSchema<T8>
  ]
): TypedSchema<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>
function anyOf<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  schemas: [
    TypedSchema<T1>,
    TypedSchema<T2>,
    TypedSchema<T3>,
    TypedSchema<T4>,
    TypedSchema<T5>,
    TypedSchema<T6>,
    TypedSchema<T7>,
    TypedSchema<T8>,
    TypedSchema<T9>
  ]
): TypedSchema<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>
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
