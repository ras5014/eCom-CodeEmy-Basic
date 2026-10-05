// make the product list
const products = [
    {
        id: 1,
        imgSrc: "public/snekers.jpg",
        name: "Sneker",
        price: 250,
        inStock: true
    },
    {
        id: 2,
        imgSrc: "public/headphone.webp",
        name: "Headphone",
        price: 150,
        inStock: true
    },
    {
        id: 3,
        imgSrc: "public/laptop.jpg",
        name: "Laptop",
        price: 500,
        inStock: true
    },
    {
        id: 4,
        imgSrc: "public/mobile.jpg",
        name: "mobile",
        price: 600,
        inStock: true
    }
]


// const btn = document.getElementById("cartBtn");
// btn.addEventListener("click", function () {
//     alert("Product added to cart");
// });

const container = document.querySelector(".products");
const searchInput = document.querySelector("#searchInput");

// Function to display products
function displayProducts(productsToDisplay) {
    container.innerHTML = "";
    productsToDisplay.forEach(product => {
        container.innerHTML += `
        <div class="product-card">
            <img src=${product.imgSrc} alt="Product Image" />
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        </div>
    `
    })
}

// Display All proeducts Initially
displayProducts(products);

// Search Products
searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchText);
    })

    displayProducts(filteredProducts);
})




