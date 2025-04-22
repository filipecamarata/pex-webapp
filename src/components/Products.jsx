export default function Products() {
  return (
    <div className="bg-black/60 p-8 rounded-xl max-w-6xl mx-auto mt-10">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">
        Nosso Menu
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src="/cafe1.jpg"
            alt="Café Expresso"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Café coado</h3>
            <p className="text-gray-700">R$ 4,00</p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src="/cafe1.jpg"
            alt="Café Expresso"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Café Expresso</h3>
            <p className="text-gray-700">R$ 6,00</p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src="/cafe2.jpg"
            alt="Cappuccino"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Cappuccino</h3>
            <p className="text-gray-700">R$ 8,00</p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src="/cafe2.jpg"
            alt="Cappuccino"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Cappuccino</h3>
            <p className="text-gray-700">R$ 8,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
