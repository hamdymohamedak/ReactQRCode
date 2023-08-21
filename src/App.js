import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import QrcodeStyle from "./QrcodeStyle";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QrcodeStyle" element={ <><QrcodeStyle /></> } />
      </Routes>
    </>
  );
}

export default App;
