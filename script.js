const input = document.getElementById("input-task")
const button = document.querySelector("button")
const thingsToDo = document.getElementById("things-to-do")


function addTask() {
    if (input.value) {
        let newTask = document.createElement("div")
        newTask.classList.add("task")

        let text = document.createElement("p")
        text.innerText = input.value
        newTask.appendChild(text)

        let icons = document.createElement("div")
        icons.classList.add("icons")
        newTask.appendChild(icons)

        let toComplete = document.createElement("i")
        toComplete.classList.add("bi", "bi-check-circle-fill", "icon-to-compete")
        toComplete.addEventListener("click", completeTask)

        let eliminate = document.createElement("i")
        eliminate.classList.add("bi", "bi-trash-fill", "icon-eliminate")
        eliminate.addEventListener("click", deleteTask)

        icons.append(toComplete, eliminate)

        thingsToDo.appendChild(newTask)

    } else {
        alert("Please enter a task")
    }
}

function completeTask(e) {
    let task = e.target.parentNode.parentNode
    task.classList.toggle("completed")
}

function deleteTask(e) {
    let task = e.target.parentNode.parentNode
    task.remove()
}



input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
button.addEventListener("click", addTask)