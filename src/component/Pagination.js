import React from "react";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  // Next Page
  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  // Prev Page
  function PrevPage() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className='mb-10 mt-4'>
      <ol className='flex  justify-center gap-1 text-xs font-medium'>
        {currentPage > 1 ? (
          <li>
            <button
              onClick={PrevPage}
              href='#'
              className='inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180'>
              <span className='sr-only'>Prev Page</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-3 w-3'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </li>
        ) : null}
        {currentPage - 1 >= 1 ? (
          <li className='block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900'>
            <button
              onClick={PrevPage}
              className='inline-flex size-8 items-center justify-center rounded border border bg-white-gray-100 text-gray-900 rtl:rotate-180'>
              {currentPage - 1}
            </button>
          </li>
        ) : null}

        <li className='block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white'>
          {currentPage}
        </li>
        {currentPage + 1 < totalPages && (
          <li className='block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900'>
            <button
              onClick={nextPage}
              className='inline-flex size-8 items-center justify-center rounded border border bg-white-gray-100 text-gray-900 rtl:rotate-180'>
              {currentPage + 1}
            </button>
          </li>
        )}
        {currentPage + 2 === 3 && currentPage + 2 < totalPages ? (
          <li className='block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900'>
            <button
              onClick={nextPage}
              className='inline-flex size-8 items-center justify-center rounded border border bg-white-gray-100 text-gray-900 rtl:rotate-180'>
              {currentPage + 2}
            </button>
          </li>
        ) : null}

        {currentPage < totalPages ? (
          <li>
            <button
              onClick={nextPage}
              className='inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180'>
              <span className='sr-only'>Next Page</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-3 w-3'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </li>
        ) : null}
      </ol>
    </div>
  );
}
