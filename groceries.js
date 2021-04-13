let groceries = "cabbage, tomato, onions, tea leaves"//prompt('Enter a your groceries list', 'separate wit comma');
console.log(groceries);
let freshGroceries = groceries.split(",");
console.log(freshGroceries.sort().reverse());

for(i=0; i<freshGroceries.length; i++){
  console.log(freshGroceries[i]);
}