const getFizzBuzzString = (index: number) => {
  if (index % 3 === 0 && index % 5 === 0) {
    return "FizzBuzz"
  } else if (index % 3 === 0) {
    return "Fizz"
  } else if (index % 5 === 0) {
    return "Buzz"
  } else {
    return index
  }
}

const sequence = (start: number, end: number): number[] => {
  const result: number[] = [];
  for (let index = start; index <= end; index++) {
    result.push(index);
  }
  return result;
}

for (const index of sequence(1, 100)) {
  const message = getFizzBuzzString(index);
  console.log(message);
}
