import test from 'tape'
import * as s from '../src/tson-schema'

test('allOf type schema', (t) => {
  const allOfSchema = s.allOf([s.string(), s.enum(['A', 'B'])])
  t.deepEquals(allOfSchema.getSchema(), {
    allOf: [{ type: 'string' }, { enum: ['A', 'B'] }],
  })

  const x: typeof allOfSchema.type = 'A'
  const y: typeof allOfSchema.type = 'B'

  const allOfSchema2 = s.allOf([
    s.object({
      properties: {
        foo: s.string(),
      },
      required: ['foo'],
    }),
    s.object({
      properties: {
        bar: s.integer(),
      },
      required: ['bar'],
    }),
  ])
  t.deepEquals(allOfSchema2.getSchema(), {
    allOf: [
      {
        type: 'object',
        properties: { foo: { type: 'string' } },
        required: ['foo'],
      },
      {
        type: 'object',
        properties: { bar: { type: 'integer' } },
        required: ['bar'],
      },
    ],
  })

  const z: typeof allOfSchema2.type = { foo: 'foo', bar: 1 }

  t.end()
})
