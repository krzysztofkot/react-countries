import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Browse from "./Pages/Browse";
import Homepage from "./Pages/Homepage";
import Search from "./Pages/Search";
import Country from "./Pages/Country";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path=":all" element={<Browse />} />
        <Route path=":all/:region" element={<Browse />} />
        <Route path=":all/:region/:country" element={<Country />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
