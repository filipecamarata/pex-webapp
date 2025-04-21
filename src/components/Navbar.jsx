
export default function Navbar() {
  return (
    <header className="bg-emerald-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1>casa tua café</h1>
        <nav>
          <ul className="flex space-x-6 font-medium">
            <li>
              <a href="#menu" className="text-lime-50 hover:underline transition duration-300 ease-in-out">sobre</a>
            </li>
            <li>
              <a href="#sobre" className="text-lime-50 hover:underline transition duration-300 ease-in-out">menu</a>
            </li>
            <li>
              <a href="#contado" className="text-lime-50 hover:underline transition duration-300 ease-in-out">contato</a>
            </li>
            <li>
              <a href="login" className="text-lime-50 hover:underline transition duration-300 ease-in-out"> login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
