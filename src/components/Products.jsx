import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ProductCard from "./prod";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 8px 12px;
  background-color: ${(props) => (props.active ? "#1d4ed8" : "#f9ffb9")};
  color: ${(props) => (props.active ? "#f9ffb9" : "#1d4ed8")};
  cursor: pointer;
`;

const PaginationBar = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <PaginationContainer>
      {[...Array(totalPages)].map((_, index) => (
        <PageButton
          key={index}
          onClick={() => onPageChange(index + 1)}
          active={currentPage === index + 1}
        >
          {index + 1}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

const Products = ({ sort, filter, categ }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Change this value based on your desired items per page
  const location = useLocation().pathname.includes("productlist");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          categ
            ? `https://polarized-store-api.onrender.com/api/products?categories=${categ}`
            : "https://polarized-store-api.onrender.com/api/products"
        );
        if (location) {
          setProducts(res.data);
        } else {
          setProducts(res.data.slice(0, itemsPerPage));
        }
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [categ]);
  console.log(products);
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

  useEffect(() => {
    if (sort === "newest") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
      setProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setfilteredProducts((prev) =>
        [...prev].sort((b, a) => a.price - b.price)
      );
      setProducts((prev) => [...prev].sort((b, a) => a.price - b.price));
    }
  }, [sort]);

  const totalPages = Math.ceil(
    (categ ? filteredProducts.length : products.length) / itemsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = categ
    ? filteredProducts.slice(startIndex, endIndex)
    : products.slice(startIndex, endIndex);

  return (
    <section>
      <Container>
        {displayedProducts.map((item) => (
          <ProductCard product={item} key={item._id} />
        ))}
      </Container>
      {totalPages > 1 && (
        <PaginationBar
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </section>
  );
};

export default Products;
