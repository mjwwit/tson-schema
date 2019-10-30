import { BaseSchemaDefinition, defineType, TypedSchema } from './common'

export type JSONSchemaStringFormat =
  | 'date-time'
  | 'date'
  | 'time'
  | 'duration'
  | 'email'
  | 'idn-email'
  | 'hostname'
  | 'idn-hostname'
  | 'ipv4'
  | 'ipv6'
  | 'uri'
  | 'uri-reference'
  | 'iri'
  | 'iri-reference'
  | 'uuid'
  | 'uri-template'
  | 'json-pointer'
  | 'relative-json-pointer'
  | 'regex'

export interface StringSchemaDefinition extends BaseSchemaDefinition {
  minLength?: number
  maxLength?: number
  pattern?: string
  format?: JSONSchemaStringFormat
}

const stringType = defineType<StringSchemaDefinition, string>('string', '')

export { stringType as string }
