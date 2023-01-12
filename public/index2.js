let para = document.querySelector(".wrapper");

async function fetchData() {
  let { data } = await axios.get("http://localhost:5000/getAllTask");
  console.log(data);
  let newarray = data.alltask
    .map((singletask) => {
      return `<div id="task-container">
      <p>
       ${singletask.task}
      </p>
      <P>
      ${singletask.discription}</p>
      <div class="icons">
      <a href="http://localhost:5000/edit.html?id=${singletask._id}"> <i class="fa-solid fa-pen-to-square"></i></a> 
      <i class="fa-solid fa-trash"></i> 
      </div>
      <p class="fa-regular">${
        singletask.complete ? "completed" : "not completed"
      }</p>
    </div>`;
    })
    .join(" ");
  console.log(newarray);
  para.innerHTML = newarray;
}
fetchData();






///${singletask._id} it is used for taking individual idea for each object that creating in mongodb
/// single task is object that we created in post method and stored in the mongodb database

//AllTask is the object name we get when we do post method ,console it for clarify

//singletask complete? is used to check wheather the task completed or not
// .join is used to join to make all the elements into one string