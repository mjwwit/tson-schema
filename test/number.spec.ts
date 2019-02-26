import test from 'tape'
import * as s from '../src/tson-schema'

test('Number type schema', (t) => {
  const numberSchema = s.number()
  t.deepEquals(numberSchema.getSchema(), { type: 'number' })

  const x: typeof numberSchema.type = 5

  t.end()
})

test('Integer type schema', (t) => {
  const integerSchema = s.integer()
  t.deepEquals(integerSchema.getSchema(), { type: 'integer' })

  const x: typeof integerSchema.type = 5

  t.end()
})
