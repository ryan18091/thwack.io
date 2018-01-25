/*var name = "Ryan";
console.log(name);

var lastName = "Erickson";
console.log(lastName);

var age = 29
console.log(age);

var fullAge = true
console.log(fullAge);
*/

/*
var name = 'John';
var age = 26

//Type Coercion is to automatically convert data types to other data types
console.log(name + age);
console.log(age + age);

var job, isMarried;

console.log(job);

job = 'Teacher';
isMarried = true;

console.log(name + ' is a  ' + age + ' years old ' + job + '. Is he Married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';
isMarried  = false;

console.log(name + ' is a  ' + age + ' years old ' + job + '. Is he Married? ' + isMarried + '.');


var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a  ' + age + ' years old ' + job + '. Is he Married? ' + isMarried + '.' + lastName)
*/

//Lecture Operators   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 /*var birthYear = 2018 - 29;

 birthYear = 2018 - 29 * 2;

 console.log(birthYear);

 var ageJohn = (3 + 5) * 4 - 6;
 console.log(ageJohn);
*/




 //if/else statements (control structure)

/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
    console.log(name + ' is married.');
} else {
    console.log(name + ' will hopefully marry soon.');
}

isMarried = false;

if(isMarried) {
    console.log('Yes!');
} else {
    console.log('No');
}
*/




//Lecture: Boolean logic and switch
/*
var age = 23

if (age < 20) {
    console.log('John is a teenager');
} else if (age > 20 && age < 30) {
    console.log('John is an adult');
}
else {
    console.log('John is a man');
}

var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab.');
        break;
    case 'cop':
        console.log('John is a police officer.');
        break;
    default:
        console.log('John does something else.');

}

// AND(&&)
//or (||)
// NOT (!)
*/


///// Coding Challenge 1
/*
johnHeight = prompt('John, what is your height in cm?');
johnAge = prompt('John, What is your age?');
friendHeight = prompt('Friend, what is your height in cm?');
friendAge = prompt('friend, What is your age?');

johnScore = (johnAge * 5) + johnHeight;
friendScore = (friendAge * 5) + friendHeight;

if (johnScore > friendScore) {
    console.log('John Wins with a score of ' + johnScore + ' over ' + friendScore);
} else if (friendScore > johnScore) {
        console.log('Friend Wins with a score of ' + friendScore + ' over ' + johnScore);
} else {
    console.log('There was a tie!')
}
*/

//////    Functions

/*function calculateAGE(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}

var ageRyan = calculateAGE(1988);
var ageAllison = calculateAGE(1987);

console.log(ageRyan);
console.log(ageAllison)


function yearUntilRet(name, yearOfBirth) {
    var age = calculateAGE(yearOfBirth);
    var retirement = 65 - age
    console.log(retirement)
}

yearUntilRet("Ryan", 1988)
*/

////// Statements and Expressions
/*
function someFuntion(par) {
    //code
}

//expression produces a value/ outcome
var someFun = function(par) {

}

3 + 4
var x = 3

//Statements just perform an action there is nothing to store a value or produce one
if (x === 5) {
    //do something
}
*/


///////// Arrays

//javascript is 0 based
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);
console.log(names[0])
names[1] = 'Ben'
console.log(names)

var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue');
john.unshift('Mr'); // Adds an elements to the beginning of the array
john.pop(); //removes and returns the last element of the array
john.shift(); // removes from the beginning
john.indexOf(john); // returns the index of the given element
console.log(john);

if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher.');
}
*/

////////////////////////////////////////////////////////
/////////// Objects

/* v1.0
// object literal
var john = {
    name: 'John',
    age: 29,
    occupation: 'teacher'
}

//dot notion
console.log(john.occupation);
//using the key
console.log(john['occupation']);

var xyz = 'occupation';
console.log(john[xyz]);

//change items in an object
john.age = 89;
john.occupation = 'cop';

console.log(john.occupation);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;

console.log(jane.yearOfBirth)
*/

//objects can other objects, arrays or functions within them
/*
var john = {
    name: 'John',
    occupation: 'teacher',
    yearOfBirth: 1989,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(yearOfBirth) {
        //return 2016 - yearOfBirth;
        this.age = 2016 - this.yearOfBirth;
    }
};

console.log(john.calculateAge(1988));
console.log(john.family[2]);
console.log(john.age);
*/

////////////////////////////////////////////////
//// Loops
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}


var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
*/

///////////// for loops
/*
for (var i = 0; i < 5; i++) {
    console.log(names[i]);
}

for (var i = names.length; i < names.length; i--) {
    console.log(names[i]);
}
*/


////////////// While Loops
/*
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

//////////////break

for (var i = 0; i < 6; i++) {
    console.log(i);
    if (i === 3) {
        break
    }
}
*/

/*
for (var i = 0; i < 6; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
*/

///////////////////Coding Challenge 2



var birthYears = [2007, 2005, 2003, 1990, 1989, 1988, 1987, 1986];
var emptyArray = [];

for (var i = 0; i <= birthYears.length - 1; i++) {
    console.log(i);
    emptyArray.unshift(birthYears[i]);
}
console.log(emptyArray);


for (var i = 0; i <= emptyArray.length - 1; i++) {
    var age = 2018 - emptyArray[i];
    if (age >= 18) {
        console.log(age + ' older than 18');
    } else {
        console.log(age + ' Younger than 18');
    }
}


var input = [];
var output = [];
function printFullAge (emptyArray, input, output) {
    var age = 2018;
    for (var i = 0; i <= emptyArray.length - 1; i++) {
        input.unshift(emptyArray[i]);
    }

    for (var i = 0; i <= input.length - 1; i++) {
        if ((age - input[i]) >= 18) {
            output.unshift(true);
        } else {
            output.unshift(false);
        }
    }
}
console.log(emptyArray);
printFullAge(emptyArray, input,output);
console.log(input);
console.log(output);
