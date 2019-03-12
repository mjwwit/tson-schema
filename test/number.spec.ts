import Ajv from 'ajv'
import test from 'tape'
import * as s from '../src/tson-schema'

const ajv = new Ajv({ validateSchema: true })

test('Number type schema', (t) => {
  const numberSchema = s.number()

  t.deepEquals(
    numberSchema.getSchema(),
    { type: 'number' },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(numberSchema.getSchema())
  }, 'is a valid schema')

  const x: typeof numberSchema.type = 5

  t.comment('Number type schema with examples')

  const numberWithExamplesSchema = s.number({
    examples: [-1, 2, 3.5],
  })

  t.deepEquals(
    numberWithExamplesSchema.getSchema(),
    {
      type: 'number',
      examples: [-1, 2, 3.5],
    },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(numberWithExamplesSchema.getSchema())
  }, 'is a valid schema')

  t.end()
})

test('Integer type schema', (t) => {
  const integerSchema = s.integer()

  t.deepEquals(
    integerSchema.getSchema(),
    { type: 'integer' },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(integerSchema.getSchema())
  }, 'is a valid schema')

  const x: typeof integerSchema.type = 5

  t.comment('Integer type schema with title')

  const integerWithTitleSchema = s.integer({
    title: 'Da Int',
  })

  t.deepEquals(
    integerWithTitleSchema.getSchema(),
    {
      type: 'integer',
      title: 'Da Int',
    },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(integerWithTitleSchema.getSchema())
  }, 'is a valid schema')

  t.end()
})
