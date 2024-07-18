import { Link } from 'react-router-dom';
import BasicInfo from '../components/basicInfo';
import TabNavigation from '../components/rightTabs';
import { LayoutDashboard } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="px-[5rem] pt-[10px]">
      <div>
        <div className="h-auto bg-white text-primary py-6 shadow-md shadow-black flex mb-12">
          <Link to="/dashboard">
            <div className=" text-blue-400 mt-2 ml-2 ">
              <LayoutDashboard className="size-10" />
            </div>
          </Link>
          <h1 className="font-bold text-[2.5rem] ml-24 ">Portfolio</h1>
        </div>
      </div>

      <div className="flex gap-x-8 w-full">
        <BasicInfo />
        <TabNavigation />
      </div>
    </div>
  );
};

export default Portfolio;
