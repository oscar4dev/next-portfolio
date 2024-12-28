'use client'

import { useEffect, useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

export default function ThemeBtn() {

   const [theme, setTheme] = useState('light')

   useEffect(() => {
      document.documentElement.className = theme
      localStorage.setItem('theme', theme)
   }, [theme])

   function toggleTheme () {
      setTheme((cur) => {
         return cur === 'light' ? 'dark' : 'light'
      })
   }

   return (
      <button
         className="border text-lg h-9 aspect-square flex items-center justify-center"
         onClick={ toggleTheme }
      >
         {
            theme === 'light' 
               ? <FaLightbulb /> 
               : <span className="hover:text-slate-50 duration-[0.5s] ease-in-out">
                     <FaRegLightbulb />
                  </span>
         }
      </button>
   )
}
