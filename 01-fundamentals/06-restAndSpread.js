const animals = ['horse', 'dog', 'fish'];
const [...otherAnimals] = animals; //this is destructuring from an array


// console.log(firstAnimal);
// console.log(secondAnimal);
// console.log(otherAnimals);




const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };



// console.log(firstName)
// console.log(lastName)
// console.log(addresses)
// console.log(personCopy)

//this is not making a copy because it will just reference the same memory location as person
let anotherPerson = person;

let thirdPerson = anotherPerson;
// console.log("Person first name is " + person.firstName)
// console.log("AnotherPerson first name is " + anotherPerson.firstName)

// // person.firstName = "Damian" //if i just change person.firstname, it will also reflect that change on anotherPerson.firstName 

// console.log("Person first name is " + person.firstName)
// console.log("AnotherPerson first name is " + anotherPerson.firstName)

  

let {...personCopy} = person; //using the spread operator to make a copy of person


console.log("Person first name is " + person.firstName);
console.log("AnotherPerson first name is " + personCopy.firstName);

person.firstName = "Damian";

console.log("Person first name is " + person.firstName);
console.log("AnotherPerson first name is " + personCopy.firstName);

