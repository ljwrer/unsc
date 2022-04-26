export const parseParams = (params: Record<string, unknown>) => {
  const record: Record<string, string> = {}
  for (const [key, val] of Object.entries(params)) {
    record[key] = decodeURIComponent(val as string)
  }
  return record
}
