// TASK 1 

// 1. Declare the following
// a variable called username and set it to 'Glen' (string) eg let username = "Glen" 
// a variable called isStudent and set it to false (note: this is just a boolean, not string)
// a variable called totalDebts and set it to 1359 (integer)
// a variable called age and set it to 50 (integer)
// a variable called listOfFriends and add 'Ben', 'Gwen' and 'Sipho' to the list (friends' names are strings)
// a variable called moreData (this will be an object) and add the following in the object: mother = 'Nomsa', father = 'Themba', employer = 'CSIR', and salary = 130289. You might research objects for this, but what's on the left of the equal sign is a key (also called property name), and on the right is a value (also called a property value).
// 2. Log all the variables. We are not using any functions just going straight to console.log

let username =  "Glen";
let isStudent = false
let totalDebts = 1359
let age = 50
let listOfFriends = ["Ben" , "Gwen" , "Sipho"];
let moreData = { mother : "Nomsa",
                 father : "Themba",
                 employer : "CSIR",
                 salary : 130289 };

//  2. Log all the variables. We are not using any functions just going straight to console.log
//console.log(moreData)

// TASK 2

// Task two is just an addition to Task one above. In this task we will be updating the previous variables we added. So just underneath the code you added in Task 1, add a Line Break (Enter btn) twice, and then add as the instructions state.
// Update the username eg username = 'glen@gmail.com' , since we are updating we are not using the let keyword, just calling the variable and setting to something different.
// Update isStudent to true (boolean)
// set totalDebts to 500 (integer)
// Update age to 51
// On list of friends remove 'Ben' and add 'Thuli' (You might need to search how to update, add or remove an array. Switch the keywords how you wish and use the ones that apply to the problem)
// On our moreData object we are going to update employer to 'Innovation Hub', and salary to 182900. Please check how to update and object for this.
// Console log every single variable. Do not remove the console log we added in Task 1

username += "glen@gmail.com"
isStudent = true
totalDebts = 500
age += 1

listOfFriends.shift("Ben")
listOfFriends.push("Thuli")

moreData.employer = "Innovation Hub "; 
moreData.salary = 182900 ;   
//console.log();        


// TASK3

// Task three will focus on conditionals. Conditionals basically deal with checking if a variable matches a condition and then running code after. Eg if salary is less than 90000, call a function called remindToBudget. They come in the form of if statements, if-else statements, ternary operators and switch statements. We will be using the variables from Task 1 and 2 for this task.
// Write an if statement to check if age is equal to 49 and console.log true if it is. eg if(age === 49) { console.log(true) }  the triple === is how we check if something equals to something else, the double == also works but it doesn't check for same data type so if(100 == "100") would be true.
// Write an if-else statement to check if age is equal to 30, console.log 'age matches' if it is and 'age doesn't match' if it is not.
// Write an if-else statement to check if username is equal to 'Glen' or 'glen@gmail.com', console log the username if any of these two match, on the else block console.log ''username doesn't match.
// Write an if statement to check if there is a 'Thuli' in our array. Console.log the index of 'Thuli' if there is.
// Write an if statement to check if there is a Sipho in our array, if there is go ahead and remove him from the array. Otherwise console.log 'Person not found'
// Write an if statement to check if the mothers name in our object is 'Nomsa' and console.log the father's name from the object if it is, otherwise console.log the employer's name from the same object
// Check if salary is greater than 70000.
// If True: add the mother and fathers name to the listOfFriends array, after adding the mother and father console log the indexes of their names in the new array.
// Else add the listOfFriends array to the moreData object. The key for the array in the object should be 'friends'.  You might want to research keys and values in objects for this.


if(age === 49)
     console.log("true")
else if (age === 30)
     console.log("age matches")
else if (age > 30)
     console.log("age doesnt match")

//  Write an if-else statement to check if username is equal to 'Glen' or 'glen@gmail.com', console log the username if any of these two match, on the else block console.log ''username doesn't match.
 
if(username == "Glen" || "glen@gmail.com"){
     console.log(username)
}
else
     console.log("users dont match")


     // Write an if statement to check if there is a 'Thuli' in our array. Console.log the index of 'Thuli' if there is.
 if(listOfFriends.includes("Thuli")){
     const index = listOfFriends.indexOf("Thuli");
     console.log(index)};

 //5 Write an if statement to check if there is a Sipho in our array, if there is go ahead and remove him from the array. Otherwise console.log 'Person not found'
 const searchString = "Sipho" ;
 const index1 = listOfFriends.indexOf(searchString);
 if (index1 !== -1 ){
     listOfFriends.splice(index1, 1)
 }
     else  
    console.log("Person not Found")

// 6 Write an if statement to check if the mothers name in our object is 'Nomsa' and console.log the father's name from the object if it is,
// otherwise console.log the employer's name from the same object

if (moreData.mother === "Nomsa"){
     const papa = moreData.father
     console.log(papa)
} 
else
     console.log(moreData.employer)

//7 Check if salary is greater than 70000.
// If True: add the mother and fathers name to the listOfFriends array, after adding the mother and father console log the indexes of their names in the new array.
// Else add the listOfFriends array to the moreData object. The key for the array in the object should be 'friends'.  You might want to research keys and values in objects for this.
let mama = moreData.mother 
let dada = moreData.father;
listOfFriends.push(mama,dada)
// console.log(listOfFriends)
if(moreData.salary >= 70000){
     IndexMa =listOfFriends.indexOf("Nomsa")
     IndexPa =listOfFriends.indexOf("Themba")
      console.log(IndexMa,IndexPa)
}
else
moreData.friends = [mama,dada]  
console.log(moreData)

// TASK 4


let students = [
     { name: 'Ben', surname: 'Nkosi', subjects: ['Maths', 'Biology', 'CAT'], avg: 90 },
     { name: 'Priya', surname: 'Patel', subjects: ['Maths', 'Biology', 'CAT'], avg: 87 },
     { name: 'Nkosinathi', surname: 'Khoza', subjects: ['Maths', 'Biology', 'CAT'], avg: 33 },
     { name: 'Glen', surname: 'Phiri', subjects: ['Maths', 'Biology', 'CAT'], avg: 45 },
     { name: 'Vinit', surname: 'Patel', subjects: ['Maths', 'Biology', 'CAT'], avg: 42 },
     { name: 'Ben', surname: 'Singh', subjects: ['Maths', 'Biology', 'CAT'], avg: 81 },
     { name: 'Given', surname: 'Madakana', subjects: ['Maths', 'Biology', 'CAT'], avg: 93 },
     { name: 'Ressick', surname: 'Olifant', subjects: ['Maths', 'Biology', 'CAT'], avg: 72 },
     { name: 'Stan', surname: 'Kamoto', subjects: ['Maths', 'Biology', 'CAT'], avg: 60 },
     { name: 'Sharon', surname: 'Mavimbela', subjects: ['Maths', 'Biology', 'CAT'], avg: 90 },
 ]
 // Note: Honorary students in our case are students with an avg above 80
 // 1. a) Building on what we did earlier, 
 //    b) use a for loop in conjunction with if statements to grab a list of students (full name and also their avg) with an average (avg) over 80.
 //    c) Store these students information in an array called honoraryStudents. 
 let honararyStudents = []
 for(i=0 ; i < students.length ; i++){
     if(students[i].avg >= 80){
          rollers = {fullname : students[i].name + " " + students[i].surname ,
                    Average : students[i].avg }
               honararyStudents.push(rollers)    
          }}
          //  console.log(honararyStudents)

          // FUNCTION 
          function getHonStus(students) {
               let honoraryStudents = [];
             
               for (let i = 0; i < students.length; i++) {
                 if (students[i].avg >= 80) {
                   const roller = {
                     fullname: students[i].name + " " + students[i].surname,
                     Average: students[i].avg
                   };
             
                   honoraryStudents.push(roller);
                 }
               }
             
               return honoraryStudents;
             }
             console.log(honararyStudents)

     
 // 2. Use code to determine how many students are honorary students, and log that to the terminal

//   Count the honorary students
 const results = students.filter(obj => {return obj.avg >80 ; 
 }).length
     // console.log(results)

          // FUNCTION 

     function countStuAve(students) {
          const results = students.filter(obj => obj.avg > 80).length;
          return results;
        }
        console.log(results)


 // 3. Write a for loop to add a new key on the students array.
 //    The key will be the word 'honorary' and the value will simply be true, for honorary students and false for the others.

 for (i=0 ; i < students.length ; i++){
     students[i].honarary = false

     if(students[i].avg >= 80){
          students[i].honarary =true

     }
     // console.log(students)
 }

     // FUNCTION 
 function markedStu(students){
     for(a=0 ;a < students.length ; a++){
          students[a].hon = false;
     
     if(students[a].avg >= 80){
     students.hon = true
     }}
  return(students);
 }
console.log(students)
