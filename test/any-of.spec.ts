import test from 'tape'
import * as s from '../src/tson-schema'

test('anyOf type schema', (t) => {
  const anyOfSchema = s.anyOf([
    s.string(),
    s.integer(),
    s.array({ items: s.const('A') }),
  ])
  t.deepEquals(anyOfSchema.getSchema(), {
    anyOf: [
      { type: 'string' },
      { type: 'integer' },
      { type: 'array', items: { const: 'A' } },
    ],
  })

  const x: typeof anyOfSchema.type = 'A'
  const y: typeof anyOfSchema.type = 2
  const z: typeof anyOfSchema.type = ['A', 'A', 'A']

  t.end()
})
