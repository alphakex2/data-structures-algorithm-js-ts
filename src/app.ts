//Using Array
function reverse(text: string){
	let temp = []
	for(let i = text.length -1; i >=0; i--){
		temp.push(text[i])
	}
	return temp.join("")
}
//using Array helper reverse
function reverseUsingHelper(text: string){
	return text.split("").reverse().join("")
}
//Without an array
function reverseWithoutArray(text: string){
	let temp = ""
	
	for(let i = text.length - 1; i>=0; i--){
		temp += text[i]
	}
	return temp
}
//Without an array 2
function reverseWithoutArray2(text: string){
	let temp = ""
	for(let char of text){
		temp = char + temp
	}
	return temp 
}
//Using reduce helper
function reverseUsingReduce(text: string){
	return text.split("").reduce((reversed, character) => character + reversed, '')
}


console.log(reverse('Kenny'))