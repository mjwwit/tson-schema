import { BaseSchemaDefinition, defineType } from './common'

const booleanType = defineType<BaseSchemaDefinition, boolean>('boolean', true)

export { booleanType as boolean }
