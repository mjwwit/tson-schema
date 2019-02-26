import test from 'tape'
import * as s from '../src/tson-schema'

test('Number type schema', (t) => {
  const numberSchema = s.number()
  t.deepEquals(numberSchema.getSchema(), { type: 'number' })

  const x: typeof numberSchema.type = 5

  const numberWithExamplesSchema = s.number({
    examples: [-1, 2, 3.5],
  })

  t.deepEquals(numberWithExamplesSchema.getSchema(), {
    type: 'number',
    examples: [-1, 2, 3.5],
  })

  t.end()
})

test('Integer type schema', (t) => {
  const integerSchema = s.integer()
  t.deepEquals(integerSchema.getSchema(), { type: 'integer' })

  const x: typeof integerSchema.type = 5

  const integerWithTitleSchema = s.integer({
    title: 'Da Int',
  })

  t.deepEquals(integerWithTitleSchema.getSchema(), {
    type: 'integer',
    title: 'Da Int',
  })

  t.end()
})
