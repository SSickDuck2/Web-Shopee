let allProducts = []; // Lưu toàn bộ sản phẩm API

// Gọi API
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    renderProducts(allProducts); // Hiển thị ban đầu
  });

  function SortByPrice(){
    mark = 0;
    if (mark == 0){
      AscByPrice(order);
      mark = 1;
    }
    else{
      DescByPrice(order);
      mark = 0;
    }
  }
  
function renderProducts(list) {
  const grid = document.querySelector('.product-grid');
  grid.innerHTML = ''; // Xóa cũ
  list.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="product-info">
        <h2>${item.title}</h2>
        <p class="price">${item.price.toLocaleString()} $</p>
        <button class="buy-btn">Buy</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function sortByPrice(order = 'asc') {
  const sorted = [...allProducts].sort((a, b) => {
    return order === 'asc' ? a.price - b.price : b.price - a.price;
  });

  renderProducts(sorted); // Hàm hiển thị ra HTML
}