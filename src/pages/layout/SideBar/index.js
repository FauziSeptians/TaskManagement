import FiturCard from "@/pages/component/FiturCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Sidebar = () => {
   const [datasidebar, setDataSidebar] = useState([]);
   const [showListData, setShowListData] = useState([]);

   function getDataSideBar() {
      axios.get("/api/SidebarData/datasidebar").then((response) => {
         console.log(response);
         setDataSidebar(response.data.additionalData);
      });
   }

   function listOpenData(idx) {
      console.log(showListData);
      console.log(idx);
      if (showListData[idx] == null || showListData[idx] == false) {
         //  showListData[idx] = true;
         //  console.log(showListData);
         if (showListData[idx] == null || showListData[idx] == undefined) {
            let temp = showListData;
            console.log(temp);
            temp[idx] = true;
            setShowListData([...temp]);
         } else {
            let temp = showListData;
            temp[idx] = true;
            setShowListData([...temp]);
         }
      } else {
         console.log(showListData);
         if (showListData[idx]) {
            let temp = showListData;
            temp[idx] = false;
            setShowListData([...temp]);
         }
      }
      console.log(showListData);
   }

   useEffect(() => {
      getDataSideBar();
   }, []);

   console.log(showListData);

   return (
      <>
         <section className="z-[100000] w-[300px] bg-white h-screen px-5">
            <div className="BodyContent">
               {datasidebar &&
                  datasidebar.map((element, idx) => {
                     return (
                        <>
                           <FiturCard
                              Img={element.Kategories.logo}
                              FiturName={element.Kategories.KategoriesName}
                              StatusOpenlist={() => listOpenData(idx)}
                           ></FiturCard>
                           {console.log(showListData[idx])}
                           {showListData[idx] == true
                              ? element.ListItem.map((item) => (
                                   <a className="p-4 bg-yellow-500 mb-3 ml-10 flex items-center justify-between cursor-pointer" href={`/Todolist/${item.Name}`}>
                                      <div># {item.Name}</div>
                                      <div>{">"}</div>
                                   </a>
                                ))
                              : ""}
                        </>
                     );
                  })}
            </div>
         </section>
      </>
   );
};

export default Sidebar;
