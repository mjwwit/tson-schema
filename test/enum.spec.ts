import test from 'tape'
import * as s from '../src/tson-schema'

test('Enum type schema', (t) => {
  const enumSchema = s.enum({
    enum: ['A', 2],
  })
  t.deepEquals(enumSchema.getSchema(), { enum: ['A', 2] })

  const x: typeof enumSchema.type = 'A'
  const y: typeof enumSchema.type = 2

  const enum5Schema = s.enum({
    enum: ['A', 'B', 'C', 'D', 'E'],
  })
  t.deepEquals(enum5Schema.getSchema(), { enum: ['A', 'B', 'C', 'D', 'E'] })

  const z: typeof enum5Schema.type = 'E'

  t.end()
})