import Ajv from 'ajv'
import test from 'tape'
import * as s from '../src/tson-schema'

const ajv = new Ajv({ validateSchema: true })

test('Object type schema', (t) => {
  const objectSchema = s.object({
    properties: {},
    required: [],
  })

  t.deepEquals(
    objectSchema.getSchema(),
    {
      type: 'object',
      properties: {},
      required: [],
    },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(objectSchema.getSchema())
  }, 'is a valid schema')

  const x: typeof objectSchema.type = {}

  t.comment('Partial object type schema')

  const partialObjectSchema = s.object({
    properties: {
      index: s.integer(),
    },
    required: [],
  })

  t.deepEquals(
    partialObjectSchema.getSchema(),
    {
      type: 'object',
      properties: {
        index: {
          type: 'integer',
        },
      },
      required: [],
    },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(partialObjectSchema.getSchema())
  }, 'is a valid schema')

  const y1: typeof partialObjectSchema.type = { index: 1 }
  const y2: typeof partialObjectSchema.type = {}

  t.comment('Complex object type schema')

  const complexObjectSchema = s.object({
    title: 'Complex Object',
    properties: {
      req: s.string(),
      opt: s.tuple({ items: [s.integer()] }),
    },
    required: ['req'],
  })

  t.deepEquals(
    complexObjectSchema.getSchema(),
    {
      type: 'object',
      title: 'Complex Object',
      properties: {
        req: { type: 'string' },
        opt: { type: 'array', items: [{ type: 'integer' }] },
      },
      required: ['req'],
    },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(complexObjectSchema.getSchema())
  }, 'is a valid schema')

  const z1: typeof complexObjectSchema.type = { req: 'foo' }
  const z2: typeof complexObjectSchema.type = { req: 'foo', opt: [1] }

  t.end()
})

test('Object type schema (record)', (t) => {
  const recordSchema = s.record({ additionalProperties: s.string() })

  t.deepEquals(
    recordSchema.getSchema(),
    {
      type: 'object',
      additionalProperties: { type: 'string' },
    },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(recordSchema.getSchema())
  }, 'is a valid schema')

  const x1: typeof recordSchema.type = {}
  const x2: typeof recordSchema.type = { key: 'value' }

  const anyRecordSchema = s.record({ additionalProperties: true })

  t.deepEquals(
    anyRecordSchema.getSchema(),
    {
      type: 'object',
      additionalProperties: true,
    },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(anyRecordSchema.getSchema())
  }, 'is a valid schema')

  const y1: typeof anyRecordSchema.type = {}
  const y2: typeof anyRecordSchema.type = { key: 'value' }
  const y3: typeof anyRecordSchema.type = { key: 1234 }

  t.end()
})
