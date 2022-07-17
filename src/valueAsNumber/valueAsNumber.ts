/**
 * 引数を数値に変換する関数
 */
export function valueAsNumber(
  value: unknown,
  options?: { defaultValue: number }
): number
export function valueAsNumber(
  value: unknown,
  options?: { defaultValue: undefined }
): undefined
export function valueAsNumber(
  value: unknown,
  options?: { defaultValue: null }
): null
export function valueAsNumber(
  value: unknown,
  options?: {
    defaultValue: number | undefined | null
  }
): number | undefined | null {
  const defaultValue = options?.defaultValue

  if (typeof value === 'string' && value !== '') {
    const replaceValue = value.replace(/,/g, '')
    const parsedValue = Number(replaceValue)
    return isNaN(parsedValue) ? defaultValue : parsedValue
  }

  if (typeof value === 'number') {
    return isNaN(value) ? defaultValue : value
  }

  return defaultValue
}
