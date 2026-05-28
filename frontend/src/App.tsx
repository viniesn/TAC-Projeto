import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tendencia from "./pages/Tendencia";
//import Noticia from "./pages/Noticia";//

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/tendencia" element={<Tendencia />} />S
      </Routes>

    </BrowserRouter>

  );
}

export default App;