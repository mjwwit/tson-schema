# tson-schema

This project aims to bring you an easy way to create json-schemas and TypeScript types using a single API. This API is kept as close as possible to json-schema so you don't have to worry about learning yet another API. Support for new json-schema versions and new TypeScript versions is added on a best effort basis.

__This is a work in progress! Known missing json-schema features include:__

- `enum` functionality
- `array.additionalItems`
- `object.additionalProperties`
- `$ref`
- Limited TypeScript support for big tuples and objects with lots of required properties

## Installing

```
npm install -S ts-json-schema
```

Or

```
yarn add ts-json-schema
```

## Usage

```ts
import * as s from 'ts-json-schema'

/**
 * Array
 */
const numberArraySchema = s.Array({
  items: s.Number({
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
const objectSchema = s.Obj({
  properties: {
    req: s.String(),
    opt: s.Tuple({
      items: [s.Integer()]
    })
  },
  required: ['req']
})

objectSchema.getSchema() // { type: 'object', properties: { req: { type: 'string' }, opt: { type: 'array', items: [{ type: 'integer' }] } }, required: ['req'] }
objectSchema.type        // { req: 'string', opt?: [number] }
```
