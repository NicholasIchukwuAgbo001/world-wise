import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>This is the Home page</h2>
      <Link to="/product">Product</Link>
    </div>
  );
};

export default Home;

