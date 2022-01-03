const Home = (props) => {
  console.log("Home", props);
  const { addToCartHandler, cardData } = props || {};
  return (
    <>
      <h1>This is my Home Component</h1>
      <div className="cart">
        <span id="answ">{cardData?.cardItems?.cardData?.length}</span>
        <img className="cartimg" src="../cart.webp" />
      </div>
      <div className="main-container-wrapper">
        <div className="product">
          <img className="img" src="../logo192.png" />
          <div className="child-container">
            <span className="price">1000</span>
            <button
              onClick={() =>
                addToCartHandler &&
                addToCartHandler({ price: 1000, name: "Logo" })
              }
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* Answer {cardData?.cardItems?.cardData?.length}&nbsp;&nbsp; */}
        {/* {cardData?.cardItems?.cardData[0].price *
          cardData?.cardItems?.cardData?.length} */}
      </div>
    </>
  );
};
export default Home;
