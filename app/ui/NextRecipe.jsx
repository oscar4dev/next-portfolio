import Image from "next/image";

export default function NextRecipe() {
   return (
      <div className="h-[490px] mb-8 max-w-[350px] mx-auto sm:max-w-[32%]">
         <p className="text-center font-bold mb-4">Next-Recipe</p>

         <div className="h-[40%] w-full relative">
            <Image
               src={'/next-recipe.PNG'}
               alt="screenshot of Next-Recipe app"
               fill
               priority
               sizes="50vh"
            />
         </div>

         <div className="h-[50%] flex flex-col justify-evenly">
            <div>
               <p className="text-slate-500 text-sm">Description</p>
               <p>
                  A recipe browsing application built with
                  Next.js. This application allows users
                  to explore and learn recipes for various
                  types of dishes.
               </p>
            </div>
            <a
               href="https://next-recipe001.vercel.app/"
               target="_blank"
               className="bg-indigo-500 w-full text-center text-slate-50 text-sm py-2 hover:bg-indigo-200 hover:text-slate-900 duration-300 ease-in-out mb-4 dark:bg-slate-800 dark:hover:text-slate-50 dark:hover:bg-slate-600"
            >
               View demo &#8599;
            </a>
            <a
               href="https://github.com/oscar4dev/next-recipe"
               target="_blank"
               className="bg-indigo-500 w-full text-center text-slate-50 text-sm py-2 hover:bg-indigo-200 hover:text-slate-900 duration-300 ease-in-out dark:bg-slate-800 dark:hover:text-slate-50 dark:hover:bg-slate-600"
            >
               See source code &#8599;
            </a>
         </div>
      </div>
   )
}
