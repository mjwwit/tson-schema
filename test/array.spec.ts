import test from 'tape'
import * as s from '../src/tson-schema'

test('Array type schema', (t) => {
  const arraySchema = s.array()
  t.deepEquals(arraySchema.getSchema(), { type: 'array' })

  const x: typeof arraySchema.type = []

  const numberArraySchema = s.array({
    examples: [-1, 2, 3.5],
    items: s.number(),
  })
  t.deepEquals(numberArraySchema.getSchema(), {
    type: 'array',
    examples: [-1, 2, 3.5],
    items: { type: 'number' },
  })

  const y: typeof numberArraySchema.type = [1, 2]

  t.end()
})

test('Tuple array type schema', (t) => {
  const singleValueTupleSchema = s.tuple({
    items: [s.integer()],
  })
  t.deepEquals(singleValueTupleSchema.getSchema(), {
    items: [{ type: 'integer' }],
    type: 'array',
  })

  const x: typeof singleValueTupleSchema.type = [1]

  const numberStringTupleSchema = s.tuple({
    $comment: 'A number and a string',
    items: [s.number(), s.string()],
  })
  t.deepEquals(numberStringTupleSchema.getSchema(), {
    type: 'array',
    $comment: 'A number and a string',
    items: [{ type: 'number' }, { type: 'string' }],
  })

  const y: typeof numberStringTupleSchema.type = [1, 'a']

  t.end()
})
