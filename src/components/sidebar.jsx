import { Link } from 'react-router-dom';
import K from '../pages/dashboard/layouts/navLinks';
import { LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-[300px] bg-primary shadow-2xl flex flex-col px-8 py-12">
      <span className="text-2xl font-bold text-[50px] text-white">
        Portfolio
      </span>
      <div>
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <Link
            to={link}
            key={index}
            className="flex gap-x-4 items-center hover:bg-primary hover:text-white hover:rounded-md"
          >
            <span className="bg-primary text-white p-2 rounded-full">
              {icon}
            </span>
            <span>{text}</span>
          </Link>
        ))}
      </div>
      <button className="flex gap-x-4 items-center mt-auto hover:bg-white hover:text-white hover:rounded">
        <div className="bg-primary text-white p-2 rounded-full">
          <LogOut />
        </div>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
