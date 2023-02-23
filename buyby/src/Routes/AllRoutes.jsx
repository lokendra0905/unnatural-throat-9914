import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Mens from "../Components/Mens/Mens";
import Women from "../Components/Women/Women";
import Kids from "../Components/Kids/Kids";
import Beauty from "../Components/Beauty/Beauty";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Mens" element={<Mens />} />
      <Route path="/Women" element={<Women />} />
      <Route path="/Kids" element={<Kids />} />
      <Route path="/Beauty" element={<Beauty />} />
    </Routes>
  );
}
export default AllRoutes;
