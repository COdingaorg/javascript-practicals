let groceries = "cabbage, tomato, onions, tea leaves"//prompt('Enter a your groceries list', 'separate wit comma');
console.log(groceries);
let freshGroceries = groceries.split(",");
console.log(freshGroceries.sort().reverse());

for(i=0; i<freshGroceries.length; i++){
  console.log(freshGroceries[i]);
}
/*
Create a function where users may enter a sentence.
Turn that sentence into an array using the split method.
Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.
Finally, reverse the order of the new array, join it back together into a string, and print it to the console.*/

let sentence = "Mozilla Developer Network JavaScript documentation to research what method might be used to sort arrays." //prompt('enter any sentence');
console.log(sentence);
let sentenceArray = sentence.split(" ");
//console.log(sentenceArray);

for(i=0; i<sentenceArray.length; i++){
  var regex = /^[a-z]{3}/gi;
  var filter = sentenceArray[i].match(regex);
  var reverseSentence;
  if (filter==null || filter==0){}
  else {
    //console.log(filter);
    var newSentence=[];
    newSentence.map(push(filter))
    console.log(newSentence);
}};