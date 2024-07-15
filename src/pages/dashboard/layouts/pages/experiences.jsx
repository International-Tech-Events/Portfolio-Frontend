import React from 'react';
import PagesLayout from '../pagesLayout';
import { useNavigate } from 'react-router-dom';
import ExperienceCard from '../../../../components/experienceCard';

const Experiences = () => {
  const navigate = useNavigate();
  return (
    <>
      <PagesLayout
        headerText="Experience"
        buttonText="Add new Experience"
        onClick={() => navigate('/dashboard/experiences/add')}
      >
        <span>Experience List here</span>
      </PagesLayout>

      <div className=" flex gap-x-8 flex-wrap gap-y-14 min-h-auto mx-40 mt-40">
        <div className="flex-1 space-y-14">
          <ExperienceCard
            exStartDate="2023"
            exEndDate="2024"
            exPlace="Mest (Generation-Africa)"
            exRole="Web Developments"
            exSkills="HTML, CSS, React"
            exResponsibility="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
            exUser="Nana"
            dateColor="#AD8065"
          />

          <ExperienceCard
            exStartDate="2023"
            exEndDate="2024"
            exPlace="Mest (Generation-Africa)"
            exRole="Web Developments"
            exSkills="HTML, CSS, React"
            exResponsibility="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
            dateColor="#438692"
            exUser="Nana"
          />
        </div>

        <div className="flex-1 space-y-14">
          <ExperienceCard
            exStartDate="2023"
            exEndDate="2024"
            exPlace="Mest (Generation-Africa)"
            exRole="Web Developments"
            exSkills="HTML, CSS, React"
            exResponsibility="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
            dateColor="#908BA5"
            exUser="Nana"
          />

          <ExperienceCard
            exStartDate="2023"
            exEndDate="2024"
            exPlace="Mest (Generation-Africa)"
            exRole="Web Developments"
            exSkills="HTML, CSS, React"
            exResponsibility="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
            dateColor="#A67753"
            exUser="Nana"
          />
        </div>
      </div>
    </>
  );
};

export default Experiences;
