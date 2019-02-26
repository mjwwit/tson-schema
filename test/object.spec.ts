import test from 'tape'
import * as s from '../src/tson-schema'

test('Object type schema', (t) => {
  const objectSchema = s.object({
    properties: {},
    required: [],
  })
  t.deepEquals(objectSchema.getSchema(), {
    type: 'object',
    properties: {},
    required: [],
  })

  const x: typeof objectSchema.type = {}

  const partialObjectSchema = s.object({
    properties: {
      index: s.integer(),
    },
    required: [],
  })

  t.deepEquals(partialObjectSchema.getSchema(), {
    type: 'object',
    properties: {
      index: {
        type: 'integer',
      },
    },
    required: [],
  })

  const y1: typeof partialObjectSchema.type = { index: 1 }
  const y2: typeof partialObjectSchema.type = {}

  const complexObjectSchema = s.object({
    properties: {
      req: s.string(),
      opt: s.tuple({ items: [s.integer()] }),
    },
    required: ['req'],
  })

  const z1: typeof complexObjectSchema.type = { req: 'foo' }
  const z2: typeof complexObjectSchema.type = { req: 'foo', opt: [1] }

  t.end()
})
