import { Routes, Route } from "react-router-dom";
import Home from "./components/Routes/Home";
import Navigation from "./components/Routes/Navigation";
import Authentication from "./components/Routes/Authentication";

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
        <Route path="auth" element={<Authentication />} />
      </Routes>
    </>
  );
};

export default App;
