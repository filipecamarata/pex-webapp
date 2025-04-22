import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";

//PAGINA PRINCIPAL
export default function App() {
  return (
    <Router>
      <div className="flex flex-col bg-[url('/pexels-chevanon-312418.jpg')] bg-cover bg-center min-h-screen">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}


