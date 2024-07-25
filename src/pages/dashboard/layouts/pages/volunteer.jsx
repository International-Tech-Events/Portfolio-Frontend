import { useNavigate } from 'react-router-dom';
import K from '../../../../constant/constants.jsx';
import PagesLayout from '../pagesLayout';
import { useEffect, useState } from 'react';
import {
  apiDeleteVolunteering,
  apiGetVolunteering,
} from '../../../../services/volunteer.js';
import PageLoader from '../../../../components/pageLoader.jsx';
import Loader from '../../../../components/loader.jsx';
import { Trash2 } from 'lucide-react';
import noData from '../../../../images/noData.svg';

const Volunteer = () => {
  const navigate = useNavigate();
  const [volunteer, setVolunteering] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchVolunteering = async () => {
    setIsLoading(true);

    try {
      const res = await apiGetVolunteering();
      setVolunteering(res.data.Volunteering);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setIsDeleting(true);
    try {
      const res = await apiDeleteVolunteering(_id);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error('An error occured');
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    fetchVolunteering();
  }, []);

  return (
    <>
      <div className="">
        <PagesLayout
          headerText="Volunteer"
          buttonText="Add new Volunteer"
          onClick={() => navigate('/dashboard/volunteer/add')}
        />
        {isLoading ? (
          <PageLoader />
        ) : (
          <div>
            {Volunteer.length === 0 ? (
              <div>
                <img src={noData} alt="No Data" className="w-48 h-48" />
                <p>No volunteer added yet</p>
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-5  bg-gray-500">
                {K.VOLUNTEER.map((volunteer) => {
                  return (
                    <div key={volunteer._id} className="reletaive">
                      <button
                        onClick={() => handleDelete(volunteer._id)}
                        className="absolute cursor-pointer text-gray-600 hover:text-primary"
                      >
                        {isDeleting ? <Loader /> : <Trash2 />}
                      </button>
                      <div className="relative w-[600px] h-[500px] bg-white shadow-lg rounded-lg overflow-hidden group mt-12 ">
                        <div className="p-6">
                          <p className="text-gray-500">
                            {volunteer.volStartDate} - {volunteer.volEndDate}
                          </p>
                          <h1 className="text-xl font-bold">
                            {volunteer.volOrganization}
                          </h1>
                        </div>
                        <div className="absolute inset-0 bg-white bg-opacity-90 p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="text-2xl font-semibold">
                            {volunteer.volTitle}
                          </h3>
                          <p className="text-gray-700 mt-2">
                            {volunteer.volRole}
                          </p>
                          <p className="text-gray-700 mt-2">
                            {volunteer.volSkill}
                          </p>
                          <p className="text-gray-700 mt-4">
                            {volunteer.volResponsibilities}
                          </p>
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

export default Volunteer;
