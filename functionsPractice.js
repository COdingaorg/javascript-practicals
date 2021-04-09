function userInput(userName, userAge, favoriteFood) {
  let statement = `Your name is ${userName}, ${userAge} years old. and your favorite food is ${favoriteFood}`;
  alert(statement)
}
let userName = prompt('Enter Your Name?');
let userAge = prompt('Enter Your Age');
let favoriteFood = prompt('What is your favorite food?');
if(userName==null){
  alert('cancelled');
}else if(userName==''){
  alert("Please Enter your name");
}else (
  userInput(userName, userAge, favoriteFood));
