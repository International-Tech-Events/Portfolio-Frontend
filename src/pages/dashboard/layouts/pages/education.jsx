import { useNavigate } from 'react-router-dom';
import K from '../../../../constant/constants.jsx';
import PagesLayout from '../pagesLayout.jsx';
import Buttons from '../../../../components/buttons.jsx';
import { CalendarDays, Landmark, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { apiDeleteEducation } from '../../../../services/education.js';
import noData from '../../../../images/noData.svg';
import Loader from '../../../../components/loader.jsx';
import PageLoader from '../../../../components/pageLoader.jsx';

const Education = () => {
  const navigate = useNavigate();
  const [education, setEducations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchEducation = async () => {
    setIsLoading(true);

    try {
      const res = await apiGetEducation();
      setEducation(res.data.Education);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setIsDeleting(true);
    try {
      const res = await apiDeleteEducation(_id);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error('An error occured');
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);
  return (
    <>
      {' '}
      <div className="">
        <PagesLayout
          headerText="Education"
          buttonText="Add new Education"
          onClick={() => navigate('/dashboard/educations/add')}
        />
        {isLoading ? (
          <PageLoader />
        ) : (
          <div>
            {Education.length === 0 ? (
              <div>
                <img src={noData} alt="No Data" className="w-48 h-48" />
                <p>No education added yet</p>
              </div>
            ) : (
              <div className="mt-20 mx-40">
                {K.EDUCATION.map((education) => {
                  return (
                    <div key={education._id} className="mb-5">
                      <button
                        onClick={() => handleDelete(education._id)}
                        className="absolute cursor-pointer text-gray-600 hover:text-primary"
                      >
                        {isDeleting ? <Loader /> : <Trash2 />}
                      </button>
                      <div className="relative flex gap-x-12 px-[3rem] pb-[3rem] pt-[3rem] rounded-2xl bg-white shadow-md shadow-black">
                        <Buttons />
                        <p className="text-[1.5rem]">{education.schName}</p>

                        <div className="">
                          <div className="flex gap-x-10 mb-1">
                            <div className="flex">
                              <Landmark /> <span>{education.schName}</span>
                            </div>
                            <div className="flex mb-1">
                              <CalendarDays />{' '}
                              <span>
                                {education.schStartDate} -{' '}
                                {education.schEndDate}
                              </span>
                            </div>
                          </div>

                          <h1 className="mb-4 text-[1.5rem]">
                            {education.schProgram}
                          </h1>
                          <p>{education.proDescription}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Education;
