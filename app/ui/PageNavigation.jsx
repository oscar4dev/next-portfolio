'use client'

import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageNavigation() {

   const pathname = usePathname()

   return (
      <nav className="mt-1">
         <ul className="flex items-center justify-between w-5/6 mx-auto">
            <li className="w-[33%] h-10 flex items-center justify-center">
               <Link 
                  href={ '/' }
                  className={ `w-full h-full flex items-center justify-center hover:bg-indigo-200 dark:hover:bg-slate-700 duration-[0.5s] ease-in-out ${ pathname === '/' ? 'bg-indigo-200 dark:bg-slate-700' : '' }` }
               >
                  <IoHomeOutline />
               </Link>
            </li>
            <li className="w-[33%] h-10 flex items-center justify-center ">
               <Link 
                  href={ '/projects' }
                  className={ `w-full h-full flex items-center justify-center hover:bg-indigo-200 dark:hover:bg-slate-700 duration-[0.5s] ease-in-out ${ pathname === '/projects' ? 'bg-indigo-200 dark:bg-slate-700' : '' }` }
               >
                  <AiOutlineFundProjectionScreen />
               </Link>
            </li>
            <li className="w-[33%] h-10 flex items-center justify-center">
               <Link 
                  href={ '/contact' }
                  className={ `w-full h-full flex items-center justify-center hover:bg-indigo-200 dark:hover:bg-slate-700 duration-[0.5s] ease-in-out ${ pathname === '/contact' ? 'bg-indigo-200 dark:bg-slate-700' : '' }` }
               >
                  <MdOutlineContactPage />
               </Link>
            </li>
         </ul>
      </nav>
   )
}
