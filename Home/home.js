document.getElementById("menu").addEventListener( "click", function (){
    const dropdown = document.querySelector(".menudrop");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => {
    products.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image clickable"/>
        <h3 class="product-title clickable">${product.title}</h3>
        <p class="product-price">${product.price}$</p>
        <button class="add-cart-btn" onclick="addToCart(${product.id})">Thêm vào giỏ</button>
      `;
      
      // Thêm sự kiện click cho các phần tử có class clickable
      card.querySelectorAll(".clickable").forEach(el => {
        el.addEventListener("click", () => {
          console.log(`Đã click vào sản phẩm có ID: ${product.id}`);
          localStorage.setItem("selectedProductId", product.id);
          window.location.href = "../Product/product.html";
        });
      });
      productList.appendChild(card);
    });
  });

function addToCart(id) {
  alert(`Thêm sản phẩm có ID: ${id} vào giỏ (có thể xử lý sau)`);
}
