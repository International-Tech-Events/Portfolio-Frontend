import { useNavigate } from 'react-router-dom';
import PagesLayout from '../pagesLayout';
// import SkillsCard from '../../../../components/skillsCard';
import SkillsImages from '../../../../components/skillsImages';
import { useEffect, useState } from 'react';
import {
  apiAddSkill,
  apiDeleteSkill,
  apiGetSkills,
} from '../../../../services/skills';
import PageLoader from '../../../../components/pageLoader';
import noData from '../../../../images/noData.svg';
import { toast } from 'react-toastify';
import { Trash2 } from 'lucide-react';
import { SkillsData } from '../../../../constant/skillsData';
import SkillsCard from '../../../../components/skillsCard';

const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchSkills = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetSkills();
      setSkills(res.data.skills);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsDeleting(true);
    try {
      const res = await apiDeleteSkill(id);
      toast.success(res.data.message);
      // You may need to refetch the skills or update the state to reflect the deletion
    } catch (error) {
      console.log(error);
      toast.error('An error occurred');
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <>
      <div className="bg-gray-500 min-h-[100%] relative">
        <PagesLayout
          headerText="Skills"
          buttonText="Add new Skill"
          onClick={() => navigate('/dashboard/skills/add')}
        />

        <div className="flex flex-col gap-7 items-center justify-center mb-20 mt-24">
          <div className="flex flex-row gap-11">
            {SkillsData.map((skill) => (
              <div key={skill.id}>
                <SkillsImages image={skill.image} />
              </div>
            ))}
          </div>

          {isLoading ? (
            <PageLoader />
          ) : (
            <div>
              {Skills.length === 0 ? (
                <div className="flex flex-col items-center">
                  <img src={noData} alt="No Data" className="w-48 h-48" />
                  <p>No Skills Added Yet</p>
                </div>
              ) : (
                <div className="relative flex gap-x-10 mx-48">
                  {SkillsData.map((skill) => (
                    <div key={skill.id} className="relative flex-1 mb-11">
                      <button
                        onClick={() => handleDelete(skill.id)}
                        className="absolute cursor-pointer text-gray-600 hover:text-primary"
                      >
                        {isDeleting ? <Loader /> : <Trash2 />}
                      </button>
                      <SkillsCard
                        skillName={skill.skillName}
                        percentage={skill.percentage}
                        skillUser={skill.skillUser}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Skills;
