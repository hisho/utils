/**
 * 引数を真偽に変換する関数
 */
export function valueAsBoolean(
  value: unknown,
  options?: {
    defaultValue: boolean
  }
): boolean
export function valueAsBoolean(
  value: unknown,
  options?: {
    defaultValue: undefined
  }
): boolean
export function valueAsBoolean(
  value: unknown,
  options?: {
    defaultValue: null
  }
): null
export function valueAsBoolean(
  value: unknown,
  options?: {
    defaultValue: boolean | undefined | null
  }
): boolean | undefined | null {
  const defaultValue = options?.defaultValue
  if (typeof value === 'string') {
    if (value === 'true') {
      return true
    }
    if (value === 'false') {
      return false
    }
  } else if (typeof value === 'boolean') {
    return value
  }
  return defaultValue
}
