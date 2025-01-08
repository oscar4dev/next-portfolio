import Image from "next/image";
import PageNavigation from "../ui/PageNavigation";
import NextRecipe from "../ui/NextRecipe";
import NextStore from "../ui/NextStore";

export const metadata = {
   title: 'Projects'
}

export default function Page() {
   return (
      <main className="lg:max-w-[1024px] lg:mx-auto">
         <PageNavigation />
         <h1 className="ml-4 mt-8">These are some of the projects I am working on...</h1>
         
         <div className="py-8 px-4 max-w-[1024px] sm:flex sm:items-center sm:justify-center sm:flex-wrap sm:gap-4">
           <NextRecipe />
            <NextStore />
         </div>
      </main>
   )
}
