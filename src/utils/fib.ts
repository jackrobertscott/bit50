/**
 * Calculate the sum of Fibonacci numbers.
 * If multiple arguments are passed, positive numbers add to the sum, while negative numbers subtract from the sum.
 *
 * @param {...number[]} numbers - The Fibonacci sequence positions to sum, subtract, or retrieve.
 * @returns {number} The sum, difference, or the Fibonacci number based on the number of arguments.
 */
export function fib(...numbers: number[]): number {
  let sum: number = 0
  let a: number
  let b: number
  let temp: number

  const fibonacci = (n: number): number => {
    a = 0
    b = 1

    for (let i = 0; i < n; i++) {
      temp = a
      a = b
      b = temp + b
    }

    return a
  }

  for (const n of numbers) {
    const fibValue: number = fibonacci(Math.abs(n))
    sum += n > 0 ? fibValue : -fibValue
  }

  return sum
}
