const productAPI = require("./productAPI"); // Adjust the case if needed

productAPI
  .getProducts()
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err);
  });
