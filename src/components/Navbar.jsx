import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-emerald-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1>casa tua café</h1>
        <nav>
          <ul className="flex space-x-10 font-medium">
            <li>
              <Link to="/" className="text-lime-50 hover:underline transition duration-300 ease-in-out">home</Link>
            </li>
            <li>
              <Link to="/menu" className="text-lime-50 hover:underline transition duration-300 ease-in-out">menu</Link>
            </li>
            <li>
              <Link to="/contact" className="text-lime-50 hover:underline transition duration-300 ease-in-out">contato</Link>
            </li>
            <li>
              <Link to="/login" className="text-lime-50 hover:underline transition duration-300 ease-in-out"> login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
