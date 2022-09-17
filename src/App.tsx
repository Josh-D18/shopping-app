import { Routes, Route } from "react-router-dom";
import Home from "./components/Routes/Home";
import Navigation from "./components/Routes/Navigation";
import Authentication from "./components/Routes/Authentication";
import Shop from "./components/Routes/Shop";

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
