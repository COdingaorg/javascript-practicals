/*var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
function testInfo(phoneInput) {
  var OK = re.exec(phoneInput.value);
  if (!OK) {
    console.error(phoneInput.value + ' isn\'t a phone number with area code!');
  } else {
    console.log('Thanks, your phone number is ' + OK[0]);
  }
} 
*/
var re = /(\d{3})(\-)\0\1\0\1\0/;
function testInfo(phoneImput){
  var ok = re.exec(phoneInput.value);
  if(!ok){
    console.error(phoneInput.value + ' isn\'t a phone number with area code!');
  } else {
    console.log('Thanks, your phone number is ' + OK[0]);
  }
}; 