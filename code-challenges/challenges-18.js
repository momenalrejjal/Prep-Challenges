'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here

        let position;
        let r;
        let n;
        let s=[]
let st = []
st = str.split(" ")
n = st.length;
console.log(st)
        if(n % 2 == 1) {
            position =n / 2;
            position = Math.floor(position)
        } else {
            position = n / 2 ;
            
        }
       
console.log(position)
        //return str.substring(position, position + length)
        r = st[position]
        console.log(r)
        s=r.split('')
       return s.length;
        
    }


// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
let st1=[]
let st2=[]
let r
  st1= str1.split('')                
  st2= str2.split('') 
st1= st1.sort()
st2= st2.sort()
if(st1.length === st2.length){
for(let i=0; i<st1.length; i++){
if(st1[i] === st2[i]) {
        r= true
} else {
        r = false
        break;
}
}
}else{r=false} 
return r
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };