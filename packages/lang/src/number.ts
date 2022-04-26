export const isNumeric = (value: unknown) => {
  return (
    (typeof value === 'number' || typeof value === 'string') &&
    !Number.isNaN(Number(value))
  )
}
