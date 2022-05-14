
function palindromeOrNot(word){

let word2 = "";

for (let i=word.length;i!==0;i--){
    word2 += word[i-1];
}

(word2===word) ? console.log("Palindrome") : console.log("Not palindrome");

}

palindromeOrNot("vijay");
palindromeOrNot("ere");