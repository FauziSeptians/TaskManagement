import { useRouter } from "next/router";
import CardCheckBox from "../component/CardCheckbox";
import { useEffect, useState } from "react";

const Data = [
   {
      Task: "Mengerjakan soal leetcode",
      Description: "lorem ipsum dolor sit amet, consect",
   },
   {
      Task: "Mengerjakan soal sololearn",
      Description: "lorem ipsum dolor sit amet, consect",
   },
   {
      Task: "bermain game",
      Description: "lorem ipsum dolor sit amet, consect",
   },
];

export default function TodoList() {
   const routes = useRouter(null);

   const [DataTask, setDataTask] = useState([]);

   useEffect(() => {
      setDataTask(Data);
   }, []);

   function AddTask() {
      let ObjectData = {
         Task: null,
         Description: null,
      };
      setDataTask((prev) => [...prev, ObjectData]);
   }

   function UpdateTaskData(data) {
      console.log(data);
      let temp = DataTask;
      console.log(temp);
      console.log(temp[data.idx]);

      temp[data.idx].Task = data.NameTask;
      temp[data.idx].Description = "";
      console.log(temp);
      setDataTask((prev) => [...prev, temp]);
   }

   function deleteTask(idx) {
      console.log(idx);
      console.log(DataTask)
      let temp = DataTask;
      temp.splice(idx, 1);
      setDataTask([...temp]);
      console.log(DataTask)
   }

   console.log(DataTask);
   return (
      <section className="flex flex-col gap-3 w-full">
         <div className="flex justify-between items-center px-5">
            <div className="Header">{routes.query.index}</div>
            <div className="cursor-pointer bg-slate-600 p-3 rounded-lg text-white" onClick={() => AddTask()}>
               tambah +
            </div>
         </div>
         <div className="BodyContent flex flex-col gap-3">
            {DataTask.map((e, idx) => {
               return (
                  <CardCheckBox
                     Nama={e.Task}
                     Description={e.Description}
                     UpdateTask={(e) => UpdateTaskData(e)}
                     idx={idx}
                     deleteTaskName={(e) => deleteTask(e)}
                  ></CardCheckBox>
               );
            })}
         </div>
      </section>
   );
}
