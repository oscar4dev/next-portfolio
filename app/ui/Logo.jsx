import Link from "next/link";
import { Cedarville_Cursive } from "next/font/google";

const cursive = Cedarville_Cursive({
   subsets: ['latin'],
   weight: '400',
})

export default function Logo() {
   return (
      <Link 
         href={ '/' }
         className="text-slate-50"
      >
         <span>Oscar Uche</span>
      </Link>
   )
}
