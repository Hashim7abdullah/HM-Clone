import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Title from "../Title/title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { products } from "../../assets/assets";
import { useInView } from 'react-intersection-observer';

const Winter = () => {
  const componentRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [pageDirection, setPageDirection] = useState(0);

  // Memoize getItemsPerPage 
  const getItemsPerPage = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 6;
      if (window.innerWidth >= 768) return 4;
      return 2;
    }
    return 2;
  }, []);

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);

  // Optimize resize handler
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };

    const debouncedHandleResize = debounce(handleResize, 250);
    window.addEventListener('resize', debouncedHandleResize);
    
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
      debouncedHandleResize.cancel?.();
    };
  }, [getItemsPerPage]);

  // Memoize calculations
  const { totalPages, startIndex } = useMemo(() => ({
    totalPages: Math.ceil(products.length / itemsPerPage),
    startIndex: currentPage * itemsPerPage
  }), [itemsPerPage, currentPage, products.length]);

  // Memoizing visible products
  const visibleProducts = useMemo(() => 
    products.slice(startIndex, startIndex + itemsPerPage),
    [startIndex, itemsPerPage, products]
  );

  // Optimize page change handlers with scroll fix
  const handlePageChange = useCallback((newPage, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    const direction = newPage > currentPage ? 1 : -1;
    setPageDirection(direction);
    setCurrentPage(newPage);

    // Ensure the component stays in viewport
    if (componentRef.current) {
      const yOffset = -50; // Adjust this value to control scroll position
      const y = componentRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }, [currentPage]);

  const nextPage = useCallback((event) => {
    const newPage = (currentPage + 1) % totalPages;
    handlePageChange(newPage, event);
  }, [currentPage, totalPages, handlePageChange]);

  const prevPage = useCallback((event) => {
    const newPage = (currentPage - 1 + totalPages) % totalPages;
    handlePageChange(newPage, event);
  }, [currentPage, totalPages, handlePageChange]);

  // Optimized animation variants
  const containerVariants = {
    initial: (direction) => ({
      x: direction * 1000,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    },
    exit: (direction) => ({
      x: direction * -1000,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    })
  };

  const itemVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const imageVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 0.4
      }
    }
  };

  // Debounce utility function
  function debounce(func, wait) {
    let timeout;
    const executedFunction = function (...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
    
    executedFunction.cancel = function() {
      clearTimeout(timeout);
    };
    
    return executedFunction;
  }

  return (
    <div className="relative px-4 py-8" ref={componentRef}>
      <div className="mb-8" ref={ref}>
        <Title text1="Best" text2="Winter picks" />
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentPage}
          custom={pageDirection}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:px-10 relative"
        >
          {visibleProducts.map((product, index) => (
            <motion.div
              key={`${product._id}-${currentPage}`}
              className="flex flex-col items-center"
              variants={itemVariants}
              custom={index}
            >
              <motion.div 
                className="w-full aspect-[3/4] relative mb-2"
                variants={imageVariants}
              >
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>
              <p className="text-xs md:text-sm text-center line-clamp-1 mb-1">
                {product.name}
              </p>
              <p className="text-xs font-medium">
                ${(product.price / 100).toFixed(2)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {typeof window !== 'undefined' && window.innerWidth >= 1024 && (
        <>
          <button
            onClick={prevPage}
            className="absolute left-[2%] top-1/2 -translate-y-1/2 hidden lg:block"
            aria-label="Previous page"
            type="button"
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            onClick={nextPage}
            className="absolute right-[2%] top-1/2 -translate-y-1/2 hidden lg:block"
            aria-label="Next page"
            type="button"
          >
            <IoIosArrowForward size={24} />
          </button>
        </>
      )}

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={(e) => handlePageChange(i, e)}
            type="button"
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
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