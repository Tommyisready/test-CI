const fizzbuzz = (number) => {
  if (number % 15 === 0) return "Fizzbuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "buzz";
  return number;
};

module.exports = { fizzbuzz };
