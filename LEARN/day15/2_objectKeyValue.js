const obj = {
  name: "rohan",
  height: "175cm",
  weight: "65 Kg",
  ssn: 142077,
  address: "167 plank road"
};

const keyArray = Object.keys(obj);

for (let i = 0; i < keyArray.length; i++) {
   
console.log("key :" + keyArray[i] + "  value :" + obj[keyArray[i]]) //using key as an index to fetch the value
}
