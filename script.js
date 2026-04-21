fetch("https://dummyjson.com/recipes")
  .then(res => res.json())
  .then(data => {
    let container = document.getElementById("products");

    data.recipes.slice(0, 8).forEach(item => {
      container.innerHTML += `
        <div class="card">
          <img src="${item.image}">
          <h3>${item.name}</h3>
          <p>${item.ingredients.slice(0,3).join(", ")}</p>
        </div>
      `;
    });
  });