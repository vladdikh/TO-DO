// Получаем элементы
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Обработчик добавления задачи
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim(); // Получаем текст задачи

  if (taskText === "") return; // Если текст пустой, не добавляем задачу

  // Создаем новый элемент задачи
  const li = document.createElement("li");

  // Текст задачи
  const span = document.createElement("span");
  span.textContent = taskText;

  // Кнопка для выполнения задачи
  const actionButton = document.createElement("button");
  actionButton.textContent = "Выполнить";
  actionButton.classList.add("action");
  
  // Логируем, что кнопка создана
  console.log("Создана кнопка Выполнить:", actionButton);

  // Обработчик для кнопки выполнения/отмены выполнения
  actionButton.addEventListener("click", () => {
    if (li.classList.contains("completed")) {
      // Если задача уже выполнена, отменяем выполнение
      li.classList.remove("completed");
      actionButton.textContent = "Выполнить";
      actionButton.classList.add("action");
    } else {
      // Если задача не выполнена, помечаем как выполненную
      li.classList.add("completed");
      actionButton.textContent = "Отменить";
    }
  });

  // Кнопка для удаления задачи
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Удалить";
  deleteButton.classList.add("delete");
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(li); // Удаляем задачу из списка
  });

  // Логируем, что кнопка Удалить создана
  console.log("Создана кнопка Удалить:", deleteButton);

  // Добавляем элементы в li
  li.appendChild(span);
  li.appendChild(actionButton);
  li.appendChild(deleteButton);

  // Добавляем li в список задач
  taskList.appendChild(li);

  // Очищаем поле ввода
  taskInput.value = "";
});
