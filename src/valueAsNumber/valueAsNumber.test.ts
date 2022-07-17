import { valueAsNumber } from './valueAsNumber'

const patterns = [
  {
    name: '正常パターンを検証',
    tests: [
      {
        name: '0の場合0を返す',
        value: 0,
        toEqual: 0,
        options: undefined,
      },
      {
        name: '1の場合1を返す',
        value: 1,
        toEqual: 1,
        options: undefined,
      },
      {
        name: '-1の場合-1を返す',
        value: -1,
        toEqual: -1,
        options: undefined,
      },
      {
        name: 'NaNの場合undefinedを返す',
        value: NaN,
        toEqual: undefined,
        options: undefined,
      },
      {
        name: 'Infinityの場合undefinedを返す',
        value: Infinity,
        toEqual: Infinity,
        options: undefined,
      },
      {
        name: '"1000"の場合1000を返す',
        value: '1000',
        toEqual: 1000,
        options: undefined,
      },
      {
        name: '"5e3"の場合5000を返す',
        value: '5e3',
        toEqual: 5000,
        options: undefined,
      },
      {
        name: 'カンマ付きの場合カンマを外す',
        value: '1,000',
        toEqual: 1000,
        options: undefined,
      },
    ],
  },
  {
    name: '不正パターンを検証',
    tests: [
      {
        name: '"text"の場合undefinedを返す',
        value: 'text',
        toEqual: undefined,
        options: undefined,
      },
      {
        name: 'trueの場合undefinedを返す',
        value: true,
        toEqual: undefined,
        options: undefined,
      },
      {
        name: 'falseの場合undefinedを返す',
        value: false,
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

describe('valueAsNumber', () => {
  patterns.forEach((pattern) => {
    describe(pattern.name, () => {
      pattern.tests.forEach(({ name, value, toEqual }) => {
        test(name, () => {
          expect(valueAsNumber(value)).toEqual(toEqual)
        })
      })
    })
  })
  describe('オプションを検証', () => {
    test('optionsのdefaultValueを1に変更', () => {
      expect(valueAsNumber(undefined, { defaultValue: 1 })).toEqual(1)
    })
    test('optionsのdefaultValueを0に変更', () => {
      expect(valueAsNumber(undefined, { defaultValue: 0 })).toEqual(0)
    })
    test('optionsのdefaultValueを-1に変更', () => {
      expect(valueAsNumber(undefined, { defaultValue: -1 })).toEqual(-1)
    })
    test('optionsのdefaultValueをNaNに変更', () => {
      expect(valueAsNumber(undefined, { defaultValue: NaN })).toEqual(NaN)
    })
    test('optionsのdefaultValueをundefinedに変更', () => {
      expect(valueAsNumber(undefined, { defaultValue: undefined })).toEqual(
        undefined
      )
    })
    test('optionsのdefaultValueをnullに変更', () => {
      expect(valueAsNumber(undefined, { defaultValue: null })).toEqual(null)
    })
  })
})
