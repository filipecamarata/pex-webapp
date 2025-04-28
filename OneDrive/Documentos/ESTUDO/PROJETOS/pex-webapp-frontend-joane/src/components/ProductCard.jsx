// cartões de produtos com as variaveis: name,description, e price;

const ProductCard = ({ product }) => {
  return (
    <div className=" md:grid-cols-3 gap-6">
      <div className="bg-white flex-colun rounded-lg overflow-hidden shadow-lg">
        <h3 className="text-1xl font-bold text-center mb-10 ">{product.name}</h3>
        <p>{product.description}</p>
        <p>R${product.price}</p>

      </div>
    </div>
  );
};
export default ProductCard;
