import Ajv from 'ajv'
import test from 'tape'
import * as s from '../src/tson-schema'

const ajv = new Ajv({ validateSchema: true })

test('anyOf type schema', (t) => {
  const oneOfSchema = s.oneOf([
    s.string(),
    s.integer(),
    s.array({ items: s.const('A') }),
  ])

  t.deepEquals(
    oneOfSchema.getSchema(),
    {
      oneOf: [
        { type: 'string' },
        { type: 'integer' },
        { type: 'array', items: { const: 'A' } },
      ],
    },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(oneOfSchema.getSchema())
  }, 'is a valid schema')

  const x: typeof oneOfSchema.type = 'A'
  const y: typeof oneOfSchema.type = 2
  const z: typeof oneOfSchema.type = ['A', 'A', 'A']

  t.end()
})
