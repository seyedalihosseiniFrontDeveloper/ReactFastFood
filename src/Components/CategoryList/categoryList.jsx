import Loading from "./../Loading/loading";
import axiox from "../../Services/axios";
import { useEffect, useState } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const { data } = await axiox.get("/FoodCategory/categories");
      setCategories(data);
      setLoading(false);
    };
    fetchCategories();
  }, []);
  const renderPage = () => {
    if (loading) {
      return <Loading />;
    } else {
      return categories.map((item) => (
        <li className="nav-item" key={item.id}>
          <a href="#" className="nav-link">
            {item.name}
          </a>
        </li>
      ));
    }
  };
  return (
    <section className="container mt-n5">
      <section
        className="d-flex align-items-center bg-white rounded-3 shadow-lg py-4"
        style={{ height: "80px" }}
      >
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              همه فست فودها
            </a>
          </li>
          {renderPage()}
        </ul>
      </section>
    </section>
  );
};

export default CategoryList;
