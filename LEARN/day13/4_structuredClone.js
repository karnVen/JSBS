// structuredClone makes totally separate and different copies

const user1 = {
  name: "yuan",
  ssn: 12456,
  // address property is a nested object
  address: {
    zipcode: 789990,
    "street number": "7-plank street"
  }
};

const user2 = structuredClone(user1);

console.log(user1, user2);

// Modify properties on user2
user2.name = "huyan";
user2.address.zipcode = 878887;

console.log(user1, user2);
