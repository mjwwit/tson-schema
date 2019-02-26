import test from 'tape'
import * as s from '../src/tson-schema'

test('Boolean type schema', (t) => {
  const booleanSchema = s.boolean()
  t.deepEquals(booleanSchema.getSchema(), { type: 'boolean' })

  const x: typeof booleanSchema.type = false

  const booleanWithDefault = s.boolean({
    default: true,
  })

  t.deepEquals(booleanWithDefault.getSchema(), {
    type: 'boolean',
    default: true,
  })

  t.end()
})
