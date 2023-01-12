const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id= urlParams.get("id")
console.log(id);

task=document.querySelector(".taskadding")
discription=document.querySelector(".taskdiscription")
let form=document.querySelector("form")

async function getOneTask(){
   let response= await axios.get("http://localhost:5000/getsingletask/"+id)

   task.value=response.data.task
   discription.value=response.data.task
   console.log(response);

   
}
getOneTask()


form.addEventListener("submit",async(e)=>{
   e.preventDefault()
   let response = await axios.patch("http://localhost:5000/update/"+id,{
    task:task.value,
    discription:discription.value
})
   
window.location.replace("http://localhost:5000/index2.html"); //to go next page in the link after doing the function





   console.log(response,task);
})







// // const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const id= urlParams.get("id")
// console.log(id);   ->to get urlparameters in javascript that we set in the index2.js  