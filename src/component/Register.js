import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  let toPage = useNavigate();
  const [marketingAccept, setMarketingAccept] = useState(false);

  // Step 3: Handle the change event to update the state
  const handleCheckboxChange = (e) => {
    setMarketingAccept(e.target.checked);
  };



  // User Registration Function
  async function registerUser(authDetails) {
    try {
      if (authDetails.Password !== authDetails.PasswordConfirmation) {
        toast.error("Password doesn't match");
        return;
      }
      console.log(authDetails);
      const res = await axios.post("/register", authDetails);
      console.log(res.data);
      toast.success(res.data.msg);
      // News Teller Function
      if (marketingAccept) {
        toast.success('NewsTeller Subscribed, Thanks');
      }
      reset();
      toPage("/login");


    } catch (error) {
      if (error.response) {
        toast.error(
          error.response.data.msg || "An error occurred during registration."
        );
      } else if (error.request) {
        toast.error("No response from server. Please try again later.");
      } else {
        toast.error("Error in setting up registration request.");
      }
      console.log(error);
    }
  }



  return (
    <section className='bg-white  overflow-hidden relative '>
      <div className='lg:grid lg:min-h-screen  lg:grid-cols-12'>
        <section className='relative flex h-32 items-end  bg-gray-900 lg:col-span-4 lg:h-full xl:col-span-6'>
          <img
            alt=''
            src='./assets/Register-Page-Img.jpg'
            className='absolute inset-0 h-full w-full object-cover opacity-80'
          />

          <div className='hidden lg:relative lg:block lg:p-12'>
            <a className='block text-white' href='#'>
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
            </a>

            <h2 className='mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl'>
              Welcome to Shoe Store 👟
            </h2>

            <p className='mt-4 leading-relaxed text-white/90'>
              Lorem, ipsum dolor sit abet consectetur adipisicing edit. Legend
              nam dolour aliquot, quibusdam aporia voluptatum.
            </p>
          </div>
        </section>

        <main className='flex items-center  justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
          <div className='max-w-xl lg:max-w-3xl'>
            <div className='relative -mt-16 block lg:hidden'>
              <Link to={"/"}
                className='inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20'
                href='#'>
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

              <h1 className='mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
                Welcome to Shoe Store 👟
              </h1>

              <p className='mt-4 leading-relaxed text-gray-500'>
                Lorem, ipsum dolor sit abet consectetur adipisicing edit. Legend
                nam dolour aliquot, quibusdam aporia voluptatum.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(registerUser)}
              className='mt-8 grid grid-cols-6 gap-6'>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='FirstName'
                  className='relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600'>
                  <input
                    {...register("FirstName", { required: true })}
                    type='text'
                    placeholder='First Name'
                    className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                  />

                  <span className='absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs'>
                    First Name
                  </span>
                </label>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='UserEmail'
                  className='relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600'>
                  <input
                    {...register("LastName", { required: true })}
                    type='text'
                    placeholder='Last Name'
                    className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                  />
                  <span className='absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs'>
                    Last Name
                  </span>
                </label>
              </div>

              <div className='col-span-6'>
                <label
                  htmlFor='UserEmail'
                  className='relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600'>
                  <input
                    {...register("Email", { required: true })}
                    type='email'
                    placeholder='Email'
                    className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                  />
                  <span className='absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs'>
                    Email
                  </span>
                </label>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='UserEmail'
                  className='relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600'>
                  <input
                    {...register("Password", { required: true })}
                    type='password'
                    placeholder='Password'
                    className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                  />
                  <span className='absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs'>
                    Password
                  </span>
                </label>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='UserEmail'
                  className='relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600'>
                  <input
                    {...register("PasswordConfirmation", { required: true })}
                    type='password'
                    placeholder='Password'
                    className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                  />
                  <span className='absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs'>
                    Password Confirmation
                  </span>
                </label>
              </div>

              <div className='col-span-6'>
                <label htmlFor='MarketingAccept' className='flex gap-4'>
                  <input
                    type='checkbox'
                    id='MarketingAccept'
                    checked={marketingAccept}
                    onChange={handleCheckboxChange}
                    name='marketing_accept'
                    className='size-5 rounded-md border-gray-200 bg-white shadow-sm'
                  />
                  <span className='text-sm text-gray-700'>
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className='col-span-6'>
                <p className='text-sm text-gray-500'>
                  By creating an account, you agree to our
                  <a href='#' className='text-gray-700 underline'>
                    {" "}
                    terms and conditions{" "}
                  </a>
                  and
                  <a href='#' className='text-gray-700 underline'>
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className='col-span-6 sm:flex sm:items-center sm:gap-4'>
                <button
                  type='submit'
                  className='inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500'>
                  Create an account
                </button>

                <p className='mt-4 text-sm text-gray-500 sm:mt-0'>
                  Already have an account?
                  <Link
                    to={"/login"}
                    href='#'
                    className='text-gray-700 underline'>
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
