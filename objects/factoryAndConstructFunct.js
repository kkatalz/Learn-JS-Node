//Factory function
function adrressFactory(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let addressFactory = adrressFactory("Saint Laures, 12", "Kyiv", 1233);
console.log(addressFactory);

// Constructor function
function AddressConstructor(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let addressConstructor1 = new AddressConstructor("b", "b", 12);
let addressConstructor2 = new AddressConstructor("b", "b", 12);
let addressConstructor3 = addressConstructor1;
console.log(addressConstructor1);

// Check equality on Values and Types.
function areEqual(address1, address2) {
  for (let key in address1) {
    if (address1[key] !== address2[key]) return false;
  }
  return true;
}

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(addressConstructor1, addressConstructor2));
console.log(areSame(addressConstructor1, addressConstructor3));
