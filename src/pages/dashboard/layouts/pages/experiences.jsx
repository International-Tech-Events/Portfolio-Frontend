import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../pagesLayout';
import K from '../../../../constant/constants.jsx';
import Buttons from '../../../../components/buttons';
import {
  apiDeleteExperience,
  apiGetExperiences,
} from '../../../../services/experiences.js';
import { toast } from 'react-toastify';
import PageLoader from '../../../../components/pageLoader.jsx';
import noData from '../../../../images/noData.svg';
import Loader from '../../../../components/loader.jsx';
import { Trash2 } from 'lucide-react';
import ExperienceCard from '../../../../components/experienceCard.jsx';

const Experiences = () => {
  const navigate = useNavigate();
  const [experience, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchExperiences = async () => {
    setIsLoading(true);

    try {
      const res = await apiGetExperiences();
      setExperiences(res.data.Skills);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsDeleting(true);
    try {
      const res = await apiDeleteExperience(id);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error('An error occured');
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);
  return (
    <>
      <div>
        <PagesLayout
          headerText="Experience"
          buttonText="Add new Experience"
          onClick={() => navigate('/dashboard/experiences/add')}
        />

        {isLoading ? (
          <PageLoader />
        ) : (
          <div>
            {Experiences.length === 0 ? (
              <div>
                <img src={noData} alt="No Data" className="w-48 h-48" />
                <p>No experience added yet</p>
              </div>
            ) : (
              <div className="flex flex-wrap gap-6 text-white shadow-lg bg-white h-screen rounded-lg mt-4 justify-center">
                {K.EXPERIENCES.map((experience) => (
                  <div
                    key={experience._id}
                    className="w-full md:w-1/2 lg:w-1/3 p-4 relative"
                  >
                    {/* <Buttons /> */}
                    <button
                      onClick={() => handleDelete(experience._id)}
                      className="absolute cursor-pointer text-gray-600 hover:text-primary"
                    >
                      {isDeleting ? <Loader /> : <Trash2 />}
                    </button>
                    <ExperienceCard
                      startDate={experience.exStartDate}
                      endDate={experience.exEndDate}
                      place={experience.exPlace}
                      role={experience.exRole}
                      skill={experience.exSkill}
                      responsibility={experience.exResponsibility}
                      user={experience.exUser}
                      dateColor={experience.dateColor}
                    />
                    {/* <div
                      className="flex flex-col bg-gray-700 text-center pt-10 text-lg font-bold p-4 rounded-lg"
                      style={{ backgroundColor: experience.dateColor }}
                    >
                      <div className="transform  whitespace-nowrap mb-4">
                        {experience.exStartDate} - {experience.exEndDate}
                      </div>

                      <div className="flex-grow bg-white text-black p-4 rounded-lg">
                        <div className="flex justify-end space-x-2 p-2"></div>
                        <h2 className="text-3xl font-semibold">
                          {experience.exPlace}
                        </h2>
                        <p className="text-lg italic text-gray-400">
                          {experience.exRole}
                        </p>
                        <p className="text-lg mt-2">{experience.exSkills}</p>
                        <p className="text-lg mt-2">
                          {experience.exResponsibility}
                        </p>
                        <p className="text-sm italic text-gray-400">
                          {experience.exUser}
                        </p>
                      </div>
                    </div> */}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Experiences;
