import Ajv from 'ajv'
import test from 'tape'
import * as s from '../src/tson-schema'

const ajv = new Ajv({ validateSchema: true })

test('Boolean type schema', (t) => {
  const booleanSchema = s.boolean()

  t.deepEquals(
    booleanSchema.getSchema(),
    { type: 'boolean' },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(booleanSchema.getSchema())
  }, 'is a valid schema')

  const x: typeof booleanSchema.type = false

  t.comment('Boolean type schema with default value')

  const booleanWithDefault = s.boolean({
    default: true,
  })

  t.deepEquals(
    booleanWithDefault.getSchema(),
    {
      type: 'boolean',
      default: true,
    },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(booleanWithDefault.getSchema())
  }, 'is a valid schema')

  t.end()
})
