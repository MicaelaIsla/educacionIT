import { useContext } from "react";
import Header from "../../components/Header/Header";
import ProductContext from "../../context/ProductContext";
import ProductList from "../../components/Product/ProductList";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Index.css";

const Index = () => {
  const productList = useContext(ProductContext);

  return (
    <>
      <Header view="index" />
      <SearchBar />
      <ProductList productList={productList} />
    </>
  );
};

export default Index;
