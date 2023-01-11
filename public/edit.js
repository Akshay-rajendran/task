const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id= urlParams.get("id")
console.log(id);

task=document.querySelector(".taskadding")
discription=document.querySelector(".taskdiscription")

async function getOneTask(){
   let response= await axios.get("http://localhost:5000/getsingletask/"+id)

   task.value=response.data.task
   console.log(response);
}
getOneTask()









// // const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const id= urlParams.get("id")
// console.log(id);   ->to get urlparameters in javascript that we set in the index2.js  