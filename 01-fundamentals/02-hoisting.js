/*
Hoisting- vars and functions get hoisted to the top of their scope. let and const do not get hoisted.

*/


// console.log(goat)


// const goat = "Michael Jordan";

// goat = "Lebron"

// goat.append(" James")

// console.log(goat)



/*
var goat;
console.log(goat)
goat = "Michael Jordan";

*/

// hello()

// function hello(){
//     console.log("waazzzaaaaaa")
// }


/*
function hello(){
    console.log("waazzzaaaaaa")
}

hello();



*/



console.log(foo)
var foo = "bar"; //global scopeed vvar-> gets hoisted to top
console.log(foo)
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);




/*
var foo;
function magic(){
    var foo;
    foo = "hello world";
    console.log(foo);
}
console.log(foo)
foo = "bar";
console.log(foo)
magic()
console.log(foo);

*/

