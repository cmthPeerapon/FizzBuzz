import fizzbuzz from "./fizzbuzz"

test('returns FizzBuzz when num is divisible by both 3 and 5', () => {
  expect(fizzbuzz(30)).toBe('FizzBuzz')
})

test('returns Fizz when num is divisible by 3', () => {
  expect(fizzbuzz(6)).toBe('Fizz')
})

test('returns Buzz when num is divisible by 5', () => {
  expect(fizzbuzz(10)).toBe('Buzz')
})

test('returns a string of the given number when num is divisible by neither 3 nor 5', () => {
  expect(fizzbuzz(17)).toBe('17')
})
