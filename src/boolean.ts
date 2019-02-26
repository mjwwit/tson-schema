import { defineType, JSONSchema } from './common'

export interface BooleanSchema extends JSONSchema {
  type: 'boolean'
}

const booleanType = defineType<never, boolean>('boolean', true)

export { booleanType as boolean }
