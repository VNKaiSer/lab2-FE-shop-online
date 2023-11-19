import styled from "styled-components";
const axios = require("axios");
import Product from "./Product";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

let products = [];

axios
  .get("http://localhost:8080/api/products")
  .then((response) => {
    products = response.data;
    console.log(products); // Now products will contain the fetched data
  })
  .catch((error) => {
    console.error(error);
  });


const Products = () => {
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
