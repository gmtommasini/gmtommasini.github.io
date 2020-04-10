/** Add any JavaScript you need to this file. */
// (function() {
var productsFiltered = {};
function productToDiv(product) {
   var catalog = document.getElementById("catalog");
   var div_col = document.createElement("div");
   div_col.setAttribute("class", "col-sm-4");
   var div_panel = document.createElement("div");
   div_panel.setAttribute("class", "panel panel-warning");
   var div_head = document.createElement("div");
   div_head.setAttribute("class", "panel-heading");
   div_head.innerText = `${product.name} - (code: ${product.code})`;
   var div_body = document.createElement("div");
   div_body.setAttribute("class", "panel-body");
   var img = document.createElement("img");
   img.setAttribute("src", `./img/products/${product.code}.jpg`);
   img.setAttribute("class", "img-fluid");
   img.setAttribute("class", "imgCat");

   var div_foot = document.createElement("div");
   div_foot.setAttribute("class", "panel-footer");
   div_foot.innerText = `${product.description}.\nSize: ${product.size}\t Price: $${product.price}`;
   var cart = document.createElement("input");
   cart.setAttribute("type", "image");
   cart.setAttribute("src", `./img/cartIcon.png`);
   cart.setAttribute("align", "right");
   cart.setAttribute("class", "cart");
   div_foot.appendChild(cart);

   div_body.appendChild(img);
   div_panel.appendChild(div_head);
   div_panel.appendChild(div_body);
   div_panel.appendChild(div_foot);
   div_col.appendChild(div_panel);
   catalog.appendChild(div_col);
}

// function getByCategory(cat) {
//    var catArray = {};
//    catArray = products.filter(element => element.category == cat);
//    return catArray;
// }
//console.log(getByCategory("wear")); //works!!!

function getgen(k, vl) {
   console.log(k + " - " + vl);
   productsFiltered = products.filter((element) => element[k] == vl);
   console.log(productsFiltered);
   return productsFiltered;
}
function getAll() {
   productsFiltered = products;
   return productsFiltered;
}
//console.log(getgen("size", "M")); //works
//console.log(getgen("animal", "cat")); //works

function getbyPrice(min, max = Infinity) {
   var array = {};
   array = products.filter((element) => element.price >= min && element.price <= max);
   return array;
}
//console.log(getbyPrice(25)); //works
// })();

function buildCatalog(listOFProducts) {
   var div = document.getElementById("catalog");
   div.innerText = "";
   console.log("Calling buildCatalog!!!!");
   listOFProducts.forEach((element) => {
      productToDiv(element);
   });
}
window.onload = function () {
   productsFiltered = products;
   buildCatalog(productsFiltered);
};

// function openMenu() {
//    var menu = document.getElementById("menu");
//    if (menu.style.visibility == "visible") menu.style.visibility = "hidden";
//    else menu.style.visibility = "visible";
// }
// function closeMenu() {
//    document.getElementById("menu").style.visibility = "hidden";
// }
