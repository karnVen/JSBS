const user = {
    name : "dkkd",
    ssn: 433,
    address: {
        zepode: 3433,
        "street number ": "dkljfdkld"
    }
};

console.log(user.address["street number"]); 
console.log(user.address.zepode);           
console.log(user.ssn);                     
const user2 = Object.assign({}, user);
user2.name = "ryan ";
user2.ssn = 378463;
