# utils

普段よく使う便利関数をまとめて npm に公開する

## Install

```shell
$ npm i @hisho/utils
# or
$ yarn add @hisho/utils
```

## Feature

- valueAsBoolean  
  入力を boolean に変換する
- valueAsNumber  
  入力を number に変換する
- valueAsString  
  入力を 文字列 に変換する
- valueAsDate  
  入力を 日付 に変換する

## Usage

### valueAsBoolean

```ts
import { valueAsBoolean } from '@hisho/utils'

const value1 = valueAsBoolean('true') //true
const value2 = valueAsBoolean('false') //false
const value3 = valueAsBoolean(true) //true
const value4 = valueAsBoolean(false) //false
const value5 = valueAsBoolean('') //undefined
const value6 = valueAsBoolean(null) //undefined
```

### valueAsNumber

```ts
import { valueAsNumber } from '@hisho/utils'

const value1 = valueAsNumber('1000') //1000
const value2 = valueAsNumber('1,000') //1000
const value3 = valueAsNumber('5e3') //5000
const value4 = valueAsNumber(1000) //1000
const value5 = valueAsNumber(Nan) //undefined
const value6 = valueAsNumber('') //undefined
const value7 = valueAsNumber(null) //undefined
```

### valueAsString

```ts
import { valueAsString } from '@hisho/utils'

const value1 = valueAsString('string') //'string'
const value3 = valueAsString(true) //'true'
const value4 = valueAsString(false) //'false'
const value5 = valueAsString(1000) //'1000'
const value6 = valueAsString('') //undefined
const value7 = valueAsString(null) //undefined
```

### valueAsDate

```ts
import { valueAsDate } from '@hisho/utils'

const value1 = valueAsDate(new Date('2022-01-01')) //'2022-01-01T00:00:00.000Z'
const value2 = valueAsDate('2022') //'2022-01-01T00:00:00.000Z'
const value3 = valueAsDate(true) //undefined
const value4 = valueAsDate(false) //undefined
const value5 = valueAsDate('') //undefined
const value6 = valueAsDate(null) //undefined
```

## How to Contribute

```shell
$ git clone git@github.com:hisho/utils.git
```

```shell
$ yarn
```

```shell
$ yarn test
```
