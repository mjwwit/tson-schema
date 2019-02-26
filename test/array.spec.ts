import test from 'tape'
import * as s from '../src/tson-schema'

test('Array type schema', (t) => {
  const arraySchema = s.array()
  t.deepEquals(arraySchema.getSchema(), { type: 'array' })

  const x: typeof arraySchema.type = []

  const numberArraySchema = s.array({
    items: s.number(),
  })
  t.deepEquals(numberArraySchema.getSchema(), {
    items: { type: 'number' },
    type: 'array',
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
    items: [s.number(), s.string()],
  })
  t.deepEquals(numberStringTupleSchema.getSchema(), {
    items: [{ type: 'number' }, { type: 'string' }],
    type: 'array',
  })

  const y: typeof numberStringTupleSchema.type = [1, 'a']

  t.end()
})
