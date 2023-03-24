export function formatNumber(value: number) {
  let valueString = String(value.toFixed(2))
  valueString = valueString.replace('.', ',')
  return valueString
}
