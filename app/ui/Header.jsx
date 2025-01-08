
import Logo from "./Logo";
import ThemeBtn from "./ThemeBtn";

export default function Header() {

   return (
      <div className="flex flex-col w-full">
         <div className="flex justify-between items-center sm:px-8">
            <Logo />
            <ThemeBtn />
         </div>
      </div>
   )
}
