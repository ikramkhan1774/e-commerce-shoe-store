import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function CreateAdd() {
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function postAdd(data) {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("quantity", data.quantity);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("image", data.Image[0]); // Assuming data.Image is an array of files

    axios
      .post("/createAdd", formData)
      .then((res) => {
        console.log(res);
        toast.success("Post Created Successfully");
        reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to create post");
      });
  }

  return (
    <div>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg text-center'>
          <h1 className='text-2xl font-bold sm:text-3xl'>
            Add a New Product/Add
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(postAdd)}
          className='mx-auto mb-0 mt-8 max-w-md space-y-4'>
          <div>
            <label htmlFor='title' className='sr-only'>
              Title
            </label>
            <div className='relative'>
              <input
                {...register("title", {
                  required: true,
                })}
                type='text'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder='Enter Title'
              />
            </div>
          </div>

          <div>
            <label htmlFor='description' className='sr-only'>
              Description
            </label>
            <div className='relative'>
              <input
                {...register("description", {
                  required: true,
                })}
                type='text'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder='Enter Description'
              />
            </div>
          </div>

          <div>
            <label htmlFor='price' className='sr-only'>
              Price
            </label>
            <div className='relative'>
              <input
                {...register("price", {
                  required: true,
                })}
                type='text'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder='Enter Price'
              />
            </div>
          </div>

          <div>
            <label htmlFor='price' className='sr-only'>
              Quantity
            </label>
            <div className='relative'>
              <input
                {...register("quantity", {
                  required: true,
                })}
                type='number'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder='Enter Quantity'
              />
            </div>
          </div>

          <div>
            <label htmlFor='HeadlineAct' className='sr-only'>
              Category
            </label>
            <select
              {...register("category", {
                required: "Please select a category",
              })}
              name='category'
              id='HeadlineAct'
              className='w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm mt-1.5 text-gray-700 sm:text-sm'>
              <option value=''>Please select a Category</option>
              <option value='mens_shoes'>Men's Shoes</option>
              <option value='womens_shoes'>Women's Shoes</option>
              <option value='kids_shoes'>Kid's Shoes</option>
              <option value='bags'>Bags</option>
            </select>
            {errors.category && (
              <p className='text-red-500 text-sm'>{errors.category.message}</p>
            )}
          </div>

          <div>
            <label htmlFor='image' className='sr-only'>
              Image
            </label>
            <div className='relative'>
              <input
                {...register("Image", {
                  required: true,
                })}
                type='file'
                accept='image/*'
                capture='user'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder='Upload File'
              />
            </div>
          </div>
          <div className='flex items-center justify-around'>
            <button
              type='submit'
              className='inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'>
              Post Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
