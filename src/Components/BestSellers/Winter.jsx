import React, { useEffect, useState } from 'react';
import Title from "../Title/title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { products } from "../../assets/assets"

const Winter = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 6;
      if (window.innerWidth >= 768) return 4;
      return 2;
    }
    return 2;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="relative px-4 py-8">
      <div className="mb-8">
        <Title text1={"Best"} text2={"Winter picks"} />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:px-10 relative">
        {visibleProducts.map((product) => (
          <div key={product._id} className="flex flex-col items-center">
            <div className="w-full aspect-[3/4] relative mb-2">
              <img
                src={product.image[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs md:text-sm text-center line-clamp-1 mb-1">
              {product.name}
            </p>
            <p className="text-xs font-medium">
              ${(product.price / 100).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows (desktop only) */}
      {window.innerWidth >= 1024 && (
        <>
          <button
            onClick={prevPage}
            className="absolute left-[2%] top-1/2 -translate-y-1/2 hidden lg:block"
            aria-label="Previous page"
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            onClick={nextPage}
            className="absolute right-[2%] top-1/2 -translate-y-1/2 hidden lg:block"
            aria-label="Next page"
          >
            <IoIosArrowForward size={24} />
          </button>
        </>
      )}

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`w-2 h-2 rounded-full ${
              currentPage === i ? 'bg-black' : 'bg-gray-300'
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Winter;