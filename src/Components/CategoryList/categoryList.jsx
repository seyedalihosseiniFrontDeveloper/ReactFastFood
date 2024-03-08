import Loading from "./../Loading/loading";
import useAxios from "./../../Services/useAxios";

const CategoryList = ({ filterItems, children }) => {
  const [categories, , loading] = useAxios({
    url: "/FoodCategory/categories",
  });

  const renderPage = () => {
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="ps-3 w-100 d-flex align-items-center justify-content-between gap-5">
        <ul className="nav">
          <li className="nav-item" onClick={() => filterItems()}>
            <a className="nav-link" href="#">
              همه فست فودها
            </a>
          </li>
          {categories.map((category) => (
            <li
              className="nav-item"
              key={category.id}
              onClick={() => filterItems(category.id)}
            >
              <a className="nav-link" href="#">
                {category.name}
              </a>
            </li>
          ))}
        </ul>
        {children}
      </div>
    );
  };
  return (
    <section className="container mt-n5">
      <section
        className="d-flex align-items-center bg-white rounded-3 shadow-lg py-4"
        style={{ height: "80px" }}
      >
        {renderPage()}
      </section>
    </section>
  );
};

export default CategoryList;
