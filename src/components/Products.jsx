import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./prod";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = ({ sort, filter, categ }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          categ
            ? `http://localhost:5000/api/products?categories=${categ}`
            : "http://localhost:5000/api/products"
        );
        console.log(res.data, categ);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [categ]);
  useEffect(() => {
    categ &&
      setfilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [filter, categ, products]);
  console.log(filteredProducts, products, filter);
  useEffect(() => {
    if (sort === "newest") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilteredProducts((prev) =>
        [...prev].sort((b, a) => a.price - b.price)
      );
    }
  }, [sort]);
  return (
    <section>
      <h1>HOTEST ITEMS</h1>
      <Container>
        {categ
          ? filteredProducts.map((item) => (
              <ProductCard item={item} key={item._id} />
            ))
          : products
              .slice(0, 3)
              .map((item) => <ProductCard product={item} key={item._id} />)}
      </Container>
    </section>
  );
};

export default Products;
