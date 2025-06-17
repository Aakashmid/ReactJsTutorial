import { useEffect, useState } from "react";


import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    if (data) {
      setLoading(false);
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div className="bg-gray-100 ">
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Spinner/>          
        </div>
      ) : (
        <div className="min-h-[80vh]  grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl gap-2 mx-auto p-3">
          {products && products.length
            ? products.map((productItem) => (
              <ProductCard key={productItem.id} product={productItem} />
            ))
            : null}
        </div>
      )}
    </div>
  );
}