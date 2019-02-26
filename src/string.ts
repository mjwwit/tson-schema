import { BaseSchemaDefinition, defineType, JSONSchema } from './common'

export type JSONSchemaStringFormat =
  | 'date-time'
  | 'email'
  | 'hostname'
  | 'ipv4'
  | 'ipv6'
  | 'uri'
  | 'uri-reference'
  | 'json-pointer'
  | 'uri-template'
export interface StringSchemaDefinition extends BaseSchemaDefinition {
  minLength?: number
  maxLength?: number
  pattern?: string
  format?: JSONSchemaStringFormat
}

const stringType = defineType<StringSchemaDefinition, string>('string', '')

export { stringType as string }
