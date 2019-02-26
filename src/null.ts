import { defineType, JSONSchema } from './common'

export interface NullSchema extends JSONSchema {
  type: 'null'
}

const nullType = defineType<never, null>('null', null)

export { nullType as null }
