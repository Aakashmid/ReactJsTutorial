import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";

export default function CartCard({ cartItem }) {
    const dispatch = useDispatch();
    function handleRemoveFromCart() {
        dispatch(removeFromCart(cartItem.id));
    }

    return (
        <>
            <div className="flex items-center p-6 justify-between bg-gradient-to-r from-red-500 to-red-600 mt-3 mb-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex p-4">
                    <img
                        src={cartItem?.image}
                        className="h-28 rounded-lg object-cover shadow-md hover:scale-105 transition-transform duration-300"
                        alt={cartItem?.title}
                    />
                    <div className="ml-10 self-start space-y-4">
                        <p className="text-white font-extrabold text-lg">${cartItem?.price}</p>
                        <h1 className=" text-white font-bold tracking-wide">{cartItem?.title}</h1>
                    </div>
                </div>
                <div>
                    <button
                        onClick={handleRemoveFromCart}
                        className="cursor-pointer bg-red-950 text-white border-2 border-red-100 rounded-lg font-medium px-4 py-2 hover:bg-red-900 transition-colors duration-300 transform hover:scale-105 active:scale-95"
                    >
                        Remove From Cart
                    </button>
                </div>
            </div>
        </>
    );
}