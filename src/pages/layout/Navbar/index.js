import Sidebar from "../SideBar";
import { useRouter } from "next/router";

const Navbar = ({statusSidebar}) => {
   const routes = useRouter();
   return (
      <>
         <div className="w-full h-[60px] bg-red-100 flex items-center">
            <div className="container mx-auto flex justify-between items-center">
               <div onClick={() => statusSidebar()} className="cursor-pointer">ii</div>
               <div onClick={() => {
                  routes.push('/');
               }} className="cursor-pointer">LOGO</div>
            </div>
         </div>
      </>
   );
};

export default Navbar;
