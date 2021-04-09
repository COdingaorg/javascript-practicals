outer: for (let i=0; 1<3; i++){
  for (let j=0; j<3; j++){
    let input=prompt(`Value at coords (${i}, ${j})`, '');
    if(!input)break outer;
  };
};
alert(`Done`);
for(let i=10; i<=10; i--){
  alert(`Time remaining ${i}`);
  if(i===0)break;
}
alert(`Time is Up!`);