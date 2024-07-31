import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-4 my-8'>
      <h1 className='font-extrabold text-4xl text-gray-800'>
        Checkout Failed!
      </h1>
      <p className='w-[40%] text-center'>
        Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do elusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Link to='/cart' className='bg-gray-800 px-8 py-2 text-white'>
        Go to Cart
      </Link>
    </div>
  );
};

export default Cancel;
