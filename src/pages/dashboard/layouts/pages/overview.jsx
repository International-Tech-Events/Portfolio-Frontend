import React, { useEffect, useState } from 'react';

import { apiGetSkills } from '../../../../services/skills';
import { apiGetAchievements } from '../../../../services/achievements';
import { apiGetEducation } from '../../../../services/education';
import { apiGetVolunteering } from '../../../../services/volunteer';
import { apiGetProjects } from '../../../../services/projects';
import { apiGetExperiences } from '../../../../services/experiences';
import PageLoader from '../../../../components/pageLoader';
import K from '../../../../constant/constants.jsx';
// import CountUp from 'react-countup/build/CountUp.js';
import CountUp from 'react-countup';

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
        <div className="p-10">
          <div className="grid grid-cols-3 gap-10">
            {K.OVERVIEW.map(({ icon, text, id }, index) => (
              <div
                key={index}
                className="h-40 shadow-lg p-6 flex flex-col justify-between bg-primary rounded-lg"
              >
                <div>
                  <span className="text-secondary">{icon}</span>
                  <span className="text-lg font-semibold text-white">
                    {text}
                  </span>
                </div>
                <CountUp
                  className="text-2xl font-semibold"
                  start={0}
                  end={data[id]}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Overview;
