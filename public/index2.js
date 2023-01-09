

let para = document.querySelector("#task-container")

async function fetchData() {
    let { data } = await axios.get("http://localhost:5000/getAllTask")
    console.log(data)
    let newarray = data.alltask.map((singletask) => {
        return `<p>${singletask.task}</p>
        <button>edit</button>`

    }).join(" ")
    console.log(newarray);
    para.innerHTML = newarray
}
// fetchData()