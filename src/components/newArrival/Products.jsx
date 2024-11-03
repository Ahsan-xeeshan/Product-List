import { useContext } from "react";
import { ProductContext } from "../../context";
import LoadingCard from "./LoadingCard";
import ProductCard from "./ProductCard";

const Products = () => {
  const { productData, loading, error } = useContext(ProductContext);

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {loading.state ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </div>
          ) : error ? (
            <p className="text-center text-red-500">
              {error.message || "Failed to load products."}
            </p>
          ) : productData && productData.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {productData.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
