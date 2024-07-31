import { Link } from "react-router-dom";

export default function Navbar({ userLoggedIn, SetUserLoggedIn }) {
  return (
    <header class='bg-slate-200'>
      <div class='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div class='flex h-16 items-center justify-between'>
          <div class='md:flex md:items-center md:gap-12'>
            <Link to={"/"} class='block text-teal-600' href='#'>
              <span className='sr-only'>Home</span>
              <svg
                className='h-8 sm:h-10'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 64 64'>
                <path
                  fill='#212326'
                  d='M4.7 13.5C2.1 13.3 2 18.6 2 21.2c.1 4.8 12.1 14.5 13.9 14.3c1.3-.1 2.8-1.8 4.7-1.5c0 0-11-20.2-15.9-20.5m18 19.5c-2.7 2.7-.7 13.3 1.7 16.3C30 56.2 46 62 54.1 62c3.9 0 7.4-1.9 7.8-5.2c.6-4.6-3.2-12.8-8.2-15.6c-7.4-4.1-25.2-14.3-31-8.2'
                />
                <path
                  fill='#3d4347'
                  d='M7.4 2.6C4.2 5.4 2.8 14.8 3.9 18.8c1.2 4.3 10.7 9 13.2 12.6c2.7 3.8 4.7 13.6 8.3 16.5C31.9 53.4 50 60.6 58 57.7C69.3 53.5 41.8 21.9 31.2 15C25 11 11.4-.9 7.4 2.6'
                />
                <path
                  fill='#fff'
                  d='M25.9 45.8c2.8 1.9 5.8 3.5 8.9 4.9c3.1 1.4 6.3 2.6 9.5 3.5c1.6.5 3.3.9 4.9 1.1c1.6.3 3.3.4 4.9.2c1.6-.2 3.1-.8 3.4-2.1c.4-1.3 0-2.9-.6-4.4c-.2-.5 0-1 .5-1.2c.5-.2 1 0 1.2.5c.3.8.6 1.7.7 2.6c.1.9.1 1.9-.3 2.9s-1.2 1.8-2.1 2.2c-.9.4-1.8.6-2.7.7c-1.8.1-3.5-.1-5.2-.4c-1.7-.3-3.4-.8-5-1.4c-3.3-1.1-6.4-2.4-9.5-4c-2.9-1.4-5.9-3.1-8.6-5.1M15 29.2C22.7 40.7 26.9 42 32.6 44c1.7.6 5.7 1.1 7.2 0c1.6-1.2 1.8-7.8 1.8-7.8s7.8 4.4 9.8 2.9c2.1-1.6-9-14.2-9-14.2s3 4.3 1.8 4.7C38 31.7 33.3 17.8 31 14.9c-.7-.9-2-2.2-3.1-2.2c-1.6-.1-7 .9-6.9 2.5c.1 1.3 3.1-.6 4.2.2c2.9 2.2 7.7 10.3 7.4 13.9c-.2 2.4-4.8 9-7.2 9.4C24 39 15 29.2 15 29.2'
                />
                <path
                  fill='#a6876c'
                  d='M8.2 2.8C6.1 4.1 7 10.3 8 12.6c.8 1.7 3.9 4.5 5.7 5c2.6.7 10.5-3.6 10.5-3.6s5.2 1.4 4.2.5C25.3 11.4 11 1.1 8.2 2.8'
                />
                <g fill='#212326'>
                  <path d='M58.6 39.4h-.2c-.2 0-5.3-1-8.3-4.6c-2.1-2.5-3.3-5.4-4.4-8.2c-1.6-3.9-3.1-7.7-7.2-9.9c-1.9-1.1-4.1-.4-4.1-.4c-.5.2-1.1-.1-1.3-.6c-.2-.5.1-1.1.6-1.3c.1 0 3-1 5.7.5c4.7 2.6 6.4 6.8 8.1 10.9c1.1 2.6 2.2 5.4 4.1 7.7c2.5 3 7.1 3.9 7.1 3.9c.5.1.9.6.8 1.2c0 .5-.4.8-.9.8' />
                  <path d='M29.5 30.2c-.2 0-.4-.1-.6-.2c-.4-.3-.5-1-.2-1.4c2.1-2.7 7.6-5.9 13.4-3c.5.2.7.8.5 1.3c-.2.5-.8.7-1.3.5c-5.3-2.6-9.8 1-11 2.5c-.2.1-.5.3-.8.3' />
                  <path d='M27.3 26.9c-.2 0-.4-.1-.6-.2c-.4-.3-.5-1-.2-1.4c2.1-2.7 7.6-5.9 13.4-3c.5.2.7.8.5 1.3c-.2.5-.8.7-1.3.5c-5.3-2.6-9.8 1-11 2.5c-.2.1-.5.3-.8.3' />
                  <path d='M25 23.5c-.2 0-.4-.1-.6-.2c-.4-.3-.5-1-.2-1.4c2.1-2.7 7.6-5.9 13.4-3c.5.2.7.8.5 1.3c-.2.5-.8.7-1.3.5c-5.3-2.6-9.8 1-11 2.5c-.2.2-.5.3-.8.3' />
                  <path d='M22.9 20.9c-.2 0-.4-.1-.6-.2c-.4-.3-.5-1-.2-1.4c2.1-2.7 7.6-5.9 13.4-3c.5.2.7.8.5 1.3c-.2.5-.8.7-1.3.5c-5.3-2.6-9.8 1-11 2.5c-.2.2-.5.3-.8.3' />
                  <path d='M20.7 18c-.2 0-.4-.1-.6-.2c-.4-.3-.5-1-.2-1.4c2.1-2.7 7.6-5.9 13.4-3c.5.2.7.8.5 1.3c-.2.5-.8.7-1.3.5c-5.3-2.6-9.8 1-11 2.5c-.2.2-.5.3-.8.3' />
                  <path d='M15.8 56.2c-3.7 0-7.4-1.2-7.6-1.3c-.5-.2-.8-.7-.6-1.3s.7-.8 1.3-.6c2.2.7 8.7 2.2 11.2.1c2.9-2.4 2-6.1.1-12c-1.8-5.7-3.7-12.1-1.2-18.7c.6-1.5 2.3-7.1 2.3-7.2c.2-.5.7-.8 1.2-.7c.5.2.8.7.7 1.2c-.1.2-1.7 5.7-2.3 7.3c-2.3 6-.4 12 1.3 17.4c1.7 5.6 3.4 10.9-.8 14.2c-1.5 1.3-3.5 1.6-5.6 1.6' />
                </g>
              </svg>
            </Link>
          </div>

          <div class='hidden md:block'>
            <nav aria-label='Global'>
              <ul class='flex items-center gap-6 text-sm'>
                <li>
                  <Link
                    to={"/"}
                    class='text-gray-1000 transition hover:text-gray-500/75'
                    href='#'>
                    {" "}
                    Home{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/products"}
                    class='text-gray-1000 transition hover:text-gray-500/75'
                    href='#'>
                    {" "}
                    New Arrival{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/products"}
                    class='text-gray-1000 transition hover:text-gray-500/75'
                    href='#'>
                    {" "}
                    Features{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/products"}
                    class='text-gray-1000 transition hover:text-gray-500/75'
                    href='#'>
                    {" "}
                    Collections{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/products"}
                    class='text-gray-1000 transition hover:text-gray-500/75'
                    href='#'>
                    {" "}
                    Categories{" "}
                  </Link>
                </li>
                {userLoggedIn && userLoggedIn.Admin === true ? (
                  <li>
                    <Link
                      to='/admin'
                      className='text-gray-1000 transition hover:text-gray-500/75'>
                      Admin Panel
                    </Link>
                  </li>
                ) : null}

                <li>
                  <Link
                    to={"/cart"}
                    class='text-gray-1000 transition hover:text-gray-500/75'
                    href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'>
                      <path
                        fill='currentColor'
                        d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0'></path>
                    </svg>{" "}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div class='flex items-center gap-4'>
            {userLoggedIn ? (
              <Link
                to='/login'
                onClick={() => {
                  // dispatch(setCurrentUser(null))
                  SetUserLoggedIn(false);
                  localStorage.removeItem("token");
                }}
                className='rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow'>
                Logout
              </Link>
            ) : (
              <>
                <Link
                  to='/login'
                  className='rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow'>
                  Login
                </Link>
                <div className='hidden sm:flex'>
                  <Link
                    to='/register'
                    className='rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600'>
                    Register
                  </Link>
                </div>
              </>
            )}

            <div class='block md:hidden'>
              <button class='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
