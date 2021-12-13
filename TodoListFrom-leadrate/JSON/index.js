const todosJSON = "https://jsonplaceholder.typicode.com/todos";

fetch(todosJSON)
  .then((response) => response.json()) // декодирую ответ в формате JSON
  .then((data) => {
    strr = (() => {
      //Динамически выводим все задания в Todo list
      for (let i = 0; i < data.length; i++) {
        document.querySelector(
          ".main__todos__todo"
        ).innerHTML += `<div class='control'>
      <input type="checkbox" ${data[i].completed ? "checked" : ""}/>
      <label calss='crossOut' for="checkbox_todo">
        <span calss='activeChecked'></span>
        <div class="title  ${data[i].completed ? "" : "titleHover"}">${
          data[i].title
        } <br />
            <div class="descr">
            ${
              data[Math.round(1 - 0.5 + Math.random() * (199 - 1 + 1))].title //описание для каждого задание выпадает рандомно
            }  </div
            ></div> 
      </label>
    </div></div>`;
      }
    })();

    let control = document.querySelectorAll(".control");
    let label = document.querySelectorAll("label");

    label.forEach((input) =>
      input.addEventListener(
        "click",
        (e) => e.currentTarget.childNodes[3].classList.toggle("titleHover") //отображение атрибута "checked"
      )
    );

    control.forEach((input) =>
      input.addEventListener(
        "click",
        (e) => e.currentTarget.childNodes[1].click() // В зависимости от наличия атрибута "checked" у "input" меняем на противоположный
      )
    );
  });

document
  .querySelector(".maain__header__BtnAdd")
  .addEventListener("click", () => {
    alert("Нет доступа к серверу");
  });
