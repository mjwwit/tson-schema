import Ajv from 'ajv'
import test from 'tape'
import * as s from '../src/tson-schema'

const ajv = new Ajv({ validateSchema: true })

test('Null type schema', (t) => {
  const nullSchema = s.null()

  t.deepEquals(
    nullSchema.getSchema(),
    { type: 'null' },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(nullSchema.getSchema())
  }, 'is a valid schema')

  const x: typeof nullSchema.type = null

  t.comment('Null type schema with description')

  const nullWithDescriptionSchema = s.null({
    description: 'Some lost null value',
  })

  t.deepEquals(
    nullWithDescriptionSchema.getSchema(),
    {
      type: 'null',
      description: 'Some lost null value',
    },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(nullWithDescriptionSchema.getSchema())
  }, 'is a valid schema')

  t.end()
})
