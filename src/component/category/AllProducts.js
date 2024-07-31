import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addItem } from "../store/store.js";
import { Link, Outlet } from "react-router-dom";
import Pagination from "../Pagination.js";

export default function AllProducts({ userLoggedIn }) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(products.length / postPerPage);

  // Products Fetching
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/getAdds");
        setProducts(response.data);
      } catch (error) {
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
        toast.error("You Have To Login First");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <section>
      <div className='mx-auto  max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <header>
          <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
            All Products
          </h2>
        </header>
        <div className='mt-8 sm:flex sm:items-center sm:justify-between'>
          <div className='hidden sm:block'>
            <label htmlFor='SortBy' className='sr-only'>
              SortBy
            </label>

            <select
              id='SortBy'
              className='h-10 rounded border-gray-300 text-sm'>
              <option>Sort By</option>
              <option value='Price, DESC'>Price, DESC</option>
              <option value='Price, ASC'>Price, ASC</option>
            </select>
          </div>
        </div>

        <ul className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {products.length == 0 ? (
            <div>
              <h1>No Products Found</h1>
            </div>
          ) : (
            currentPosts.map((product) => {
              return (
                <li key={product._id}>
                  <div className='group  border-slate-950 relative'>
                    <a
                      href='#'
                      className='group block shadow-md overflow-hidden'>
                      <Link to={`/products/${product._id}`}>
                        <img
                          src={`/${product.image}`}
                          alt={product.title}
                          // className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[250px]"
                          className='h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72'
                        />
                      </Link>

                      <div className='relative bg-white  p-3'>
                        <h3 className='text-md font-semibold text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                          {product.title}
                        </h3>

                        <p className='mt-2'>
                          <span className='sr-only'> Regular Price </span>

                          <span className='tracking-wider text-md font-semibold text-gray-900'>
                            ${product.price}{" "}
                          </span>
                        </p>
                      </div>
                    </a>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className='block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105'>
                      Add to Cart
                    </button>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}></Pagination>

      <Outlet />
    </section>
  );
}
