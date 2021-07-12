//Tests for reversing a string

function reverse2(text){
	let temp = []
	for(let i = text.length -1; i >=0; i--){
		temp.push(text[i])
	}
	return temp.join("")
}

test('Reverse function exists', () => {
  expect(reverse2).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse2('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse2('  abcd')).toEqual('dcba  ');
});