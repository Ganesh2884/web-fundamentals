// How to fetch Data from server.

function fetchDataFromServer() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => printData(json));
}

function printData(data) {
  console.log(data);
  // let ele = document.getElementById("code");
  // let tempData = data.filter((a) => a.id < 50);
  // ele.innerHTML = JSON.stringify(tempData, null, 4);
 // console.log(users);

 // Destructuring
let {limit, skip, total,users} = data;
console.log(users);
// Using filter
 let tempData = users.filter((element)=> element.id<30);
 console.log(tempData);

 // Using map
let mapData =  users.map((ele)=>{
  return ele.firstName + " "+ ele.lastName;
 });

 console.log(mapData);

//  Using forEach loop
 let eachData = users.forEach(element => {
      console.log(element.firstName +" "+ element.lastName);
 });

    // Using Reduce Method

    let useReduce = users.reduce((a,b, index)=>{
      a+=b.age;

      return a;
    }, 100);
    console.log(useReduce);

    // TASK
    let returnFirstNameAndLastName = users.map((user)=>{
      return "Name :" + user.firstName + " "+ user.lastName;
    })

    let filterFirstNameAndLastName = users.filter((element)=>{
        return element.age<50;
    })

    let calculateWeight = filterFirstNameAndLastName.reduce((a,b,index)=>{
      console.log(a);
      console.log(b.age);
    })

    console.log(returnFirstNameAndLastName);
    console.log(filterFirstNameAndLastName);
    // console.log(calculateWeight);

}

fetchDataFromServer();

// Return a object Array 



