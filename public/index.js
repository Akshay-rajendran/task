let discription = document.querySelector(".taskdiscription");
let form = document.querySelector("form");
let task = document.querySelector(".taskadding");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  alert("submitted");

  let a = task.value;
  let b = discription.value;
  let response = await axios.post("http://localhost:5000/addtask", {
    task: a,
    discription: b,
  });
  window.location.replace("http://localhost:5000/index2.html");
  console.log(response.data);
});
