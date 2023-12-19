const FiturCard = ({ FiturName, Img, StatusOpenlist }) => {

   return (
      <>
         <div className=" flex gap-5 items-center mb-3 cursor-pointer py-2 border-b-4" onClick={() => StatusOpenlist()}>
            <div className="rounded-[200px] bg-yellow-400 w-[50px] h-[50px] flex justify-center items-center">
               {Img}
            </div>
            <div>{FiturName}</div>
         </div>
      </>
   );
};

export default FiturCard;
