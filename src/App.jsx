import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/style/GlobalStyle";
import DetailsPicture from "./pages/detailsPicture";
import Home from "./pages/home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/picture/:id" element={<DetailsPicture />} />
      </Routes>
    </>
  );
}

export default App;
