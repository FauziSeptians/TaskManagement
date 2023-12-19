import { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../SideBar";

const Layout = ({ children }) => {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   console.log(sidebarOpen);
   return (
      <>
         <div>
            <Navbar statusSidebar={() => {
                sidebarOpen == true ? setSidebarOpen(false) : setSidebarOpen(true);
            }}></Navbar>
            <div className="w-full flex">
               {sidebarOpen && <Sidebar></Sidebar>}
               <div className=" w-full px-10 py-10 h-screen">
                  {children}
               </div>
            </div>
         </div>
      </>
   );
};

export default Layout;
