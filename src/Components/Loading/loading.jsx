const Loading = ({ theme }) => {
  return (
    <section className="d-flex justify-content-center m-auto">
      <section
        className={`loading spinner-border text-${theme || "success"}`}
      ></section>
    </section>
  );
};
export default Loading;
