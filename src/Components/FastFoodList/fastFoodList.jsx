import FastFoodItem from "../FastFoodItem/fastFoodItem";
const FastFoodList = ({ fastFoodItems }) => {
  let delay = 0.1;
  return (
    <section className="row">
      {fastFoodItems.map((fastFood) => {
        delay += 0.03;
        return (
          <section
            className="col-md-4 col-sm-6 mb-grid-gutter"
            key={fastFood.id}
          >
            <FastFoodItem {...fastFood} delay={delay} />
          </section>
        );
      })}
    </section>
  );
};

export default FastFoodList;
