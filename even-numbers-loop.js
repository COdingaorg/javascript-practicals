/*for(let i=0; i<=10; i++){
  if(i%2==0){
  alert(`Your number ${i}`);
  };
};
let i=0;
while(i<3){
  alert(`number ${i}`);
  i++;
};*/
let num=prompt('Enter a number greater than 100', '');
outer: while(num<100){
  prompt('Enter number greater than 100', '');
  if(num>=100)break outer;
};
alert('Thank you');