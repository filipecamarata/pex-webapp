import { useState } from "react";
import ProductCard from "./ProductCard";

const MenuSection = ({ title, products, categoryImage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };
  
    return (
      <div 
        className="bg-white rounded-xl overflow-hidden shadow-lg w-full md:w-[300px] cursor-pointer"
        onClick={toggleOpen}
      >
        <img 
          src={categoryImage} 
          alt={title} 
          className="w-full h-[200px] object-cover"
        />
        <h3 className="text-black text-xl font-bold text-center p-4">{title}</h3>
  
        {isOpen && (
          <div className="relative p-4">
        
            <div className="flex items-center justify-between">
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
              >
                ‹
              </button>
  
              <div className="w-52">
                <ProductCard product={products[currentIndex]} />
              </div>
  
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
              >
                ›
              </button>
            </div>
            
            
            <div className="text-center text-sm text-gray-500 mt-2">
              {currentIndex + 1} / {products.length}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default MenuSection;