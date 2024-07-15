import { useNavigate } from 'react-router-dom';
import PagesLayout from '../pagesLayout';
import AchievementCard from '../../../../components/achievementCard';

const Achievements = () => {
  const navigate = useNavigate();

  // const lineStyle = {
  //   width: '1px',
  //   backgroundColor: '#ccc',
  //   margin: '10px 0',
  //   alignSelf: 'stretch',
  // };

  return (
    <>
      <div>
        <PagesLayout
          headerText="Achievements"
          buttonText="Add new Achievements"
          onClick={() => navigate('/dashboard/achievements/add')}
        >
          <span>Achievements list here</span>
        </PagesLayout>
      </div>
      <div className="mx-40 mb-10">
        <div className="flex">
          <div className="flex-1 text-black shadow-lg bg-white shadow-black/55 rounded-b-lg rounded-br-lg p-6">
            <AchievementCard
              achDate="2024"
              achInstitution="Mest"
              achTitle="Ruthlicious Keto Haven"
              achDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
              achSkills="HTML CSS React"
              theproject="https://preview.themeforest.net/item/zed-programmer-resume-portfolio-elementor-template-kit/full_screen_preview/47135920?_ga=2.62989423.1923050438.1720387898-2079034422.1719742841"
              achUser="Nana"
            />
          </div>

          {/* .line {
  width: 1px;
  background-color: #ccc;
  margin: 10px 0;
  align-self: stretch; */}

          <div className="flex-1">
            {/* <AchievementCard
              achDate="2024"
              achInstitution="Mest"
              achTitle="Ruthlicious Keto Haven"
              achDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
              achSkills="HTML CSS React"
              theproject="https://preview.themeforest.net/item/zed-programmer-resume-portfolio-elementor-template-kit/full_screen_preview/47135920?_ga=2.62989423.1923050438.1720387898-2079034422.1719742841"
              achUser="Nana"
            /> */}
          </div>
        </div>
        {/* <div style={lineStyle}></div> */}

        <div className="flex">
          <div className="flex-1">
            {/* <AchievementCard
              achDate="2024"
              achInstitution="Mest"
              achTitle="Ruthlicious Keto Haven"
              achDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
              achSkills="HTML CSS React"
              theproject="https://preview.themeforest.net/item/zed-programmer-resume-portfolio-elementor-template-kit/full_screen_preview/47135920?_ga=2.62989423.1923050438.1720387898-2079034422.1719742841"
              achUser="Nana"
            /> */}
          </div>

          <div className="flex-1 text-black shadow-lg bg-white shadow-black/55 rounded-b-lg rounded-br-lg p-6 ">
            <AchievementCard
              achDate="2024"
              achInstitution="Mest"
              achTitle="Ruthlicious Keto Haven"
              achDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
              achSkills="HTML CSS React"
              theproject="https://preview.themeforest.net/item/zed-programmer-resume-portfolio-elementor-template-kit/full_screen_preview/47135920?_ga=2.62989423.1923050438.1720387898-2079034422.1719742841"
              achUser="Nana"
            />
          </div>
        </div>
        {/* <div style={lineStyle}></div> */}

        <div className="flex">
          <div className="flex-1 text-black shadow-lg bg-white shadow-black/55 rounded-b-lg rounded-br-lg p-6">
            <AchievementCard
              achDate="2024"
              achInstitution="Mest"
              achTitle="Ruthlicious Keto Haven"
              achDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
              achSkills="HTML CSS React"
              theproject="https://preview.themeforest.net/item/zed-programmer-resume-portfolio-elementor-template-kit/full_screen_preview/47135920?_ga=2.62989423.1923050438.1720387898-2079034422.1719742841"
              achUser="Nana"
            />
          </div>

          <div className="flex-1">
            {/* <AchievementCard
          achDate="2024"
          achInstitution="Mest"
          achTitle="Ruthlicious Keto Haven"
          achDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
          achSkills="HTML CSS React"
          theproject="https://preview.themeforest.net/item/zed-programmer-resume-portfolio-elementor-template-kit/full_screen_preview/47135920?_ga=2.62989423.1923050438.1720387898-2079034422.1719742841"
          achUser="Nana"
        /> */}
          </div>
        </div>
        {/* <div style={lineStyle}></div> */}

        <div className="flex">
          <div className="flex-1">
            {/* <AchievementCard
              achDate="2024"
              achInstitution="Mest"
              achTitle="Ruthlicious Keto Haven"
              achDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
              achSkills="HTML CSS React"
              theproject="https://preview.themeforest.net/item/zed-programmer-resume-portfolio-elementor-template-kit/full_screen_preview/47135920?_ga=2.62989423.1923050438.1720387898-2079034422.1719742841"
              achUser="Nana"
            /> */}
          </div>

          <div className="flex-1 text-black shadow-lg bg-white shadow-black/55 rounded-b-lg rounded-br-lg p-6">
            <AchievementCard
              achDate="2024"
              achInstitution="Mest"
              achTitle="Ruthlicious Keto Haven"
              achDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
              achSkills="HTML CSS React"
              theproject="https://preview.themeforest.net/item/zed-programmer-resume-portfolio-elementor-template-kit/full_screen_preview/47135920?_ga=2.62989423.1923050438.1720387898-2079034422.1719742841"
              achUser="Nana"
            />
          </div>
          {/* <div style={lineStyle}></div> */}
        </div>
      </div>
    </>
  );
};

export default Achievements;
