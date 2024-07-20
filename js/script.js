"use strict";

//Function declaration

// function footballPlayer (name, age, lastTeam, isMarried) {
//     return { 
//      name: name,
//      age: age,
//      lastTeam: lastTeam,
//      isMarried: isMarried 
//     }
//    }

//   console.log(footballPlayer("Gianluigi Buffon", 46, "Parma", true));
//   console.log(footballPlayer("Zlatan Ibrahimovic", 42, "Associazione Calcio Milan", true));
//   console.log(footballPlayer("Cristiano Ronaldo ", 39, "Al Nassr", false));

//   console.log(a);
//   console.log(b);
//   console.log(c);

//Function expression

// const footballPlayer = function(name, lastTeam) {
//     return {
//         name, lastTeam
//     }
// }
//  console.log(footballPlayer("Gianluigi Buffon", "Parma");
//  console.log(footballPlayer("Zlatan Ibrahimovic", "Associazione Calcio Milan");
//  console.log(footballPlayer("Cristiano Ronaldo ", "Al Nassr");

//switch
// function valid(role){
//     switch (role) {
//         case "admin":
//             return "Welcom back"
//         case "guest":
//             return "Welcom to our website"
//         default:
//             return "Uknown error";
//     }
// }
// console.log(valid("guest"));

 function calc(x, y, operation) {
     switch (operation) {
         case "+":
             return x + y;
         case "-":
             return x - y;
         case "*":
             return x * y;
         case "/":
             if (y === 0) {
                 return "Error: Sorry, but you can't divide by 0";
             } else {
                 return x / y;
             }
         default:
             return " Something went worng ";
     }
 }
 console.log(calc(15, 8, "+"));
 console.log(calc(30, 5, "-"));
 console.log(calc(30, 5, "*"));
 console.log(calc(64, 4, "/"));
 
