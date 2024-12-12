const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");
const taskForm = document.getElementById("tasks__form");

function createTask(text) {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task__title");
    taskTitle.textContent = text;

    const taskRemove = document.createElement("a");
    taskRemove.href = "#";
    taskRemove.classList.add("task__remove");
    taskRemove.innerHTML = "&times;";

    taskRemove.addEventListener("click", (event) => {
        event.preventDefault();
        taskElement.remove();
        console.log("удалена: ", text);
    });

    taskElement.appendChild(taskTitle);
    taskElement.appendChild(taskRemove);

    return taskElement;
}

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskText = taskInput.value.trim(); // удаление пробелов из введеннго текса
    if (taskText !== "") { // проверка на пустоту
        const newTask = createTask(taskText); // создание новой задачи
        taskList.appendChild(newTask); // добавление новой задачи в список
        taskInput.value = ""; // очистка поля ввода
        console.log("задача добавлена: ", taskText);
    } else {
        console.log("игнорируем");
    }
});