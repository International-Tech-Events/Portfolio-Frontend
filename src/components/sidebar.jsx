import { Link, useLocation } from 'react-router-dom';
import K from '../pages/dashboard/layouts/navLinks';
import { LogOut } from 'lucide-react';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="min-h-[100vh] bg-primary shadow-2xl flex flex-col px-4 py-12 transition-all duration-300 hover:w-[300px] w-[85px] group">
      <Link>
        <span className="text-2xl text-center font-bold text-blue-400 mt-2 ml-2 hidden group-hover:block">
          ITE
        </span>
      </Link>
      <hr className="border-white w-full" />
      <div className="flex flex-col mt-6 space-y-4">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <Link
            to={link}
            key={index}
            className={`flex items-center gap-x-4 p-2 rounded-md transition-all duration-300 ${
              location.pathname === link
                ? 'bg-white text-primary'
                : 'text-blue-400 hover:bg-white hover:text-primary'
            }`}
          >
            <span className="p-2 rounded-full">{icon}</span>
            <span className="ml-4 hidden group-hover:block">{text}</span>
          </Link>
        ))}
      </div>

      {/* <button className="flex items-center mt-auto p-2 text-white hover:bg-white hover:text-primary rounded transition-all duration-300">
        <div className="p-2 rounded-full">
          <LogOut />
        </div>
        <span className="ml-4 hidden group-hover:block">Logout</span>
      </button> */}
      <Link
        to="/signin"
        className="flex items-center mt-auto p-2 text-white hover:bg-white hover:text-primary rounded transition-all duration-300"
      >
        <div className="p-2 rounded-full">
          <LogOut />
        </div>
        <span className="ml-4 hidden group-hover:block">Logout</span>
      </Link>
    </div>
  );
};

export default Sidebar;
