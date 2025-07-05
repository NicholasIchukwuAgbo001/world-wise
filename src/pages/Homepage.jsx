import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

const Homepage = () => {
  return (
    <div>
      <PageNav />  
      <AppNav /> 
      <h1>WorldWise</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
};

export default Homepage;

