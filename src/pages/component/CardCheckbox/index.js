import { useState } from "react";

const CardCheckBox = ({ Nama, Description, UpdateTask, idx, deleteTaskName }) => {
   const [NameTask, setNameTask] = useState("");
   const [statusData, setStatusData] = useState(false);
   function UpdateTaskName() {
      let DataNewTask = {
         NameTask: NameTask,
         idx: idx,
      };
      UpdateTask(DataNewTask);
      setStatusData(true);
   }


   console.log(NameTask);
   console.log(Nama);

   return (
      <div className="px-10 w-full h-[60px] text-[20px] bg-white border-x-slate-950 shadow-sm flex items-center justify-between rounded-xl">
         {Nama || statusData ? (
            <div className="font-light">{Nama}</div>
         ) : (
            <input
               type="text"
               className="bg-transparent h-full w-full border-none outline-none"
               placeholder="Masukan Task"
               onChange={(e) => setNameTask(e.target.value)}
            ></input>
         )}
         {Nama || statusData ? (
            <input
               type="checkbox"
               onClick={() => {
                  console.log("halloa");
               }}
            ></input>
         ) : (
            <div className="flex gap-4">
               <div
                  className="bg-green-200 cursor-pointer p-3"
                  onClick={() => UpdateTaskName()}
               >
                  Yes
               </div>
               <div
                  className="bg-yellow-200 cursor-pointer p-3"
                  onClick={() => deleteTaskName(idx)}
               >
                  No
               </div>
            </div>
         )}
      </div>
   );
};

export default CardCheckBox;
