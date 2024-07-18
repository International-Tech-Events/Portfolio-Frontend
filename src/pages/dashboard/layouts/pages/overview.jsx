import React, { useEffect, useState } from 'react';
import {
  Award,
  BookDashed,
  BookText,
  CircleUserRound,
  FolderKanban,
  HandHelping,
  MedalIcon,
} from 'lucide-react';
import { apiGetSkills } from '../../../../services/skills';
import { apiGetAchievements } from '../../../../services/achievements';
import { apiGetEducation } from '../../../../services/education';
import { apiGetVolunteering } from '../../../../services/volunteer';
import { apiGetProjects } from '../../../../services/projects';
import { apiGetExperiences } from '../../../../services/experiences';
import PageLoader from '../../../../components/pageLoader';

const Overview = () => {
  const [data, setData] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    volunteering: 0,
    education: 0,
    experiences: 0,
  });

  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const [
        totalSkills,
        totalAchievements,
        totalEducation,
        totalVolunteering,
        totalProjects,
        totalExperiences,
      ] = await Promise.all([
        apiGetSkills(),
        apiGetAchievements(),
        apiGetEducation(),
        apiGetVolunteering(),
        apiGetProjects(),
        apiGetExperiences(),
      ]);

      console.log('Total skills:', totalSkills);

      const newData = {
        skills: totalSkills.length,
        projects: totalProjects.length,
        achievements: totalAchievements.length,
        volunteering: totalVolunteering.length,
        education: totalEducation.length,
        experiences: totalExperiences.length,
      };

      console.log(newData);

      setData(newData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData;
  }, []);
  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          <div className="h-auto bg-white text-primary py-6 shadow-md shadow-black">
            <h1 className="font-bold text-[2rem] ml-24 ">Overview</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-6 p-6 mt-28 mx-20">
            {/* Left Section */}
            <div className="flex flex-col flex-grow gap-6">
              {/* Experiences and Skills */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col justify-between p-4 bg-secondary/90 text-white rounded-lg shadow-md w-full md:w-1/3 h-40">
                  <div className="flex justify-between items-center">
                    <MedalIcon className="h-6 w-6" />
                    <span className="text-lg font-semibold">Experiences</span>
                  </div>
                  <p className="text-4xl font-bold">32</p>
                  {/* <div className="text-sm mt-2">
              <p>Years of experience: 5</p>
              <p>Last role: Senior Developer</p>
            </div> */}
                </div>
                <div className="flex flex-col justify-between p-4 bg-primary/90 text-white rounded-lg shadow-md w-full md:w-2/3 h-40">
                  <div className="flex justify-between items-center">
                    <BookText className="h-6 w-6" />
                    <span className="text-lg font-semibold">Skills</span>
                  </div>
                  <h1 className="text-4xl font-bold">76</h1>
                  {/* <div className="text-sm mt-2">
              <p>Top Skill: React</p>
              <p>Learning: TypeScript</p>
            </div> */}
                </div>
              </div>

              {/* Achievements, Education, and Volunteer */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col justify-between p-4 bg-secondary/90 text-white rounded-lg shadow-md w-full md:w-1/3 h-40">
                  <div className="flex justify-between items-center">
                    <Award className="h-6 w-6" />
                    <span className="text-lg font-semibold">Achievements</span>
                  </div>
                  <h1 className="text-4xl font-bold">45</h1>
                  {/* <div className="text-sm mt-2">
              <p>Recent Award: Best Developer 2023</p>
            </div> */}
                </div>
                <div className="flex flex-col justify-between p-4 bg-primary/90 text-white rounded-lg shadow-md w-full md:w-1/3 h-40">
                  <div className="flex justify-between items-center">
                    <BookDashed className="h-6 w-6" />
                    <span className="text-lg font-semibold">Education</span>
                  </div>
                  <h1 className="text-4xl font-bold">57</h1>
                  {/* <div className="text-sm mt-2">
              <p>Highest Degree: MSc Computer Science</p>
              <p>Institution: University of XYZ</p>
            </div> */}
                </div>
                <div className="flex flex-col justify-between p-4 bg-secondary/90 text-white rounded-lg shadow-md w-full md:w-1/3 h-40">
                  <div className="flex justify-between items-center">
                    <HandHelping className="h-6 w-6" />
                    <span className="text-lg font-semibold">Volunteer</span>
                  </div>
                  <h1 className="text-4xl font-bold">56</h1>
                  {/* <div className="text-sm mt-2">
              <p>Recent Activity: Tutoring at Code Camp</p>
            </div> */}
                </div>
              </div>

              {/* Projects */}
              <div className="flex flex-col justify-between p-4 bg-secondary/90 text-white rounded-lg shadow-md w-full h-40 md:h-60">
                <div className="flex justify-between items-center">
                  <FolderKanban className="h-6 w-6" />
                  <span className="text-lg font-semibold">Projects</span>
                </div>
                <h1 className="text-4xl font-bold">77</h1>
                {/* <div className="text-sm mt-2">
            <p>Recent Project: E-commerce Platform</p>
            <p>In Progress: Social Media App</p>
          </div> */}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-between p-4 bg-primary/90 text-white rounded-lg shadow-md w-full md:w-1/4 h-auto">
              <div className="flex justify-between items-center">
                <CircleUserRound className="h-6 w-6" />
                <span className="text-lg font-semibold">User Profile</span>
              </div>
              <h1 className="text-4xl font-bold">49</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Overview;
