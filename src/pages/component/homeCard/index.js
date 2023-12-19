const HomeCard = ({kategori, logo}) => {
   return (
      <div className="bg-white border-x-slate-500 text-black  rounded-lg p-5 w-full flex justify-between items-center cursor-pointer">
         <div className="flex items-center gap-3">
            <div className="w-[50px] bg-green-600 h-[50px] rounded-[25px] flex justify-center items-center">{logo}</div>
            <div>{kategori}</div>
         </div>
         <div className="text-[22px]">
            {'>'}
         </div>
      </div>
   );
};

export default HomeCard;
