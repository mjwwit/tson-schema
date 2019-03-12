import Ajv from 'ajv'
import test from 'tape'
import * as s from '../src/tson-schema'

const ajv = new Ajv({ validateSchema: true })

test('anyOf type schema', (t) => {
  const anyOfSchema = s.anyOf([
    s.string(),
    s.integer(),
    s.array({ items: s.const('A') }),
  ])

  t.deepEquals(
    anyOfSchema.getSchema(),
    {
      anyOf: [
        { type: 'string' },
        { type: 'integer' },
        { type: 'array', items: { const: 'A' } },
      ],
    },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(anyOfSchema.getSchema())
  }, 'is a valid schema')

  const x: typeof anyOfSchema.type = 'A'
  const y: typeof anyOfSchema.type = 2
  const z: typeof anyOfSchema.type = ['A', 'A', 'A']

  t.end()
})
