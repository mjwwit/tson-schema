import Ajv from 'ajv'
import test from 'tape'
import * as s from '../src/tson-schema'

const ajv = new Ajv({ validateSchema: true })

test('Enum schema', (t) => {
  const enumSchema = s.enum(['A', 2])

  t.deepEquals(
    enumSchema.getSchema(),
    { enum: ['A', 2] },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(enumSchema.getSchema())
  }, 'is a valid schema')

  const x: typeof enumSchema.type = 'A'
  const y: typeof enumSchema.type = 2

  t.comment('Complex enum schema')

  const enum5Schema = s.enum(['A', 'B', 'C', 'D', 'E'])

  t.deepEquals(
    enum5Schema.getSchema(),
    { enum: ['A', 'B', 'C', 'D', 'E'] },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(enum5Schema.getSchema())
  }, 'is a valid schema')

  const z: typeof enum5Schema.type = 'E'

  t.end()
})

test('Const schema', (t) => {
  const constSchema = s.const('A')

  t.deepEquals(
    constSchema.getSchema(),
    { const: 'A' },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(constSchema.getSchema())
  }, 'is a valid schema')

  const x: typeof constSchema.type = 'A'

  t.end()
})
