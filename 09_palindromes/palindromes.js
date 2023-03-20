const palindromes = function (arg) {
  let str = arg.toLowerCase().replace(/[^a-z]/g, "");
  let reverse = "";
  for(let i = str.length -1; i >= 0; i--){
    reverse += str[i];
  }
  if(str == reverse) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
