import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import Home from "./Home";
import NoPage from "./NoPage";

export default function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}
