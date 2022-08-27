function isPalindrome(word) {
  // Write your algorithm here
  function reverse(word) {
    const wordArray = word.split("");
    const reversedWordArray = wordArray.reverse();
    const reversedWord = reversedWordArray.join("");
    return reversedWord;
  }
  
  function isPalindrome(word) {
    // Write your algorithm here
    const reversedWord = reverse(word)
    if(word === reversedWord){
      return true;
    }else{
      return false;
    }
    return reversedWord
  }
  
  /* 
    Add your pseudocode here
    function that return reversed word
    conditional statement that check if the word is the same as the reversed
  */
  
  /*
    Add written explanation of your solution here
    i need to write a function that returns a string in a reversed order
    i need to check if the reversed string is same the passed strng, i return true.
  */
  
  // You can run `node index.js` to view these console logs
  
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
