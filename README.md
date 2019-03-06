# tson-schema

This project aims to bring you an easy way to create json-schemas and TypeScript types using a single API. This API is kept as close as possible to json-schema so you don't have to worry about learning yet another API. Support for new json-schema versions and new TypeScript versions is added on a best effort basis.

__This is a work in progress! Known missing json-schema features include:__

- `array.additionalItems`
- `object.additionalProperties`
- `$ref`
- JSON-Schema `anyOf`/`oneOf`
- JSON-Schema conditional schemas (`if`/`else`)
- Limited TypeScript support for:
   - big tuples
   - objects with lots of required properties
   - big enums

## Installing

```
npm install -S tson-schema
```

Or

```
yarn add tson-schema
```

## Usage

```ts
import * as t from 'tson-schema'

/**
 * Array
 */
const numberArraySchema = t.array({
  items: t.number({
    minimum: 1
  }),
  minItems: 2,
  uniqueItems: true
})

numberArraySchema.getSchema() // { type: 'array', items: { type: 'number', minimum: 1 }, minItems: 2, uniqueItems: true }
numberArraySchema.type        // number[]

/**
 * Object
 */
const objectSchema = t.object({
  properties: {
    req: t.string(),
    opt: t.tuple({
      items: [t.integer()]
    })
  },
  required: ['req']
})

objectSchema.getSchema() // { type: 'object', properties: { req: { type: 'string' }, opt: { type: 'array', items: [{ type: 'integer' }] } }, required: ['req'] }
objectSchema.type        // { req: 'string', opt?: [number] }

/**
 * Enum
 */
const enumSchema = t.enum({
  enum: ['A', 2, 'C', 4]
})

enumSchema.getSchema() // { enum: ['A', 2, 'C', 4] }
enumSchema.type        // 'A' | 2 | 'C' | 4
```
