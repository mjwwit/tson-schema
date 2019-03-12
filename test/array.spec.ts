import Ajv from 'ajv'
import test from 'tape'
import * as s from '../src/tson-schema'

const ajv = new Ajv({ validateSchema: true })

test('Array type schema', (t) => {
  const arraySchema = s.array()

  t.deepEquals(
    arraySchema.getSchema(),
    { type: 'array' },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(arraySchema.getSchema())
  }, 'is a valid schema')

  const x: typeof arraySchema.type = []

  t.comment('Complex array type schema')

  const numberArraySchema = s.array({
    examples: [-1, 2, 3.5],
    items: s.number(),
  })

  t.deepEquals(
    numberArraySchema.getSchema(),
    {
      type: 'array',
      examples: [-1, 2, 3.5],
      items: { type: 'number' },
    },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(numberArraySchema.getSchema())
  }, 'is a valid schema')

  const y: typeof numberArraySchema.type = [1, 2]

  t.end()
})

test('Tuple array type schema', (t) => {
  const singleValueTupleSchema = s.tuple({
    items: [s.integer()],
  })

  t.deepEquals(
    singleValueTupleSchema.getSchema(),
    {
      items: [{ type: 'integer' }],
      type: 'array',
    },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(singleValueTupleSchema.getSchema())
  }, 'is a valid schema')

  const x: typeof singleValueTupleSchema.type = [1]

  t.comment('Complex tuple array type schema')

  const numberStringTupleSchema = s.tuple({
    $comment: 'A number and a string',
    items: [s.number(), s.string()],
  })

  t.deepEquals(
    numberStringTupleSchema.getSchema(),
    {
      type: 'array',
      $comment: 'A number and a string',
      items: [{ type: 'number' }, { type: 'string' }],
    },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(numberStringTupleSchema.getSchema())
  }, 'is a valid schema')

  const y: typeof numberStringTupleSchema.type = [1, 'a']

  t.end()
})
