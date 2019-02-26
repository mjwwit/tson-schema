import { BaseSchemaDefinition, defineType } from './common'

const nullType = defineType<BaseSchemaDefinition, null>('null', null)

export { nullType as null }
