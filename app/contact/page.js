import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import PageNavigation from "../ui/PageNavigation";

export const metadata = {
   title: 'Contact'
}

export default function Page() {
   return (
      <main className="lg:max-w-[1024px] lg:mx-auto">
         <PageNavigation />

         <div className="space-y-2 px-8 py-8">
            <p className="flex items-center gap-2">
               <span><MdOutlineMail /></span>
               <span>: ausker55@yahoo.com</span>
            </p>
            <p className="flex items-center gap-2">
               <span><FaGithub /></span>
               <Link
                  href={ 'https://github.com/oscar4dev' }
                  target="_blank"
                  className="text-blue-500 underline"
               >
                  : github.com/oscar4dev
               </Link>
            </p>
            <p className="flex items-center gap-2">
               <span><FaLinkedin /></span>
               <Link
                  href={ 'https://www.linkedin.com/in/oscar-uche-902a64301/' }
                  target="_blank"
                  className="text-blue-500 underline"
               >
                  : linkedin.com/in/oscar-uche-902a64301/
               </Link>
            </p>
         </div>
      </main>
   )
}
