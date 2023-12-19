import Image from "next/image";
import { Inter } from "next/font/google";
import HomeCard from "./component/homeCard";
import Layout from "./layout/layout";
import { useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   const [datasidebar, setDataSidebar] = useState([]);
   const [showListData, setShowListData] = useState([]);

   function getDataSideBar() {
      axios.get("/api/SidebarData/datasidebar").then((response) => {
         console.log(response);
         setDataSidebar(response.data.additionalData);
      });
   }

   useEffect(() => {
      getDataSideBar();
   }, []);

   return (
      <div className="w-full">
         <div className="body grid grid-cols-3 gap-3">
            {datasidebar.map((el) => {
               return (
                  <HomeCard
                     kategori={el.Kategories.KategoriesName}
                     logo={el.Kategories.logo}
                  ></HomeCard>
               );
            })}
         </div>
      </div>
   );
}
