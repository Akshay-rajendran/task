let para = document.querySelector(".wrapper")
let deletee =document.querySelector(".fa-solid")
let home=document.querySelector(".home")

async function fetchData() {
  let { data } = await axios.get("http://localhost:5000/getAllTask");
  console.log(data);
  let newarray = data.alltask
    .map((singletask) => {
      return `<div id="task-container">
      <p class="h11">
       ${singletask.task}
      </p>
      <P class="discription">
      ${singletask.discription}</p>
      <p class="fa-regular">${
        singletask.complete ? "completed" : "not completed"
      }</p>
      <div class="icons">
      <a href="http://localhost:5000/edit.html?id=${singletask._id}"> <i class="fa-solid fa-pen-to-square"></i></a> 
      <i class="fa-solid fa-trash" data-id=${singletask._id}></i> 
      </div>
      
    </div>`;
    })
    .join(" ");
  console.log(newarray);
  para.innerHTML = newarray;
}
fetchData();


para.addEventListener("click",async(e)=>{
 

  let deletee=e.target.classList.contains("fa-trash");
  console.log(deletee)
  if(deletee) {
    let id=e.target.getAttribute("data-id")
    console.log(id);
    alert("sure u want to delete")
      let response=await axios.delete("http://localhost:5000/delete/"+id)
      alert("deleted")
      window.location.href="http://localhost:5000/index2.html"

      
  }

  
}
)


home.addEventListener("click",()=>{
  window.location.href="http://localhost:5000/index.html"

})





///${singletask._id} it is used for taking individual idea for each object that creating in mongodb
/// single task is object that we created in post method and stored in the mongodb database

//AllTask is the object name we get when we do post method ,console it for clarify

//singletask complete? is used to check wheather the task completed or not
// .join is used to join to make all the elements into one string


//<i class="fa-solid fa-trash" data-id=${singletask._id}></i>     data-id is used to take the id for using in the link 