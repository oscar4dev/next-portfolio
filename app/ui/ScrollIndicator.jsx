'use client'

import { useEffect, useState } from "react"

export default function ScrollIndicator() {

   const [scrollPercent, setScrollPercent] = useState(0)

   function handleScrollPercent () {
      const scrolled = document.body.scrollTop || document.documentElement.scrollTop

      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

      setScrollPercent(
         ((scrolled/height) * 100)
      )
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScrollPercent)

      return () => {
         window.removeEventListener('scroll', () => {})
      }
   }, [])

   return (
      <div style={ { width: `${ scrollPercent }%` } }>
         <div
            className="h-[4px] bg-red-500"
         ></div>
      </div>
   )
}
