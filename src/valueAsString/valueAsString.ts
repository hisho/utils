/**
 * 引数を文字列に変換する関数
 */
export function valueAsString(
  value: unknown,
  options?: { defaultValue: string }
): string

export function valueAsString(
  value: unknown,
  options?: { defaultValue: undefined }
): undefined

export function valueAsString(
  value: unknown,
  options?: { defaultValue: null }
): null

export function valueAsString(
  value: unknown,
  options?: {
    defaultValue: string | undefined | null
  }
): string | undefined | null {
  const defaultValue = options?.defaultValue
  if (typeof value === 'string') {
    if (value === '') {
      return defaultValue
    }
    return value
  }
  if (typeof value === 'number') {
    if (isNaN(value)) return defaultValue
    return `${value}`
  }
  if (typeof value === 'boolean') {
    return `${value}`
  }
  return defaultValue
}
