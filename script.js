//your JS code here. If required.
let givenString = prompt("Enter a string: ");
let character = null
function firstNonRepeatingCharacter(string) {
	for(let i = 0;i<string.length;i++){
		
		if(string.indexOf(string[i])==i){
			 character = string[i];
			return;
			
		}
	}	
}
firstNonRepeatingCharacter(givenString);
alert(character);