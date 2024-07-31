import React from "react";
import TopSection from "./HomePage/TopSection";

export default function HomePage({ userLoggedIn, setUserLoggedIn }) {
  return (
    <div className='bg-white '>
      <TopSection userLoggedIn={userLoggedIn} />
    </div>
  );
}
