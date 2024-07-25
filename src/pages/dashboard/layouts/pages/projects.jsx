import { useNavigate } from 'react-router-dom';
import K from '../../../../constant/constants.jsx';
import styled from 'styled-components';
import PagesLayout from '../pagesLayout.jsx';
import noData from '../../../../images/noData.svg';
import { useEffect, useState } from 'react';
import {
  apiDeleteProject,
  apiGetProjects,
} from '../../../../services/projects.js';
import { toast } from 'react-toastify';
import PageLoader from '../../../../components/pageLoader.jsx';
import Loader from '../../../../components/loader.jsx';
import { Trash2 } from 'lucide-react';

const CardContainer = styled.div`
  perspective: 1000px;
  width: 600px;
  height: 500px;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.7s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  &.back {
    transform: rotateY(180deg);
  }
`;

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetProjects();
      setProjects(res.data.projects);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsDeleting(true);
    try {
      const res = await apiDeleteProject(id);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error('An error occurred');
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto">
      <PagesLayout
        headerText="Projects"
        buttonText="Add new projects"
        onClick={() => navigate('/dashboard/projects/add')}
      />
      <div className="flex flex-wrap justify-center gap-5 mb-5">
        {isLoading ? (
          <PageLoader />
        ) : (
          <div>
            {projects.length === 0 ? (
              <div className="flex flex-col items-center">
                <img src={noData} alt="No Data" className="w-48 h-48" />
                <p>No Project added yet</p>
              </div>
            ) : (
              projects.map((project) => (
                <div key={project.id} className="">
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="absolute cursor-pointer text-gray-600 hover:text-primary"
                  >
                    {isDeleting ? <Loader /> : <Trash2 />}
                  </button>
                  <CardContainer className="mt-24">
                    <CardInner>
                      <CardFace>
                        <img
                          src={project.proimg}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                          <h3 className="text-3xl font-bold">
                            {project.projectName}
                          </h3>
                        </div>
                      </CardFace>
                      <CardFace className="back p-4 bg-white flex flex-col items-center justify-center">
                        <span className="block mb-2">
                          {project.proStartDate} - {project.proEndDate}
                        </span>
                        <p className="text-[2rem] font-semibold mb-2">
                          {project.proInstitution}
                        </p>
                        <p className="text-base mb-2">
                          {project.proDescription}
                        </p>
                        <div className="mb-2 items-center">
                          <span className="block font-semibold items-center text-[1.5rem]">
                            Skills:
                          </span>
                          <p className="items-center">{project.proSkills}</p>
                        </div>
                        <div className="mb-2">
                          <span className="block items-center font-semibold text-[1.5rem]">
                            Contributors:
                          </span>
                          <p className="items-center">{project.contributors}</p>
                        </div>
                        <div className="mt-2">
                          <a
                            href={project.proLink}
                            className="text-blue-500 hover:underline"
                          >
                            Project Link
                          </a>
                        </div>
                      </CardFace>
                    </CardInner>
                  </CardContainer>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
