//// DRY CODE DONT REPEAT YOUR CODE /////

/*
EXAMPLE INCLUDE

WRTING CONSOLE.(LOG) FOR A SINGLE PROCESS MULTIPLE TIMES
E.H
console.log(1)
 console.log(2)
 console.log(3)
 console.log(4)
 console.log(5)
 console.log(10)

*/

// if (bobby > onyeka) {
//     alert("FUCK YOU");
// }

// else if (onyeka < bobby) {
//     alert("fuck your mama");

// }

// else {
//     alert("Onyeka is Awsome");
// }



///  WHILE LOOPS /////

/*

WHILE LOOPS KEEPS REPEATING THE CODE AS LONG AS THE CONDITION ITS SET TO REMAINS TRUE

*/

// USING WHILE LOOPS TO LOOP THROUGH NUMBERS 

var count = 1

while (count < 6) {
    console.log("count is:" + count);
    count++;
}

// COUNTS FROM 1-6 AND STOPS ///

var count = 5

while (count <= 20) {
    console.log("count is:" + count);
    count+=2;
}

// COUNTS FROM  COUNTS FROM 5 BUT ADDS 2 TO 5//


/*
 USING WHILE LOOPS TO LOOP THROUGH CHARACTERS MAKING USE OF WHILE LOOPS TO LOOP THROUGH 
 CHARACTERS INSTEAD OF NUMBERS 





*/

var str = 'hello'

var count =  0

while (count < str.length) {
    console.log(str[count]);
    count++;
}


// INFINITE LOOP //

// WHEN THE CONDION WE PROVIDE IS NEVER FALSE //


// ALWAYS INCREMENT COUNT ///
 

var count = 19

while ( count < 10) {
    console.log("count is:" - count);
    count--;
}