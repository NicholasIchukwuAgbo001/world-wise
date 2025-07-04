import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>This is the Home page</h2>

      <button>
        <Link to="/product">Product</Link>
      </button>
      <button>
        <Link to="/pricing">Pricing</Link>
      </button>
    </div>
  );
};

export default Home;
