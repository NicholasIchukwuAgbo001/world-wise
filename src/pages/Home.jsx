import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is the Home page</h1>
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
