import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ProductCard from "./prod";
import { useLocation } from "react-router-dom";
import { tablet } from "../responsive";

const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${tablet({ gridTemplateColumns: "1fr", padding: "1rem" })}
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
  background-color: ${(props) =>
    props.active ? "var(--dark-grey)" : "#f9ffb9"};
  color: ${(props) => (props.active ? "#f9ffb9" : "var(--dark-grey)")};
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
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const location = useLocation()
    .pathname.toLocaleLowerCase()
    .includes("/productlist");

  // Fetch products based on category
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          categ
            ? `https://polarized-store-api.onrender.com/api/products?tags=${categ}`
            : "https://polarized-store-api.onrender.com/api/products"
        );
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, [categ, location]);

  // Filter products based on filter criteria
  useEffect(() => {
    const filterProducts = () => {
      if (categ) {
        setFilteredProducts(
          products.filter(
            (item) =>
              item.category == categ || item.tags?.join("").includes(categ)
          )
        );
      } else {
        setFilteredProducts(products);
      }
    };
    filterProducts();
  }, [filter, categ, products]);

  // Sort products based on criteria
  useEffect(() => {
    if (sort === "Newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = location
    ? filteredProducts.slice(startIndex, endIndex)
    : filteredProducts.slice(0, 3);

  return (
    <section>
      <Container>
        {displayedProducts ? (
          displayedProducts.map((item) => (
            <ProductCard product={item} key={item._id} />
          ))
        ) : (
          <h1> Loading ... </h1>
        )}
      </Container>
      {location && (
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
