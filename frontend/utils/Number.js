export const toInteger = (value, returnZero) => (isNaN(value) ? (returnZero ? 0 : value) : parseInt(Number(value)))
