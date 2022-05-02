var beatles = ['Paul', 'George', 'John', 'Ringo']; //globally scoped because beatles is declared inside this file but not inside of any function or a loop

//functions will create their own scope. if something is declared inside of a function, it is only available inside that function
// function test(){
//     var goat = "Lebron James";
// }

//loops also create their own scope - block scoped unless you declare the variable using "var". If you use "var" to declare the variable inside of a loop/conditional, it will actually be avilable outside the loop/conditional as well



function printNames(names) {

  function actuallyPrintingNames() {
      let index;
      let name;
    for (index = 0; index < names.length; index++) {
      name = names[index];
  
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}



printNames(beatles);



//difference between var vs let vs const

/*

var is limited only by the functional scope
let is limited by functional scope AND block scope (loops and conditionals)
const behaves just like let when it comes to scoping

const is used to declare variables that you dont want any other part of the code to reassign that variable

*/


const daysInWeek = 7;


console.log("Days in a week is: " + daysInWeek)


                     
