const items = [
  {
    id: 1,
    title: "RAM",
    imageSrc:
      "https://cdn.motor1.com/images/mgl/AkKkyL/s3/2023-ram-heavy-duty-rebel.webp",
    description: " 1500 TRX",
  },
  {
    id: 2,
    title: "CUATRI",
    imageSrc:
      "https://cdn.motor1.com/images/mgl/1b1v7/s3/lanzamiento-yamaha-yfm-700-raptor.webp",
    description: " YAMAHA 750",
  },
  {
    id: 3,
    title: "MOTO",
    imageSrc:
      "https://motos-b60.kxcdn.com/sites/default/files/yamaha-r6-race-2022.jpg",
    description: "R6 Race 2022",
  },
  {
    id: 4,
    title: "PEUGEOT",
    imageSrc:
      "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2022/11/545209.jpg",
    description: "208",
  },
  {
    id: 5,
    title: "FORD",
    imageSrc:
      "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_9527866fefb84e3e840b1fd28e2a23c0.jpg",
    description: "Ford F-150 Raptor",
  },
  {
    id: 6,
    title: "AUDI",
    imageSrc:
      "https://cdn.motor1.com/images/mgl/7ZZAY1/s3/2022-audi-rs-7-exclusive-edition.webp",
    description: "RS 7 Exclusive Edition 2022",
  },
  {
    id: 6,
    title: "MERCEDES BENZ",
    imageSrc:
      "https://i0.wp.com/minutomotor.com.ar/wp-content/uploads/2021/04/PA060421B.jpg?resize=1200%2C800&ssl=1",
    description: "AMG GLE 63",
  },
  {
    id: 6,
    title: "BMW",
    imageSrc:
      "https://as1.ftcdn.net/v2/jpg/05/81/02/12/1000_F_581021287_p1DynmFv1jBWcxhMKWFiiOw0GLX87u5v.jpg",
    description: " X6 M Competition",
  },
];

function generateItemsHTML() {
  const itemsContainer = document.querySelector(".autos ul");

  items.forEach((item) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");

    h2.textContent = item.title;
    img.src = item.imageSrc;
    img.alt = item.title;
    h3.textContent = item.description;

    button.appendChild(h2);
    button.appendChild(img);
    button.appendChild(h3);

    li.appendChild(button);
    itemsContainer.appendChild(li);
  });
}

function onload() {
  generateItemsHTML();
}
