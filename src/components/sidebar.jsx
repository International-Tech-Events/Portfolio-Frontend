// import { Link } from 'react-router-dom';
// import K from '../pages/dashboard/layouts/navLinks';
// import { LogOut } from 'lucide-react';
// import { Bars3BottomLeftIcon } from '@heroicons/react/16/solid';

// const Sidebar = () => {
//   return (
//     <div className="h-screen w-[300px] bg-primary shadow-2xl flex flex-col px-8 py-12">
//       <div className="flex flex-row gap-x-14 mb-6 bg-black p-9">
//         <span className="text-2xl font-bold text-[50px] text-white mt-2">
//           ITE
//         </span>
//         <Link>
//           <Bars3BottomLeftIcon className="size-12 text-white pr-4" />
//         </Link>
//       </div>
//       <hr />
//       <div>
//         {K.NAVLINKS.map(({ icon, text, link }, index) => (
//           <Link
//             to={link}
//             key={index}
//             className="flex flex-row gap-x-20 items-center hover:bg-white hover:text-primary hover:rounded-md"
//           >
//             <span className="text-white text-[22px]">{text}</span>
//             <span className=" text-white p-2 rounded-full">{icon}</span>
//           </Link>
//         ))}
//       </div>
//       <button className="flex gap-x-4 items-center mt-auto hover:bg-white hover:text-white hover:rounded">
//         <div className="bg-primary text-white p-2 rounded-full">
//           <LogOut />
//         </div>
//         <span>Logout</span>
//       </button>
//     </div>
//   );
// };

// export default Sidebar;

// import { Link } from 'react-router-dom';
// import K from '../pages/dashboard/layouts/navLinks';
// import { LogOut } from 'lucide-react';
// import { Bars3BottomLeftIcon } from '@heroicons/react/16/solid';

// const Sidebar = () => {
//   return (
//     <div className="h-screen bg-primary shadow-2xl flex flex-col px-4 py-12 transition-all duration-300 hover:w-[300px] w-[60px]">
//       <div className="flex flex-col items-center mb-6">
//         <span className="text-2xl font-bold text-white mt-2 hidden hover:block">
//           ITE
//         </span>
//         <Link>
//           <Bars3BottomLeftIcon className="text-white pr-4" />
//         </Link>
//       </div>
//       <hr className="border-white" />
//       <div className="flex flex-col mt-6 space-y-4">
//         {K.NAVLINKS.map(({ icon, text, link }, index) => (
//           <Link
//             to={link}
//             key={index}
//             className="flex flex-row items-center p-2 text-white hover:bg-white hover:text-primary rounded-md transition-all duration-300"
//           >
//             <span className="p-2 rounded-full">{icon}</span>
//             <span className="ml-4 hidden hover:block">{text}</span>
//           </Link>
//         ))}
//       </div>
//       <button className="flex items-center mt-auto p-2 text-white hover:bg-white hover:text-primary rounded transition-all duration-300">
//         <div className="p-2 rounded-full">
//           <LogOut />
//         </div>
//         <span className="ml-4 hidden hover:block">Logout</span>
//       </button>
//     </div>
//   );
// };

// export default Sidebar;

import { Link } from 'react-router-dom';
import K from '../pages/dashboard/layouts/navLinks';
import { LogOut } from 'lucide-react';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid';

const Sidebar = () => {
  return (
    <div className="min-h-[100vh] bg-primary shadow-2xl flex flex-col px-4 py-12 transition-all duration-300 hover:w-[300px] w-[60px] group">
      {/* <div className="flex items-center mb-6"> */}
      {/* <Bars3BottomLeftIcon className="text-white pr-4 " /> */}
      <Link>
        <span className="text-2xl text-center font-bold text-white mt-2 ml-2 hidden group-hover:block">
          ITE
        </span>
      </Link>
      {/* </div> */}
      <hr className="border-white w-full" />
      <div className="flex flex-col mt-6 space-y-4">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <Link
            to={link}
            key={index}
            className="flex items-center gap-x-4 p-2 text-white hover:bg-white hover:text-primary rounded-md transition-all duration-300"
          >
            <span className="p-2 rounded-full">{icon}</span>
            <span className="ml-4 hidden group-hover:block">{text}</span>
          </Link>
        ))}
      </div>
      <button className="flex items-center mt-auto p-2 text-white hover:bg-white hover:text-primary rounded transition-all duration-300">
        <div className="p-2 rounded-full">
          <LogOut />
        </div>
        <span className="ml-4 hidden group-hover:block">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
