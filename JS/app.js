'use strict'
let user = prompt("Please enter your name:");
console.log(user);

let gender = prompt("Please enter your gender (male or female):");
if(gender == "male"){
    console.log(gender);
}
else if(gender == "female"){
    console.log(gender);
}
else{
    prompt("Please just enter (male or female):");
}

let age = prompt("Please enter your age:");
if (age <= 0) {
  alert("Please enter a positive integer value for age");
}

let skip = confirm("Do you wants to skip the welcoming message ?");

if (!skip) {
  if (gender == "male") {
    alert("Welcome Mr " + user);
  } else if (gender == "female") {
    alert("Welcome Ms " + user);
  } else {
    alert("Welcome " + user);
  }
}


let answer = [];

function questions (question) {
  let input = prompt(question);
  if (input == null || input == "") {
    answer.push("invalid");
  } else if(input == "yes" || input == "no"){
    answer.push(input);
  } else {
      answer.push("invalid");
    }
  }


questions("Do you want follow up questions (yes/no)?");

questions("Do you have a bank account (yes/no)?");

questions("Do you prefer to work at home (yes/no)?");
console.log(answer);

