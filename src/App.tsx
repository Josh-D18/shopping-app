import { Routes, Route } from "react-router-dom";
import Home from "./components/Routes/Home";
import Navigation from "./components/Routes/Navigation";
import Signin from "./components/Routes/Signin";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Signin />} />
      </Routes>
    </>
  );
};

export default App;
