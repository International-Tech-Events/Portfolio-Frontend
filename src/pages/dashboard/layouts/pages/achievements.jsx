import { useNavigate } from 'react-router-dom';
import K from '../../../../constant/constants.jsx';
import PagesLayout from '../pagesLayout.jsx';
import { useEffect, useState } from 'react';
import {
  apiDeleteAchievement,
  apiGetAchievements,
} from '../../../../services/achievements.js';
import noData from '../../../../images/noData.svg';
import { Trash2 } from 'lucide-react';
import PageLoader from '../../../../components/pageLoader.jsx';
import Loader from '../../../../components/loader.jsx';

const Achievements = () => {
  const navigate = useNavigate();
  const [achievement, setAchievements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchAchievements = async () => {
    setIsLoading(true);

    try {
      const res = await apiGetAchievements();
      setAchievements(res.data.Achievements);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setIsDeleting(true);
    try {
      const res = await apiDeleteAchievement(_id);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error('An error occured');
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  return (
    <>
      <div className=" ">
        <PagesLayout
          headerText="Achievement"
          buttonText="Add new Achievement"
          onClick={() => navigate('/dashboard/achievements/add')}
        />
        {isLoading ? (
          <PageLoader />
        ) : (
          <div>
            {Achievements.length === 0 ? (
              <div>
                <img src={noData} alt="No Data" className="w-48 h-48" />
                <p>No achievement added yet</p>
              </div>
            ) : (
              <div className="mt-12 ">
                {K.ACHIEVEMENTS.map((achievement, index) => {
                  const isOdd = index % 2 !== 0;
                  return (
                    <div
                      key={achievement._id}
                      className="flex flex-col md:flex-row items-center md:items-start "
                    >
                      <button
                        onClick={() => handleDelete(achievement._id)}
                        className="absolute cursor-pointer text-gray-600 hover:text-primary"
                      >
                        {isDeleting ? <Loader /> : <Trash2 />}
                      </button>
                      {isOdd ? (
                        <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-8 text-right">
                          <div className="max-w-md">
                            <span className="text-gray-400">
                              {achievement.achDate}
                            </span>
                            <h1 className="text-2xl font-bold mt-2">
                              {achievement.achTitle}
                            </h1>
                            <h2 className="text-xl font-semibold mt-1">
                              {achievement.achInstitution}
                            </h2>
                            <p className="mt-4 text-gray-300">
                              {achievement.achDescription}
                            </p>
                            <p className="mt-4 font-bold">
                              {achievement.achSkills}
                            </p>
                            <a
                              href={achievement.theproject}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 mt-2 block"
                            >
                              View Project
                            </a>
                            <p className="mt-2">{achievement.achUser}</p>
                          </div>
                        </div>
                      ) : null}
                      <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full" />
                          <div
                            className={`w-1 bg-blue-500 ${
                              isOdd ? 'h-0' : 'h-full'
                            } md:h-full`}
                          />
                        </div>
                      </div>
                      {!isOdd ? (
                        <div className="flex-1 md:w-1/2 md:pl-8">
                          <span className="text-gray-400">
                            {achievement.achDate}
                          </span>
                          <h1 className="text-2xl font-bold mt-2">
                            {achievement.achTitle}
                          </h1>
                          <h2 className="text-xl font-semibold mt-1">
                            {achievement.achInstitution}
                          </h2>
                          <p className="mt-4 text-gray-300">
                            {achievement.achDescription}
                          </p>
                          <p className="mt-4 font-bold">
                            {achievement.achSkills}
                          </p>
                          <a
                            href={achievement.theproject}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 mt-2 block"
                          >
                            View Project
                          </a>
                          <p className="mt-2">{achievement.achUser}</p>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}{' '}
      </div>
    </>
  );
};

export default Achievements;
