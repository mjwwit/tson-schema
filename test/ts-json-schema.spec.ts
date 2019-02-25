import test from 'tape'
import * as s from '../src/ts-json-schema'

test('Null type schema', (t) => {
  const nullSchema = s.Null()
  t.deepEquals(nullSchema.getSchema(), { type: 'null' })

  const x: typeof nullSchema.type = null

  t.end()
})

test('Number type schema', (t) => {
  const numberSchema = s.Number()
  t.deepEquals(numberSchema.getSchema(), { type: 'number' })

  const x: typeof numberSchema.type = 5

  t.end()
})

test('Integer type schema', (t) => {
  const integerSchema = s.Integer()
  t.deepEquals(integerSchema.getSchema(), { type: 'integer' })

  const x: typeof integerSchema.type = 5

  t.end()
})

test('String type schema', (t) => {
  const stringSchema = s.String()
  t.deepEquals(stringSchema.getSchema(), { type: 'string' })

  const x: typeof stringSchema.type = 'hello world'

  t.end()
})

test('Boolean type schema', (t) => {
  const booleanSchema = s.Boolean()
  t.deepEquals(booleanSchema.getSchema(), { type: 'boolean' })

  const x: typeof booleanSchema.type = false

  t.end()
})

test('Array type schema', (t) => {
  const arraySchema = s.Array()
  t.deepEquals(arraySchema.getSchema(), { type: 'array' })

  const x: typeof arraySchema.type = []

  const numberArraySchema = s.Array({
    items: s.Number(),
  })
  t.deepEquals(numberArraySchema.getSchema(), {
    items: { type: 'number' },
    type: 'array',
  })

  const y: typeof numberArraySchema.type = [1, 2]

  t.end()
})

test('Tuple array type schema', (t) => {
  const singleValueTupleSchema = s.Tuple({
    items: [s.Integer()],
  })
  t.deepEquals(singleValueTupleSchema.getSchema(), {
    items: [{ type: 'integer' }],
    type: 'array',
  })

  const x: typeof singleValueTupleSchema.type = [1]

  const numberStringTupleSchema = s.Tuple({
    items: [s.Number(), s.String()],
  })
  t.deepEquals(numberStringTupleSchema.getSchema(), {
    items: [{ type: 'number' }, { type: 'string' }],
    type: 'array',
  })

  const y: typeof numberStringTupleSchema.type = [1, 'a']

  t.end()
})

test('Object type schema', (t) => {
  const objectSchema = s.Obj({
    properties: {},
    required: [],
  })
  t.deepEquals(objectSchema.getSchema(), {
    type: 'object',
    properties: {},
    required: [],
  })

  const x: typeof objectSchema.type = {}

  const partialObjectSchema = s.Obj({
    properties: {
      index: s.Integer(),
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

  const complexObjectSchema = s.Obj({
    properties: {
      req: s.String(),
      opt: s.Tuple({ items: [s.Integer()] }),
    },
    required: ['req'],
  })

  const z1: typeof complexObjectSchema.type = { req: 'foo' }
  const z2: typeof complexObjectSchema.type = { req: 'foo', opt: [1] }

  t.end()
})
