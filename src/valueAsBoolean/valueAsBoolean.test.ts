import { valueAsBoolean } from './valueAsBoolean'

const patterns = [
  {
    name: '正常パターンを検証',
    tests: [
      {
        name: 'trueの場合trueを返す',
        value: true,
        toEqual: true,
        options: undefined,
      },
      {
        name: 'falseの場合falseを返す',
        value: false,
        toEqual: false,
        options: undefined,
      },
      {
        name: '"true"の場合trueを返す',
        value: 'true',
        toEqual: true,
        options: undefined,
      },
      {
        name: '"false"の場合falseを返す',
        value: 'false',
        toEqual: false,
        options: undefined,
      },
    ],
  },
  {
    name: '不正パターンを検証',
    tests: [
      {
        name: '"5e3"の場合undefinedを返す',
        value: '5e3',
        toEqual: undefined,
        options: undefined,
      },
      {
        name: 'カンマ付きの場合をundefined返す',
        value: '1,000',
        toEqual: undefined,
        options: undefined,
      },
      {
        name: '"text"の場合undefinedを返す',
        value: 'text',
        toEqual: undefined,
        options: undefined,
      },
      {
        name: 'Infinityの場合undefinedを返す',
        value: Infinity,
        toEqual: undefined,
        options: undefined,
      },
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

describe('valueAsBoolean', () => {
  patterns.forEach((pattern) => {
    describe(pattern.name, () => {
      pattern.tests.forEach(({ name, value, toEqual }) => {
        test(name, () => {
          expect(valueAsBoolean(value)).toEqual(toEqual)
        })
      })
    })
  })
  describe('オプションを検証', () => {
    test('optionsのdefaultValueをtrueに変更', () => {
      expect(valueAsBoolean(undefined, { defaultValue: true })).toEqual(true)
    })
    test('optionsのdefaultValueをfalseに変更', () => {
      expect(valueAsBoolean(undefined, { defaultValue: false })).toEqual(false)
    })
    test('optionsのdefaultValueをundefinedに変更', () => {
      expect(valueAsBoolean(undefined, { defaultValue: undefined })).toEqual(
        undefined
      )
    })
    test('optionsのdefaultValueをnullに変更', () => {
      expect(valueAsBoolean(undefined, { defaultValue: null })).toEqual(null)
    })
  })
})
