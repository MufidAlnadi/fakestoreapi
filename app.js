//constructor
function Product(title, price, description, image) {
  this.title = title;
  this.price = price;
  this.description = description;
  this.image = image;
}
const products = [];

fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      data.slice(0, 20).forEach((i) => {
        let product = new Product(i.title, i.price, i.description, i.image);
        products.push(product);
      });
      render();
    });


   
function render() {
  const main = document.getElementById("main"); 
   let card = products.map((product) =>
            `
            <div class="card m-5" style="width: 18rem;">
            <div class="card-header">
            <img src="${product.image}" class="card-img-top product-image" alt="${product.title}">
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item product-title"><b>Product: </b> ${product.title}</li>
            <li class="list-group-item product-description"><b>Description:</b> ${product.description}</li>
            <li class="list-group-item product-price"><b>Price: </b> ${product.price}</li>
            </ul>
            </div>`).join('');
            main.innerHTML= card;
}
