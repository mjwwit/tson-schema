import test from 'tape'
import * as s from '../src/tson-schema'

test('String type schema', (t) => {
  const stringSchema = s.string()
  t.deepEquals(stringSchema.getSchema(), { type: 'string' })

  const x: typeof stringSchema.type = 'hello world'

  t.end()
})
