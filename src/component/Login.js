import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ SetUserLoggedIn }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  let toPage = useNavigate();

  // ++++++++++++++++++++++++++++++++++++++++++++++++
  // Submit Function

  const handleLogin = async (auth) => {
    try {
      const res = await axios.post("/login", auth);
      console.log(res.data);
      toast.success(res.data.message);
      reset();
      SetUserLoggedIn(res.data.user);
      localStorage.setItem("token", res.data.token);
      toPage("/");
    } catch (error) {
      // if (error) {
      // toast.error(error.data.message ?? "An error occurred during login.");
      // } else if (error.request) {
      // toast.error("No response from server. Please try again later.");
      // }
      console.log(error);
    }
  };
  // ++++++++++++++++++++++++++++++++++++++++++++++++

  return (
    <div>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg'>
          <h1 className='text-center text-2xl font-bold text-600 sm:text-3xl'>
            Welcome to Shoe Store 👟
          </h1>

          <p className='mx-auto mt-4 max-w-md text-center text-gray-500'>
            Get started today
          </p>

          <form
            onSubmit={handleSubmit(handleLogin)}
            className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'>
            <p className='text-center text-lg font-medium'>
              Sign in to your account
            </p>

            <div>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>

              <div className='relative'>
                <input
                  {...register("Email", { required: true })}
                  type='email'
                  className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                  placeholder='Enter email'
                />

                <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='size-4 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>

              <div className='relative'>
                <input
                  {...register("Password", { required: true })}
                  type='password'
                  className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                  placeholder='Enter password'
                />

                <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='size-4 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
              type='submit'
              className='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'>
              Sign in
            </button>

            <p className='text-center text-sm text-gray-500'>
              No account?
              <Link to={"/register"} className='underline'>
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
