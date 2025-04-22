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
    <div className="bg-[url('/pexels-chevanon-312418.jpg')] bg-cover bg-center min-h-screen">
    <Navbar />
    <h1 className="text-lime-50 text-2xl font-bold  text-center pt-20">Bem vindo(a) a <span className="text-amber-100">Casa Tua Café</span></h1>
    <Products/>
    <div className="text-center mt-5">
      <button className="bg-amber-100 text-black font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300">
      veja mais
      </button>
      <Footer/>
    </div>
    </div>
  );
}


//adiçao de botão 'veja mais' e o footer