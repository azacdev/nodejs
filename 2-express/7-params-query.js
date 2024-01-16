const express = require("express");
const app = express();

const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.send(
    "<h1>Home Page</h1> <a href='/api/products'>link</a> <a href='/api/products/1'>single product</a>"
  );
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.send(newProducts);
});

// app.get("/api/products/:productId", (req, res) => {
//   const { productId } = req.params;
//   const singleProduct = products.find(
//     (product) => product.id === Number(productId)
//   );
//   if (!singleProduct) {
//     return res.status(404).send("Product does not exist");
//   }

//   return res.send(singleProduct);
// });

app.get("/api/products/:productId/review/:reviewId", (req, res) => {
  console.log(req.params);
  res.send("Hello");
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  console.log(search, limit);
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search)
    );
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // return res.status(200).send("No products match you search");
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).send(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
