import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tendencia from "./pages/Tendencia";
//import Noticia from "./pages/Noticia";//
import Historico from "./pages/Historicos";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/tendencia" element={<Tendencia />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;