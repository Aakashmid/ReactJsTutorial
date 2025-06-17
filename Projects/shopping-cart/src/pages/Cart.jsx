import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "../components/CartCard";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);  // total cost of cart 

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 py-8">
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto gap-8 px-4">
            <div className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
              {cart.map((cartItem) => (
                <CartCard cartItem={cartItem} key={cart.id}/>
              ))}
            </div>
            <div className="w-full md:w-[350px] h-fit">
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <h1 className="font-bold text-2xl text-red-800 border-b pb-4">
                  Your Cart Summary
                </h1>
                <div className="space-y-3">
                  <p className="flex justify-between items-center">
                    <span className="text-gray-800 font-semibold">Total Items</span>
                    <span className="text-lg">{cart.length}</span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="text-gray-800 font-semibold">Total Amount</span>
                    <span className="text-lg font-bold text-red-800">${totalCart.toFixed(2)}</span>
                  </p>
                </div>
                <button className="cursor-pointer w-full bg-red-800 text-white py-3 rounded-md font-semibold hover:bg-red-900 transition-colors mt-4">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-2xl mb-4">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-red-800 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-900 transition-colors">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}