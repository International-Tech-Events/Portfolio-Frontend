import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import K from '../pages/dashboard/layouts/navLinks';
import { LogOut } from 'lucide-react';
import { apiLogout } from '../services/auth';
import { toast } from 'react-toastify';

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await apiLogout();
      toast.success('Logged out successfully');
      navigate('/signin');
    } catch (error) {
      toast.error('An error occured');
    }
  };

  return (
    <div className="min-h-[100vh] bg-primary shadow-2xl flex flex-col px-4 py-12 transition-all duration-300 hover:w-[300px] w-[85px] group">
      {/* <Link> */}
      <span className="text-2xl text-center font-bold text-blue-400 mt-2 ml-2 hidden group-hover:block">
        ITE
      </span>
      {/* </Link> */}
      <hr className="border-white w-full" />
      <div className="flex flex-col mt-6 space-y-4">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <NavLink
            to={link}
            key={index}
            // className={`flex items-center gap-x-4 p-2 rounded-md transition-all duration-300 ${
            //   location.pathname === link
            //     ? 'bg-white text-primary'
            //     : 'text-blue-400 hover:bg-white hover:text-primary'
            // }`}
            className={({ isActive }) =>
              `flex items-center gap-x-4 p-2 rounded-md transition-all duration-300 ${
                (isActive,
                location.pathname === link
                  ? 'bg-white text-primary'
                  : 'text-blue-400 hover:bg-white hover:text-primary')
              }`
            }
            end
          >
            <span className="p-2 rounded-full">{icon}</span>
            <span className="ml-4 hidden group-hover:block">{text}</span>
          </NavLink>
        ))}
      </div>

      <button
        className="flex items-center mt-auto p-2 text-white hover:bg-white hover:text-primary rounded transition-all duration-300"
        onClick={logout}
      >
        <span className="p-2 rounded-full">
          <LogOut />
        </span>
        <span className="ml-4 hidden group-hover:block">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
