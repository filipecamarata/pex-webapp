import MenuSection from '../components/MenuSection.jsx';


function Menu() {
  const products = [ //products: id, name, description e price
    { id: 1, name: "Café Expresso", description: "feito com grão selecioandos", price: 5.00 },
    { id: 2, name: "empada de frango", description: "Clássico salgado brasileiro.", price: 14.00 },
    { id: 3, name: "Bolo de ameixa", description: "feito com...", price: 10.00 },
  ];
  
  return (
    <div className="bg-black/60 p-8 rounded-xl max-w-xl max-h-xl mx-auto mt-10 mb-30">
      <h2 className="text-white text-3xl font-bold text-center mb-10">
        Nosso Menu
      </h2> 
      
      <div className='flex flex-col md:flex-row gap-8 justify-center items-start'>
      <MenuSection title="Bebidas" products={products} categoryImage="https://i.pinimg.com/736x/36/db/46/36db460b06e5a9a5b5342b8218cae081.jpg"/>
      <MenuSection title="Salgados" products={products} categoryImage="https://i.pinimg.com/736x/93/41/d1/9341d15a07ea4362937eb305e40bc49f.jpg"/>
      <MenuSection title="Sobremesas" products={products} categoryImage="https://i.pinimg.com/736x/ea/51/0b/ea510bf8124e9f8177e39abd967dce97.jpg"/>
      </div>
      <div className="text-center mt-5">
      <button className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md hover:bg-amber-100 transition duration-300">
        veja mais
      </button>
      </div>
    </div>
  );
}
export default Menu;
