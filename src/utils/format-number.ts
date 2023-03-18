export function formatNumber(value: number) {
  let valueString = String(value)
  if (valueString.includes('.')) {
    valueString = valueString.replace('.', ',')

    const valueSplitted = valueString.split(',')
    valueString =
      valueSplitted[1].length > 1
        ? valueString
        : valueString.padEnd(valueString.length + 1, '0')
  } else {
    valueString = `${valueString},`
    valueString = valueString.padEnd(valueString.length + 2, '0')
  }
  return valueString
}
