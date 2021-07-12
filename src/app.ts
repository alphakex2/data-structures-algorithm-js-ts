//Palindrome
//Check if reversed word is same as word not reversed

function palindrome(text: string){
	let reverse = ""
	for(let char of text){
		reverse = char + reverse
	}
	if(reverse === text) return true

	return false
}

//Solution 2 using every array method...Not ideal
function palindrome2(text: string){
	return text.split("").every((char, idx) => char === text[text.length - idx - 1])
}