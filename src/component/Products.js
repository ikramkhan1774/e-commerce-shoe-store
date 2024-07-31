import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <section>
      <div>
        <div>
          <div className=' bg-white  sm:hidden'>
            <label htmlFor='Tab' className='sr-only'>
              Tab
            </label>
            <select id='Tab' className='w-full rounded-md border-gray-200'>
              <option>Men's Shoes</option>
              <option>Women's Shoes</option>
              <option>Kid's Shoes</option>
              <option>Garments</option>
              {/* <option>Bags</option> */}
            </select>
          </div>

          <div className='hidden bg-white  sm:block'>
            <div className='border-b py-4 border-gray-200'>
              <nav
                className='-mb-px justify-around  flex gap-6'
                aria-label='Tabs'>
                <Link className='hover:scale-105' to='mens_shoes'>
                  Men's Shoes
                </Link>
                <Link className='hover:scale-105' to='womens_shoes'>
                  Women's Shoes
                </Link>
                <Link className='hover:scale-105' to='kids_shoes'>
                  Kid's Shoes
                </Link>
                <Link className='hover:scale-105' to='bags'>
                  Bags
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </section>
  );
}
