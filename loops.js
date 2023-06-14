let students = [
  {
    name: "Ben",
    surname: "Nkosi",
    subjects: ["Maths", "Biology", "CAT"],
    avg: 90,
  },
  {
    name: "Priya",
    surname: "Patel",
    subjects: ["Maths", "Biology", "CAT"],
    avg: 87,
  },
  {
    name: "Nkosinathi",
    surname: "Khoza",
    subjects: ["Maths", "Biology", "CAT"],
    avg: 33,
  },
  {
    name: "Glen",
    surname: "Phiri",
    subjects: ["Maths", "Biology", "CAT"],
    avg: 45,
  },
  {
    name: "Vinit",
    surname: "Patel",
    subjects: ["Maths", "Biology", "CAT"],
    avg: 42,
  },
  {
    name: "Ben",
    surname: "Singh",
    subjects: ["Maths", "Biology", "CAT"],
    avg: 81,
  },
  {
    name: "Given",
    surname: "Madakana",
    subjects: ["Maths", "Biology", "CAT"],
    avg: 93,
  },
  {
    name: "Ressick",
    surname: "Olifant",
    subjects: ["Maths", "Biology", "CAT"],
    avg: 72,
  },
  {
    name: "Stan",
    surname: "Kamoto",
    subjects: ["Maths", "Biology", "CAT"],
    avg: 60,
  },
  {
    name: "Sharon",
    surname: "Mavimbela",
    subjects: ["Maths", "Biology", "CAT"],
    avg: 90,
  },
];

// Note: Honorary students in our case are students with an avg above 80
// 1. a) Building on what we did earlier,
//    b) use a for loop in conjunction with if statements to grab a list of students (full name and also their avg) with an average (avg) over 80.
//    c) Store these students information in an array called honoraryStudents.

let honorStudents = []
for(let i = 0; i < students.length; i++)
{
    if (students[i].avg >= 80) {
         honorStu = {
         fullname: students[i].name + students[i].surname ,
         average: students[i].avg}
    
         honorStudents.push(honorStu)
         
  }};
            console.log(honorStudents);

// 2. Use code to determine how many students are honorary students, and log that to the terminal

const results = students.filter(obj =>{
    return obj.avg > 80 ;
}).length
console.log(results);
// 3. Write a for loop to add a new key on the students array.
//    The key will be the word 'honorary' and the value will simply be true, for honorary students and false for the others.

for (let i=0 ;i < students.length ; i ++){
    students[i].honorary = false                                //initialised key honorary and set it to false

    if(students[i].avg >= 80){                                  //conditional statement
        students[i].honorary = true                             // if the condition is passed then false becomes true
        }
    console.log(students);
}
// for (var a=0 ; a < students.length ; a++){
//     students[a].subavg = false

//     if(students[a].avg < 80){
//         students.subavg = true
//     }
//     console.log(students)
// }