//Task 1 declare the following variables:
let username = "Glen";
let isStudent = false;
let totalDebt = 1359;
let age = 50;
let listOfFriends = ["Ben", "Gwen", "Sipho"];
let moreData = {
  mother: "Nomsa",
  father: "Themba",
  employer: "CSIR",
  salary: 130289,
};

//Task 2
username = "glen@gmail.com"; // value is username is now also the gmail and console.log displays that
isStudent = true; // value is isStudent is now "true"
totalDebt = 500; // the value of total debt is now set to 500
age += 1; // this code says the value of age, add 1 to the value

listOfFriends.shift("Ben"); //takes out ben from list of friends
listOfFriends.push("Thuli"); // pushes in a value in the specified array
//listOfFreinds.splice("")              //takes out the the last value in an array
//listOfFriends.unshift("")             //puts in a value at the beginning of the line of an array
//listOfFriends.pop("")                 //takes out the first value in array
moreData.employer = "Innovation Hub "; // in moreData,this code changes the value of the employer key to "innovation Hub"
moreData["salary"] = 182900; // in moreData, this code changes the value of salary key to 182900

//console.log({username,isStudent,totalDebt,age,listOfFreinds,moreData});

// Task 3 :
// 1.statement to check if age is equal to 49 and console.log true if it is.
// 2.Write an if-else statement to check if age is equal to 30, console.log 'age matches' if it is and 'age doesn't match' if it is not.
console.log("kgomotso");
if (age === 49) console.log("true");
else if (age === 30) console.log("age matches");
else if (age > 30) console.log("age doesnt match");
console.log("kgomotso");
//3.if-else statement to check if username is equal to 'Glen' or 'glen@gmail.com', console log the username if any of these two match, on the else block console.log ''username doesn't match.
if (username == "Glen" || username == "glen@gmail.com") console.log(username);
else console.log("usename doesnt match");

//4.if statement if Thuli is in array , console index of thuli
if (listOfFriends.includes("Thuli")) {
  const index = listOfFriends.indexOf("Thuli");
  // console.log(index);
}

//5 Write an if statement to check if there is a Sipho in our array, if there is go ahead and remove him from the array.
//  Otherwise console.log 'Person not found'
const searchString = "Sipho";
const index1 = listOfFriends.indexOf(searchString);
if (index1 !== -1) {
  listOfFriends.splice(index1, 1);
} else console.log("Person not Found");

// 6 Write an if statement to check if the mothers name in our object is 'Nomsa' and console.log the father's name from the object if it is,
// otherwise console.log the employer's name from the same object
console.log("kgomotso");

if (moreData.mother === "Nomsa") {
  const dad = moreData.father;
  console.log("kgomotso");
  console.log(dad);
} else {
  console.log(moreData.employer);
}

/* <!-- All the below points will add onto Task 3:
Create a function that accepts an argument of name, and checks if that  given argument (name) is in our listOfFriends array. Copy and rewrite Task 3.4 for this.
It should be able to check against any given name during the function call
Create a function that accepts an argument of name and uses the given name to remove an item from our listOfFriends array if it exists
Create a function that handles Task 3.7. Just remove the code from the main block to the function and make sure the function is called. -->
<script>   */

function friends(name) {
  console.log(listOfFriends);
  if (listOfFriends.includes(name)) {
    return `${name} is in the list of friends. `;
  }
}
console.log(friends("Thuli"));
