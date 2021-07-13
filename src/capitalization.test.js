function capitalize(sentence) {
  let result
  return sentence
    .split(" ")
    .map(
      (word) => word[0].toUpperCase() + word.substring(1, word.length)
    )
    .join(" ")
}


test('Capitalize is a function', () => {
  expect(typeof capitalize).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalize('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
});

test('capitalizes the first letter', () => {
  expect(capitalize('i love breakfast at bill miller bbq')).toEqual(
    'I Love Breakfast At Bill Miller Bbq'
  );
});