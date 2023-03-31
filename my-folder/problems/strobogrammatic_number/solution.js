/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
  let strobo_numbers = {
    '0': '0',
    '1': '1',
    '8': '8',
    '6': '9',
    '9': '6',
  }

// if length of num = 1 and if its 0,1 or 8 return true
  if(num.length === 1) return [0,1,8].includes(parseInt(num));
  else{
     //if length of num is greater than 1
    let pointerFromStart = 0, pointerFromEnd = num.length - 1;
    while(pointerFromStart <= pointerFromEnd){
      // if num pointer from start is key in strobo_numbers and value of that key is in num at pointer from End then its a strobo_number so far
      if(num[pointerFromStart] in strobo_numbers && strobo_numbers[num[pointerFromStart]] == num[pointerFromEnd] ){
      pointerFromStart++;
      pointerFromEnd--;
      }
      else return false;
    }
    return true;
  }

};