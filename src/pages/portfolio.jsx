import BasicInfo from "../components/basicInfo";
import TabNavigation from "../components/rightTabs";

const Portfolio = () => {
  return (
    <div className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('./images/img7.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">

      <div className="flex w-full">
        <BasicInfo />
        <TabNavigation />
      </div>

    </div>
  );
};

export default Portfolio;