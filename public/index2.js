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
      <i class="fa-solid fa-pen-to-square"></i>
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
