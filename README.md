# 🛍️ ShopEasy — Learn HTML, CSS & JavaScript

A beautiful beginner code-along for this small product-search app.

ShopEasy displays four products, lays them out responsively, and filters them while the visitor types. It is a compact example of the three front-end building blocks:

~~~text
HTML        = structure       the page and its content
CSS         = presentation    colour, spacing, layout, responsive design
JavaScript  = behaviour       data, rendering, search, events
~~~

## 🎯 What you will learn

- HTML elements, attributes, classes, IDs, and semantic sections.
- CSS selectors, the box model, Flexbox, Grid, states, and media queries.
- JavaScript arrays, objects, functions, the DOM, events, filter(), and includes().
- How data becomes visible UI.
- How to debug a small browser project.

## 🚀 Run it

With Node.js installed:

~~~bash
npm install
npm start
~~~

Or open index.html directly in a browser. The included start command uses servor and reloads after you save.

~~~text
eCom-CodeEmy-Basic/
├── index.html          # page structure
├── styles.css          # visual design and responsive layout
├── script.js           # products, cards, and search
├── public/             # product images
└── package.json        # development command
~~~

---

## 1. HTML: the structure

### What is HTML?

HTML means HyperText Markup Language. It describes the meaning and structure of content. It is a markup language, not a programming language.

~~~html
<h1>Welcome to ShopEasy</h1>
<input type="text" placeholder="Search products..." />
~~~

The first element is a heading. The second is a text input. The browser reads these elements and builds the page.

### The document skeleton

Create index.html:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ShopEasy</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
  </body>
</html>
~~~

| Part | Job |
| --- | --- |
| DOCTYPE | Activates modern HTML rules. |
| html | The root of the document. |
| head | Page information and linked files. |
| viewport meta | Helps the page fit mobile screens. |
| title | Text in the browser tab. |
| body | Visible page content. |

### Add the ShopEasy layout

Inside body:

~~~html
<header class="navbar">
  <h2>ShopEasy</h2>
  <nav>
    <a href="#">Home</a>
    <a href="#">Products</a>
    <a href="#">About</a>
    <a href="#">Cart</a>
  </nav>
</header>

<main class="main-content">
  <div class="search-container">
    <input
      type="text"
      id="searchInput"
      placeholder="Search products..."
    />
  </div>

  <div class="products-grid">
    <!-- JavaScript will add cards here. -->
  </div>
</main>

<script src="script.js"></script>
~~~

Important ideas:

- A class such as navbar is a reusable styling hook.
- An ID such as searchInput identifies one unique element for JavaScript.
- header, nav, and main are semantic elements: their names explain their purpose.
- products-grid is empty on purpose. JavaScript will generate repeated cards.
- The script is at the end of body, so the HTML exists before JavaScript searches for it.
- The hash links are placeholders. A finished shop would connect them to real pages or sections.

Try adding:

~~~html
<footer>
  <p>© 2026 ShopEasy</p>
</footer>
~~~

---

## 2. CSS: the appearance

### What is CSS?

CSS means Cascading Style Sheets. It controls how HTML looks and where it sits.

~~~css
selector {
  property: value;
}
~~~

For example:

~~~css
button {
  background-color: black;
  color: white;
}
~~~

### Reset and page basics

The project begins with:

~~~css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}
~~~

The reset removes browser defaults. border-box makes an element’s width include its padding and border.

### Flexbox for the navbar

~~~css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: teal;
  color: white;
}

.navbar nav {
  display: flex;
  gap: 20px;
}
~~~

- display: flex places children in a row.
- justify-content separates the brand and links.
- align-items centres them vertically.
- gap adds space between links.

### Grid for product cards

~~~css
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
}

.product-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
}

.product-card img {
  width: 100%;
  height: 250px;
  object-fit: contain;
}
~~~

repeat(4, 1fr) creates four equal columns. The cards use Flexbox vertically. contain keeps the full image visible.

### States, selectors, and search styling

~~~css
button {
  padding: 10px 20px;
  border: none;
  background: black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  opacity: 0.7;
}

#searchInput:focus {
  border-color: teal;
  box-shadow: 0 0 8px rgba(0, 128, 0, 0.25);
}
~~~

A class selector starts with a dot. An ID selector starts with a hash. An element selector is simply the element name. hover and focus are pseudo-classes: they describe a temporary state.

### Responsive design

~~~css
@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  #searchInput {
    width: 400px;
  }
}

@media (max-width: 540px) {
  .products-grid {
    grid-template-columns: 1fr;
  }

  #searchInput {
    width: 300px;
  }
}
~~~

~~~text
wide screen    → 4 columns
tablet         → 2 columns
phone          → 1 column
~~~

A media query applies CSS only when its condition is true.

---

## 3. JavaScript: the behaviour

### What is JavaScript?

JavaScript is a programming language that makes a page interactive. It can store data, make decisions, change HTML, and respond to typing and clicks.

### Step 1: store products as data

~~~js
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
    name: "Mobile",
    price: 600,
    inStock: true
  }
];
~~~

This is an array of objects. Each object groups the information for one product.

~~~js
products[0].name;  // "Sneker"
products[0].price; // 250
~~~

Dot notation reads a property. const means the variable name cannot be reassigned.

### Step 2: find elements in the DOM

~~~js
const container = document.querySelector(".products-grid");
const searchInput = document.querySelector("#searchInput");
~~~

The DOM is the browser’s JavaScript-friendly version of the HTML. querySelector() uses a CSS selector to find an element.

### Step 3: render products

The original project uses a template literal. For beginners, this equivalent version makes the string-building idea especially visible:

~~~js
function displayProducts(productsToDisplay) {
  container.innerHTML = "";

  productsToDisplay.forEach(product => {
    container.innerHTML +=
      "<div class=\"product-card\">" +
        "<img src=\"" + product.imgSrc + "\" alt=\"" + product.name + "\" />" +
        "<h3>" + product.name + "</h3>" +
        "<p>$" + product.price + "</p>" +
        "<button>Add to Cart</button>" +
      "</div>";
  });
}
~~~

The original uses backticks and interpolation, which are cleaner for multi-line HTML. Both versions follow the same logic:

1. Clear old cards.
2. Run once for every product with forEach().
3. Insert each product’s values into HTML.
4. Add the result to products-grid.

Then display the initial list:

~~~js
displayProducts(products);
~~~

### Step 4: add live search

~~~js
searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchText);
  });

  displayProducts(filteredProducts);
});
~~~

Read it as: “When the user types, find product names containing the typed text and redraw the cards.”

- value reads the input.
- toLowerCase() makes searching case-insensitive.
- filter() returns a new array with matching products.
- includes() checks whether text appears inside other text.
- The empty string matches every product, so clearing the box shows all products again.

---

## 🧩 Build it from scratch

### Checkpoint 1 — create the project

~~~text
shop-easy/
├── index.html
├── styles.css
├── script.js
└── public/
    ├── headphone.webp
    ├── laptop.jpg
    ├── mobile.jpg
    └── snekers.jpg
~~~

Copy the four images from this repository’s public folder.

### Checkpoint 2 — write HTML

Use the skeleton and ShopEasy layout above. Refresh. You should see the navbar and search box, but no cards yet.

### Checkpoint 3 — add CSS

Add the reset, navbar, grid, card, button, search, and media-query rules. Resize your browser and watch the columns change.

### Checkpoint 4 — add product data

Paste the products array into script.js. In DevTools Console, try:

~~~js
products.length;
~~~

The answer should be 4.

### Checkpoint 5 — prove the DOM connection

~~~js
const container = document.querySelector(".products-grid");

container.innerHTML =
  "<div class=\"product-card\">" +
    "<h3>Test product</h3>" +
    "<p>$99</p>" +
  "</div>";
~~~

If the test card appears, JavaScript found and changed the page.

### Checkpoint 6 — render the real products

Add the displayProducts() function and call:

~~~js
displayProducts(products);
~~~

You should see four product cards.

### Checkpoint 7 — add live search

Add the input event listener. Search for phone, lap, or sne. Clear the search and confirm all cards return.

🎉 You built the core app.

---

## 🔍 Read the original files like a developer

| Observation | Lesson |
| --- | --- |
| products-grid is empty in HTML | JavaScript can generate repeated UI from data. |
| Images are in public/ | Paths must match folders and filenames. |
| inStock exists but is unused | Data can arrive before its feature. |
| CSS has cartBtn but rendered buttons do not use that ID | Selectors must match real HTML. |
| A click listener is commented out | Add to Cart is a natural next feature. |
| Image alt text is generic | Product-specific alt text is more accessible. |
| Navigation uses hash links | They are placeholders, not finished navigation. |

### Beginner upgrades

1. Correct Sneker to Sneaker.
2. Show an empty-state message when nothing matches.
3. Change the dollar sign to ₹ if appropriate.
4. Add a cart counter.
5. Disable the button when inStock is false.
6. Add product categories and category filtering.
7. Add a footer and real navigation.
8. Add focus styles to all keyboard-accessible links.

Empty state example:

~~~js
if (productsToDisplay.length === 0) {
  container.innerHTML = "<p>No products found. Try another search.</p>";
  return;
}
~~~

Cart counter starter:

~~~js
let cartCount = 0;

container.addEventListener("click", event => {
  if (event.target.matches("button")) {
    cartCount += 1;
    document.querySelector("#cartCount").textContent = cartCount;
  }
});
~~~

## 🧠 Debugging guide

When something breaks, do not guess. Read the first Console error.

### Nothing appears

- Check the script path.
- Check that products-grid exists.
- Check image names and folders.
- Check that the browser is opening the correct project folder.

### Search does not work

- Check id="searchInput".
- Check the input event listener.
- Check that the code uses product.name.

### The phone layout is too wide

- Check the viewport meta tag.
- Check the mobile media query.
- Use max-width: 100% when an element should shrink.

### CSS does nothing

- Check whether the selector matches the HTML.
- Remember: dot means class, hash means ID.
- Check whether a later rule overrides it.

## 📚 Mini glossary

| Word | Plain-English meaning |
| --- | --- |
| Element | One piece of HTML, such as a heading or image. |
| Attribute | Extra information in an opening tag, such as src or class. |
| Selector | The CSS pattern that chooses elements. |
| Property | A CSS setting, such as color or padding. |
| DOM | The browser’s JavaScript-friendly page representation. |
| Array | An ordered list of values. |
| Object | Named properties grouped together. |
| Function | A reusable block of instructions. |
| Event | Something that happens, such as typing or clicking. |
| Responsive | Able to adapt to different screen sizes. |

## ✅ Final checklist

You understand ShopEasy when you can explain:

- HTML creates the page structure and an empty product grid.
- CSS turns the grid into four, two, or one column.
- JavaScript stores products in objects inside an array.
- displayProducts() converts data into cards.
- The input event runs while the visitor types.
- filter() returns only products whose names contain the search text.

Keep experimenting: **change → run → observe → explain**. That loop is the heart of learning to code.

---

Made for beginners who want to understand the browser, one small feature at a time. 💚

