import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h2>This is the product page</h2>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Product;
