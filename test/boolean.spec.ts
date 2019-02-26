import test from 'tape'
import * as s from '../src/tson-schema'

test('Boolean type schema', (t) => {
  const booleanSchema = s.boolean()
  t.deepEquals(booleanSchema.getSchema(), { type: 'boolean' })

  const x: typeof booleanSchema.type = false

  t.end()
})
