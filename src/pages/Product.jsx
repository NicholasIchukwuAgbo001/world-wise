import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>This is the product page</h1>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Product;
