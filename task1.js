//Task 1 declare the following variables:
let username = "Glen";
let isStudent = false ;
let totalDebt = 1359 ;
let age = 50 ;
let listOfFriends = ["Ben","Gwen","Sipho"]
let moreData = {mother: "Nomsa",father:"Themba" ,employer:"CSIR",salary:130289};

//Task 2
username = 'glen@gmail.com';            // value is username is now also the gmail and console.log displays that
isStudent = true;                       // value is isStudent is now "true"
totalDebt = 500                         // the value of total debt is now set to 500
age +=1                                 // this code says the value of age, add 1 to the value

listOfFriends.shift("Ben");             //takes out ben from list of friends 
listOfFriends.push("Thuli");            // pushes in a value in the specified array 
//listOfFreinds.splice("")              //takes out the the last value in an array
//listOfFriends.unshift("")             //puts in a value at the beginning of the line of an array 
//listOfFriends.pop("")                 //takes out the first value in array 
moreData.employer = "Innovation Hub ";  // in moreData,this code changes the value of the employer key to "innovation Hub"
moreData["salary"] = 182900 ;           // in moreData, this code changes the value of salary key to 182900

//console.log({username,isStudent,totalDebt,age,listOfFreinds,moreData});

 
// Task 3 :
// 1.statement to check if age is equal to 49 and console.log true if it is.
// 2.Write an if-else statement to check if age is equal to 30, console.log 'age matches' if it is and 'age doesn't match' if it is not.

if(age === 49)
     console.log("true")
else if (age === 30)
     console.log("age matches")
else if (age > 30)
     console.log("age doesnt match")

//3.if-else statement to check if username is equal to 'Glen' or 'glen@gmail.com', console log the username if any of these two match, on the else block console.log ''username doesn't match. 
if(username == "Glen" || username == "glen@gmail.com")
     console.log(username)
else 
     console.log("usename doesnt match")

//4.if statement if Thuli is in array , console index of thuli
 if (listOfFriends.includes("Thuli") ){
     const index  = listOfFriends.indexOf("Thuli");
     console.log(index);
 }

 //5 Write an if statement to check if there is a Sipho in our array, if there is go ahead and remove him from the array. 
 //  Otherwise console.log 'Person not found'
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
     const dad = moreData.father
     console.log(dad)
}
else
     console.log(moreData.employer)


//7  Check if salary is greater than 70000.
//If True: add the mother and fathers name to the listOfFriends array, after adding the mother and father console log the indexes of their names in the new array.
//Else add the listOfFriends array to the moreData object. The key for the array in the object should be 'friends'. 
//You might want to research keys and values in objects for this.


console.log(moreData);
const keys = Object.keys(moreData);                         // this line outputs the values within the moreData object 
const searchKey4 = 'mother';                                // this outputs the name mother when we log searchkey4
const searchKey5 = 'father';                                // this outputs the name father when we log searchkey5
const index4 = keys.indexOf(searchKey4);                    // output the index of mother in moredata
const index5 = keys.indexOf(searchKey5);                    // outputs the index of father in moredata


listOfFriends.push(moreData.mother, moreData.father);       // Add the values to the existing array
const locks = Object.keys(listOfFriends);
//console.log(listOfFriends)                                // super weird how console.log(displays the keys:(,0,1,2,3,) of list of friends but console.log(listOffriends, siplays the values ))
const searchKey6 = 'mother';
const searchKey7 = 'father';

const index6 = keys.indexOf(searchKey6); // i declared a variable called index6 ,the keys.indexOF:locates the searchkey6 values index in list of friends,output the index of mother from the list of friends array
const index7 = keys.indexOf(searchKey7); // i declared a variable called index6 ,the keys.indexOF:locates the searchkey7 values index in list of friends,output the index of father  from the list of friends array
moreData.listOfFriends=listOfFriends     //outputs list of friends with 2 values from the said object(moreData) are present,themba and thuli  
 
 if(moreData.salary > 70000)                                //if in the object moreData,the salary value is greater the 70 000
      console.log(index6,index7);                           // console the indexes of index6 and index7
 else 
     console.log(moreData);                            //console log the contents of moreData


