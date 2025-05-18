export function toQueryParamsClean(obj: Record<string, any>): Record<string, string> {
    const result: Record<string, string> = {}
  
    Object.entries(obj).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        result[key] = String(value)
      }
    })
  
    return result
  }
  