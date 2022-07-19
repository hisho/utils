/**
 * @see https://zenn.dev/lollipop_onl/articles/eoz-judge-js-invalid-date
 */
const isInvalidDate = (date: Date) => Number.isNaN(date.getTime())
/**
 * 引数を日付に変換する関数
 */
export function valueAsDate(
  value: unknown,
  options?: { defaultValue: Date }
): Date
export function valueAsDate(
  value: unknown,
  options?: { defaultValue: undefined }
): undefined
export function valueAsDate(
  value: unknown,
  options?: { defaultValue: null }
): null
export function valueAsDate(
  value: unknown,
  options?: {
    defaultValue: Date | undefined | null
  }
): Date | undefined | null {
  const defaultValue = options?.defaultValue
  if (value instanceof Date) {
    if (isInvalidDate(value)) {
      return defaultValue
    }
    return value
  }
  //timestampも対象にする場合はnumberもいれる
  if (typeof value === 'string') {
    const date = new Date(value)
    if (isInvalidDate(date)) {
      return defaultValue
    }
    return date
  }
  return defaultValue
}
