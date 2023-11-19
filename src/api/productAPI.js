const Api = require("./setting/Api");

module.exports = {
  getProducts() {
    return Api.get("/products");
  },
};
