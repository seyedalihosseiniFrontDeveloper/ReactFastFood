import "./App.css";
import Header from "./Components/Header/header";
import CategoryList from "./Components/CategoryList/categoryList";
import { useState } from "react";
import Loading from "./Components/Loading/loading";
import FastFoodList from "./Components/FastFoodList/fastFoodList";
import SearchBar from "./Components/SearchBar/searchBar";
import notFount from "./assets/images/404.png";
import useAxios from "./Services/useAxios";

function App() {
  const [url, setUrl] = useState("/FastFood/list");
  const [fastFoodItems, , loading] = useAxios({
    url,
  });
  const filterItems = (categoryId) => {
    setUrl(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`);
  };

  const SearchItems = (term) => {
    setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    if (fastFoodItems.length === 0) {
      return (
        <>
          <section className="alert alert-warning text-center">
            برای کلید واژه فوق هیچ داده ایی یافت نشد
          </section>
          <img
            className="mx-auto mt-5 d-block fade-in-horiz"
            src={notFount}
            alt="notFount"
          />
        </>
      );
    }
    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };

  return (
    <>
      <Header />
      <CategoryList filterItems={filterItems}>
        <SearchBar SearchItems={SearchItems} />
      </CategoryList>
      <section className="container mt-4">{renderContent()}</section>
    </>
  );
}

export default App;
