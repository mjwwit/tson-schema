import { BaseSchemaDefinition, defineType } from './common'

export interface NumberSchemaDefinition extends BaseSchemaDefinition {
  minimum?: number
  maximum?: number
  exclusiveMinimum?: boolean
  exclusingMaximum?: boolean
  multipleOf?: number
}

const numberType = defineType<NumberSchemaDefinition, number>('number', 0)
const integerType = defineType<NumberSchemaDefinition, number>('integer', 0)

export { integerType as integer, numberType as number }
