import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componenets/Home";
import Blogs from "./Componenets/Blogs";
import Form from "./Componenets/Form";
import Second from "./Componenets/Second";
import First from "./Componenets/First";
import Third from "./Componenets/Third";
import Fourth from "./Componenets/Fourth";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="form" element={<Form />} />
          <Route path="second" element={<Second />} />
          <Route path="first" element={<First />} />
          <Route path="third" element={<Third />} />
          <Route path="fourth" element={<Fourth />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);