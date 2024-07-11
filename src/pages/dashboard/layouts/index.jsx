import React from 'react';
import Sidebar from '../../../components/sidebar';
import { Outlet } from 'react-router-dom';
import { SquareMenu } from 'lucide-react';

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-white w-full">
        <Outlet />
      </div>
      {/* <div className="bg-white w-full">
        <div className="flex px-16 bg-white shadow-md items-center">
          <span className="p-2 bg-primary ml-auto text-white rounded-full">
            <SquareMenu />
          </span>

          <span className="rounded-full ml-auto bg-white text-white">
            <span>TG</span>
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default DashboardLayout;
