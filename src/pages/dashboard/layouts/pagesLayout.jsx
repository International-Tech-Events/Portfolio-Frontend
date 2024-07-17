import { PlusCircle } from 'lucide-react';

const PagesLayout = ({ headerText, buttonText, children, onClick }) => {
  return (
    <div className="p-10 flex-col gap-y-14">
      <div className="flex">
        <h1 className="text-3xl font-bold">{headerText}</h1>
        <button
          className="bg-primary text-white px-6 py-2 ml-auto rounded-lg flex gap-x-2"
          onClick={onClick}
        >
          <PlusCircle />
          {buttonText}
        </button>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default PagesLayout;

// import { PlusCircle } from 'lucide-react';

// const PagesLayout = ({ headerText, buttonText, children, onClick }) => {
//   return (
//     <div className="p-4 md:p-10 flex flex-col gap-y-14 bg-slate-700">
//       <div className="w-auto fixed top-0 left-0 right-0 z-50 bg-slate-700 shadow-md p-4 flex items-center">
//         <h1 className="text-2xl md:text-3xl font-bold text-white">
//           {headerText}
//         </h1>
//         <button
//           className="bg-primary text-white px-4 md:px-6 py-2 ml-auto rounded-lg flex items-center gap-x-2"
//           onClick={onClick}
//         >
//           <PlusCircle />
//           {buttonText}
//         </button>
//       </div>
//       <div className="mt-24">{children}</div>
//     </div>
//   );
// };

// export default PagesLayout;
