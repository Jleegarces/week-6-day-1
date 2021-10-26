//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

let findWords = (dog_string,dog_names) => {
    for(i =0; i<dog_names.length; i++) {
    if (dog_string.indexOf(dog_names[i]) !== -1){
        return "Matched dog_name"
    }else {
        console.log("no match")
    }
   }
    
}
console.log(findWords(dog_string,dog_names))
 

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every value that's double is over 50.


*/

given_arr == [13, 22, 26, 40, 1, 10]

let replaceEvens = (arr) =>{

    
}

//Expected output
//Given arr == [13, 22, 26, 40, 1, 10]
//Output arr == [13, 22, 1, 10]
//Explanation: 13*2 < 50, 22*2 < 50, 26*2 > 50, etc...