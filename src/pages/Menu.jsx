import Products from "../components/Products";

function Menu() {
  return (
    <div className="">
      <Products />
      <div className="text-center mt-5">
      <button className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md hover:bg-amber-100 transition duration-300">
        veja mais
      </button>
      </div>
    </div>
  );
}
export default Menu;
