import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { addItem } from './store/store.js';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function Cards({ userLoggedIn }) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    // Products Fetching
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("/getAdds");
                setProducts(response.data);
            } catch (error) {
                setError("Error fetching products. Please try again later.");
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    // Add to Cart Button Functionality
    const handleAddToCart = async (product) => {
        try {
            if (userLoggedIn) {
                // const response = await axios.post("/addToCart", { product, userLoggedIn });
                // console.log(response.data);
                dispatch(addItem(product)); // Dispatch to add the item to Redux store
            } else {
                toast.error("You Have To Login First")
            }
        } catch (error) {
            console.error("Error adding item to cart:", error);
        }
    };

    // Add to Favorites Button Functionality
    const handleHeartClick = (event) => {
        const svg = event.currentTarget.querySelector('svg');
        svg.style.fill = svg.style.fill === "red" ? "none" : "red";
    };

    return (
        <div className="App ps-3">
            {error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
                    {products.map((product) => (
                        <div key={product._id } className="card relative border-2">
                            <button
                                onClick={handleHeartClick}
                                className="absolute end-4 top-4 z-10 rounded-full bg-slate-200 p-1.5 text-gray-900 transition hover:text-gray-900/75"
                                aria-label="Add to Wishlist"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                            </button>
                            <Link to={`/products/${product.id}`} className="group relative block cursor-pointer overflow-hidden">

                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                                />
                            </Link>

                            <div className="relative border border-gray-100 bg-slate-200 p-6">
                                <h3 className="mt-4 text-lg font-bold text-gray-900">{product.title}</h3>
                                <p className="mt-1.5 text-md font-medium text-gray-700">${product.price}</p>
                                <p className="mt-1.5 text-md font-medium text-gray-700">{product.category}</p>
                                <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                                    >
                                        Add to Cart
                                    </button>
                                </form>
                            </div>
                        </div>
                    ))
                    }
                </div>
            )}
        </div>
    );
}
