import { BaseSchemaDefinition, TypedSchema } from './common'
import { number } from './number'
import { string } from './string'

export interface ObjDefinition<
  Obj extends {},
  Additionals,
  Requireds extends (keyof Obj)[]
> extends BaseSchemaDefinition {
  properties: { [Key in keyof Obj]: TypedSchema<Obj[Key]> }
  required: Requireds
  additionalProperties?: TypedSchema<Additionals>
}

const objectType = <
  Schema extends ObjDefinition<Base, Additionals, [K1]>,
  Base extends {},
  Additionals,
  K1 extends keyof Base
>(
  schema: Schema
): TypedSchema<
  Schema['additionalProperties'] extends undefined
    ? Partial<{ [key in keyof Base]: Base[key] }> & { [key in K1]: Base[key] }
    : Partial<{ [key in keyof Base]: Base[key] }> &
        { [key in K1]: Base[key] } &
        Record<string, Additionals>
> => {
  return {
    getSchema: () => ({
      type: 'object',
      properties: Object.entries(schema.properties).reduce(
        (schemaProps, [prop, val]) => ({
          ...schemaProps,
          [prop]: val.getSchema(),
        }),
        {}
      ),
      additionalProperties: schema.additionalProperties
        ? schema.additionalProperties.getSchema()
        : undefined,
    }),
    // tslint:disable-next-line:no-object-literal-type-assertion
    type: {} as Schema['additionalProperties'] extends undefined
      ? Partial<{ [key in keyof Base]: Base[key] }> & { [key in K1]: Base[key] }
      : Partial<{ [key in keyof Base]: Base[key] }> &
          { [key in K1]: Base[key] } &
          Record<string, Additionals>,
  }
}

const z = objectType({
  properties: { str: string() },
  required: ['str'],
  additionalProperties: number(),
})

export { objectType as object }
