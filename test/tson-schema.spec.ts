import test from 'tape'
import * as s from '../src/tson-schema'

test('Null type schema', (t) => {
  const nullSchema = s.null()
  t.deepEquals(nullSchema.getSchema(), { type: 'null' })

  const x: typeof nullSchema.type = null

  t.end()
})

test('Number type schema', (t) => {
  const numberSchema = s.number()
  t.deepEquals(numberSchema.getSchema(), { type: 'number' })

  const x: typeof numberSchema.type = 5

  t.end()
})

test('Integer type schema', (t) => {
  const integerSchema = s.integer()
  t.deepEquals(integerSchema.getSchema(), { type: 'integer' })

  const x: typeof integerSchema.type = 5

  t.end()
})

test('String type schema', (t) => {
  const stringSchema = s.string()
  t.deepEquals(stringSchema.getSchema(), { type: 'string' })

  const x: typeof stringSchema.type = 'hello world'

  t.end()
})

test('Boolean type schema', (t) => {
  const booleanSchema = s.boolean()
  t.deepEquals(booleanSchema.getSchema(), { type: 'boolean' })

  const x: typeof booleanSchema.type = false

  t.end()
})

test('Array type schema', (t) => {
  const arraySchema = s.array()
  t.deepEquals(arraySchema.getSchema(), { type: 'array' })

  const x: typeof arraySchema.type = []

  const numberArraySchema = s.array({
    items: s.number(),
  })
  t.deepEquals(numberArraySchema.getSchema(), {
    items: { type: 'number' },
    type: 'array',
  })

  const y: typeof numberArraySchema.type = [1, 2]

  t.end()
})

test('Tuple array type schema', (t) => {
  const singleValueTupleSchema = s.tuple({
    items: [s.integer()],
  })
  t.deepEquals(singleValueTupleSchema.getSchema(), {
    items: [{ type: 'integer' }],
    type: 'array',
  })

  const x: typeof singleValueTupleSchema.type = [1]

  const numberStringTupleSchema = s.tuple({
    items: [s.number(), s.string()],
  })
  t.deepEquals(numberStringTupleSchema.getSchema(), {
    items: [{ type: 'number' }, { type: 'string' }],
    type: 'array',
  })

  const y: typeof numberStringTupleSchema.type = [1, 'a']

  t.end()
})

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
