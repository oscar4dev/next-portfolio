'use client'

import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {

   function handleScrollToTop () {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      })
   }

   return (
      <button 
         onClick={ handleScrollToTop }
         className="bg-indigo-200 p-3 hover:bg-indigo-300 dark:text-slate-900 duration-[0.5s] ease-in-out"
      >
         <FaArrowUp />
      </button>
   )
}
