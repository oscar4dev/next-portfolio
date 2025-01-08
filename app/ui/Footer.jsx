import Link from 'next/link'
import React from 'react'

export default function Footer() {

   const date = new Date().getFullYear()

   return (
      <footer className='px-8 flex flex-col bg-indigo-500 text-slate-50 justify-center items-center gap-2 py-4 sm:flex-row sm:justify-between sm:py-8'>
         <span>Copyright &copy; { date }</span>
         <Link 
            href={ 'https://github.com/oscar4dev' }
            target='_blank'
            className='text-slate-900 underline'
         >
            Oscar4dev
         </Link>
         <span>All rights reserved.</span>
      </footer>
   )
}
