const findTheOldest = function(arr) {
  let oldest = 0;
  let person = 0;
  const currentYear = new Date().getFullYear();
  for(let i = 0; i < arr.length; i++){
    if(arr[i].hasOwnProperty("yearOfDeath")){
      let temp = arr[i].yearOfDeath - arr[i].yearOfBirth;
      if(temp > oldest){
        person = i;
        oldest = temp;
      }
    }else{
      let temp = currentYear - arr[i].yearOfBirth;
      if(temp > oldest){
        person = i;
        oldest = temp;
      }
    }
  }
  return arr[person];
};

// Do not edit below this line
module.exports = findTheOldest;
