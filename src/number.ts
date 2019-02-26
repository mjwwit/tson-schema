import { defineType, JSONSchema } from './common'

export interface NumberSchemaDefinition {
  minimum?: number
  maximum?: number
  exclusiveMinimum?: boolean
  exclusingMaximum?: boolean
  multipleOf?: number
}

export interface NumberSchema extends JSONSchema, NumberSchemaDefinition {
  type: 'number'
}

const numberType = defineType<NumberSchemaDefinition, number>('number', 0)

export interface IntegerSchema extends JSONSchema, NumberSchemaDefinition {
  type: 'integer'
}

const integerType = defineType<NumberSchemaDefinition, number>('integer', 0)

export { integerType as integer, numberType as number }
