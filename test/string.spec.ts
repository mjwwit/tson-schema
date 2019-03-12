import Ajv from 'ajv'
import test from 'tape'
import * as s from '../src/tson-schema'

const ajv = new Ajv({ validateSchema: true })

test('String type schema', (t) => {
  const stringSchema = s.string()

  t.deepEquals(
    stringSchema.getSchema(),
    { type: 'string' },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(stringSchema.getSchema())
  }, 'is a valid schema')

  const x: typeof stringSchema.type = 'hello world'

  t.comment('String type schema with $comment')

  const stringWithCommentSchema = s.string({
    $comment: 'Just a string',
  })

  t.deepEquals(
    stringWithCommentSchema.getSchema(),
    {
      type: 'string',
      $comment: 'Just a string',
    },
    'matches expected schema'
  )

  t.doesNotThrow(() => {
    ajv.compile(stringWithCommentSchema.getSchema())
  }, 'is a valid schema')

  t.end()
})
