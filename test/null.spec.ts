import test from 'tape'
import * as s from '../src/tson-schema'

test('Null type schema', (t) => {
  const nullSchema = s.null()
  t.deepEquals(nullSchema.getSchema(), { type: 'null' })

  const x: typeof nullSchema.type = null

  t.end()
})
