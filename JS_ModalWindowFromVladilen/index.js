let fruits = [
  {
    id: 1,
    title: "Яблоки",
    price: 10,
    img: "https://cdn.mosoah.com/wp-content/uploads/2019/08/04112712/fruit-apples.jpg",
  },
  {
    id: 2,
    title: "Помидоры",
    price: 20,
    img: "https://buyafruit.ru/thumb/2/4POWfMalZQG2GUSQfOCOGA/352r235/d/pomidory-bakinskie-kupit-s-dostavkoj.jpg",
  },
  {
    id: 3,
    title: "Персики",
    price: 40,
    img: "https://i.pinimg.com/736x/6f/da/f5/6fdaf5aae1f3b8bae4bd933602728388--recipe-cards-random-things.jpg",
  },
];

const toHTML = (fruit) => `
<div class="col">
<div class="card" style="width: 18rem">
  <img
    src="${fruit.img}"
    class="card-img-top"
    style="height: 15rem"
  />
  <div class="card-body">
    <h5 class="card-title">${fruit.title}</h5>
    <a href="#" class="btn btn-primary" data-btn='price' data-id='${fruit.id}'>Купить</a>
    <a href="#" class="btn btn-danger" data-btn='remove' data-id='${fruit.id}'>Удалить</a>
  </div>
</div>
</div>`;

function render() {
  const html = fruits.map(toHTML).join("");
  document.querySelector("#fruits").innerHTML = html;
}
render();

const priceModal = $.modal({
  title: "Цена на товар:",
  closeble: true,
  width: "400px",
  footerButtons: [
    {
      text: "В корзину",
      type: "primary",
      handler() {
        priceModal.close();
      },
    },
    {
      text: "Закрыть",
      type: "danger",
      handler() {
        priceModal.close();
      },
    },
  ],
});

document.addEventListener("click", (event) => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  const id = +event.target.dataset.id;
  const fruit = fruits.find((f) => f.id === id);

  if (btnType === "price") {
    priceModal.setContent(
      `<p>Цена на "${fruit.title}": <strong>${fruit.price}р</strong></p>`
    );
    priceModal.open();
  } else if (btnType === "remove") {
    $.confirm({
      title: "Вы уверены?",
      content: `<p> Вы удаляете: <strong>${fruit.title}</strong></p>`,
    })
      .then(() => {
        fruits = fruits.filter((f) => f.id !== id);
        render();
      })
      .catch(() => {});
  }
});
