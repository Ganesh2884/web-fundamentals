// API Call
// Card Layout

// Configurable Fields.


const nameFormatter = (user)=>`${user.firstName} ${user.lastName}`;

let fields = [
    {label:"Name",value:"name",formatter:nameFormatter},
    {label:"Age",value:"age"},
    { label: "Phone ", value: "phone",},
    { label: "Blood Group",value: "bloodGroup",},
    { label: "weight ", value: "weight", },
    { label:"Email", value:"email"}
]





const fetchData = async () => {

    let data = await fetch("https://dummyjson.com/users").then(response=>response.json());
    let mainContainer = document.getElementsByClassName("main-conatiner")[0];
    console.log(mainContainer);
    console.log(data.users);
  //  let name = document.getElementById("name");
    let result =  await data.users
    console.log(result);
  


    result.map(element => {
        // mainContainer.appendChild(element);  
      //  element.firstName;
     //   name.valueOf= element.firstName;
    //  name.textContent = element.firstName;
     console.log(element.image);
    //   const head =  mainContainer.appendChild(div);
    //   const img = head.setAttributes("img","src");

   
    mainContainer.appendChild(setAttributes(element));
    
    });
    
    
}

function setAttributes(ele){
    let cardContainer  = document.createElement("div");
    cardContainer.setAttribute("class","card");
    let img = document.createElement("img");
    img.setAttribute("class","card-img");
    img.setAttribute("src",ele.image);
    let detailsContainer = document.createElement("div");
    detailsContainer.setAttribute("class", "details-container");
    
    fields.forEach((user) => {
        let { label, formatter, value } = user;
        if (formatter) {
          value = formatter(ele);
        } else {
          value = ele[value];
        }
        detailsContainer.appendChild(detailsAttributes(label, value));
      });
    cardContainer.appendChild(img);
    cardContainer.appendChild(detailsContainer);

    
    return cardContainer;

}

function detailsAttributes(label,value){
        let details = document.createElement("div");
        details.setAttribute("class", "details");
        let h4 = document.createElement("h4");
        h4.setAttribute("class", "details-header");
        h4.innerText = label;
        let span = document.createElement("span");
        span.textContent = value;
        details.appendChild(h4);
        details.appendChild(span);
        return details;
}

// const cardRender = (user)=>{
    
//     const detailsContainer = document.createElement("div");
//     detailsContainer.setAttribute("class","class-container");
//     cardContainer.appendChild(detailsContainer);

//     const nametag = document.createElement("h1");
//     nametag.setAttribute("class","name");

//     detailsContainer.appendChild(nametag);
    
//     fields.forEach((element)=> nametag.textContent = element.label);

// }


fetchData();