import Ajv from 'ajv'
import test from 'tape'
import * as s from '../src/tson-schema'

const ajv = new Ajv({ validateSchema: true })

test('Any type schema', (t) => {
  const anySchema = s.any()

  t.deepEquals(anySchema.getSchema(), {}, 'matches expected schema')

  t.doesNotThrow(() => {
    ajv.compile(anySchema.getSchema())
  }, 'is a valid schema')

  const x1: typeof anySchema.type = null
  const x2: typeof anySchema.type = 2
  const x3: typeof anySchema.type = 'asdf'
  const x4: typeof anySchema.type = { foo: 'bar' }

  t.comment('Null type schema with description')

  const anyWithDescriptionSchema = s.any({
    description: 'Anything you want',
  })

  t.deepEquals(
    anyWithDescriptionSchema.getSchema(),
    {
      description: 'Anything you want',
    },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(anyWithDescriptionSchema.getSchema())
  }, 'is a valid schema')

  t.end()
})
