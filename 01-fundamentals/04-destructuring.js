const person1 = { 
        firstName: 'Bob', 
        lastName: 'Marley', 
        email: 'bob@marley.com', 
        password: 'sekureP@ssw0rd9', 
        username: 'barley', 
        createdAt: 1543945177623
    };

    const person2 = { 
        firstName: 'Damian', 
        lastName: 'Marley', 
        email: 'damian@marley.com', 
        password: 'sekureP@ssw0rd9', 
        username: 'barley', 
        createdAt: 1543945177623
    };

    
    
    
    
// let bobsfirstname = person.firstName;
// let bobslastname = person.lastName;
// let bobsEmail = person.email;
let {firstName:bobsFirstName, lastName:bobsLastName, email:bobsEmail} = person1;
// console.log(bobsFirstName, bobsFirstName, bobsLastName)

let {firstName:damiansFirstName, lastName:damiansLastName, email:damiansEmail} = person2;
// console.log(damiansFirstName, damiansFirstName, damiansLastName)

    
    
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];


// let secondAnimal = animals[1];
// let thirdAnimal = animals[2];
// let lastAnimal = animals[4];

let [ ,secondAnimal, thirdAnimal, ,lastAnimal] = animals;

// console.log(secondAnimal, thirdAnimal, lastAnimal);
// console.log(animals)




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


const { addresses:[one,{city, zipcode:zip2}] } = person;

console.log(city2, zipcode)
// console.log(two)


  












    