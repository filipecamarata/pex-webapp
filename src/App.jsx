import Navbar from "./components/Navbar";
import Products from "./components/Products.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";

//PAGINA PRINCIPAL 
export default function App() {
  return (
    <div className="bg-[url('/pexels-chevanon-312418.jpg')] bg-cover bg-center min-h-screen">
    <Navbar />
    <h1 className="text-lime-50 text-2xl font-bold  text-center pt-20">Bem vindo(a) a <span className="text-amber-100">Casa Tua Café</span></h1>
    <Products/>

    </div>
  );
}

//alterações: navbar, background e home.