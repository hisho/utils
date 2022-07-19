import { valueAsString } from './valueAsString'

const patterns = [
  {
    name: '正常パターンを検証',
    tests: [
      {
        name: '0の場合"0"を返す',
        value: 0,
        toEqual: '0',
        options: undefined,
      },
      {
        name: '1の場合"1"を返す',
        value: 1,
        toEqual: '1',
        options: undefined,
      },
      {
        name: '-1の場合"-1"を返す',
        value: -1,
        toEqual: '-1',
        options: undefined,
      },
      {
        name: '"1000"の場合"1000"を返す',
        value: '1000',
        toEqual: '1000',
        options: undefined,
      },
      {
        name: '"5e3"の場合"5e3"を返す',
        value: '5e3',
        toEqual: '5e3',
        options: undefined,
      },
      {
        name: 'カンマ付きの場合を"1,000"返す',
        value: '1,000',
        toEqual: '1,000',
        options: undefined,
      },
      {
        name: '"text"の場合"text"を返す',
        value: 'text',
        toEqual: 'text',
        options: undefined,
      },
      {
        name: 'trueの場合"true"を返す',
        value: true,
        toEqual: 'true',
        options: undefined,
      },
      {
        name: 'falseの場合"false"を返す',
        value: false,
        toEqual: 'false',
        options: undefined,
      },
      {
        name: 'Infinityの場合"Infinity"を返す',
        value: Infinity,
        toEqual: 'Infinity',
        options: undefined,
      },
    ],
  },
  {
    name: '不正パターンを検証',
    tests: [
      {
        name: 'NaNの場合undefinedを返す',
        value: NaN,
        toEqual: undefined,
        options: undefined,
      },
      {
        name: '""の場合undefinedを返す',
        value: '',
        toEqual: undefined,
        options: undefined,
      },
      {
        name: 'undefinedの場合undefinedを返す',
        value: undefined,
        toEqual: undefined,
        options: undefined,
      },
      {
        name: 'nullの場合undefinedを返す',
        value: null,
        toEqual: undefined,
        options: undefined,
      },
    ],
  },
]

describe('valueAsString', () => {
  patterns.forEach((pattern) => {
    describe(pattern.name, () => {
      pattern.tests.forEach(({ name, value, toEqual }) => {
        test(name, () => {
          expect(valueAsString(value)).toEqual(toEqual)
        })
      })
    })
  })
  describe('オプションを検証', () => {
    test('optionsのdefaultValueを1に変更', () => {
      expect(
        valueAsString(undefined, { defaultValue: 'defaultValue' })
      ).toEqual('defaultValue')
    })
    test('optionsのdefaultValueをundefinedに変更', () => {
      expect(valueAsString(undefined, { defaultValue: undefined })).toEqual(
        undefined
      )
    })
    test('optionsのdefaultValueをnullに変更', () => {
      expect(valueAsString(undefined, { defaultValue: null })).toEqual(null)
    })
  })
})
