import React from 'react';
import PagesLayout from '../pagesLayout';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../../../../components/projectCard';

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PagesLayout
        headerText="Projects"
        buttonText="Add new projects"
        onClick={() => navigate('/dashboard/projects/add')}
      >
        <span>Project List here</span>
      </PagesLayout>

      {/* PROJECT NAME */}
      {/* <div className="flex">
        <div className="flex">
          <div>
            <ProjectCard
              proStartDate="May 2020"
              proEndDate="June 2024"
              proInstitution="Mest"
              proDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              proSkills="React"
              contributors="Gifty"
              proLink="nana.com"
            />
          </div>
          <hr className="w-12 h-1 bg-black" />
          <div className="w-auto shadow-md">
            <p>Project name</p>
          </div>
        </div>

        <div className="flex">
          <div className="w-auto shadow-md">
            <p>Project name</p>
          </div>
          <hr className="w-12 h-1 bg-black" />
          <div>
            <ProjectCard
              proStartDate="May 2020"
              proEndDate="June 2024"
              proInstitution="Mest"
              proDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              proSkills="React"
              contributors="Gifty"
              proLink="nana.com"
            />
          </div>
        </div>
      </div> */}
      <div className="flex flex-wrap justify-evenly">
        <div className="flex items-center mb-4">
          <div className="w-auto shadow-md p-4">
            <p>Project name:</p>
            <span className="text-[2rem]">DevPort</span>
          </div>
          <hr className="w-12 h-1 bg-black mx-4" />
          <ProjectCard
            proStartDate="May 2020"
            proEndDate="June 2024"
            proInstitution="Mest"
            proDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            proSkills="HTML, CSS, Express, Mongo DB "
            contributors="Gifty"
            proLink="nana.com"
          />
        </div>

        <div className="flex items-center mb-4">
          <div className="w-auto shadow-md p-4">
            <p>Project name:</p>
            <span className="text-[2rem]">DevPort</span>
          </div>

          <hr className="w-12 h-1 bg-black mx-4" />
          <ProjectCard
            proStartDate="May 2020"
            proEndDate="June 2024"
            proInstitution="Mest"
            proDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            proSkills="React"
            contributors="Gifty"
            proLink="nana.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
