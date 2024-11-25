const fizzbuzz = (number) => {
  if (number % 15 === 0) return "Fizzbuzz"; // Si divisible par 3 et 5 (3 * 5 = 15)
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "buzz";
  return number;
};

module.exports = { fizzbuzz };
