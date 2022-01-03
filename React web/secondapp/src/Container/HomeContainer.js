import { connect } from "react-redux";
import Home from "../Components/home";
import { addToCart } from "../Service/actions/actions";

//  export default Home;

const mapStateToProps = (state) => ({
  cardData: state
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
