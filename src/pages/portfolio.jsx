import BasicInfo from "../components/basicInfo";
import TabNavigation from "../components/rightTabs";

const Portfolio = () => {
  return (
    <div className="px-[5rem] pt-[10px]">

      <div className="flex gap-x-8 w-full">
        <BasicInfo />
        <TabNavigation />
      </div>

    </div>
  );
};

export default Portfolio;