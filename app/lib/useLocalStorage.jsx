'use client'

import { useEffect, useState } from 'react'

export default function useLocalStorage(key, defaultValue) {

   const [theme, setTheme] = useState(() => { 
      let currentValue;

      try {
         currentValue = JSON.parse(
            localStorage.getItem(key) || stringify(defaultValue)
         )
         
      } catch (error) {
         console.log(error);
         currentValue = defaultValue
      }

      return currentValue
   })

   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(theme))
   }, [key, theme])

   return { theme, setTheme }
}

