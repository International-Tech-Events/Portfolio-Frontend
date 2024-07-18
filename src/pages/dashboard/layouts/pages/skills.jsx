// import { useNavigate } from 'react-router-dom';
// import PagesLayout from '../pagesLayout';
// import SkillsCard from '../../../../components/skillsCard';
// import SkillsImages from '../../../../components/skillsImages';
// import html from '../../../../images/html.png';
// import css from '../../../../images/css.png';
// import js from '../../../../images/javaSscript.png';
// import react from '../../../../images/react.png';
// import figma from '../../../../images/figma.png';
// import { useEffect, useState } from 'react';
// import {
//   apiAddSkill,
//   apiDeleteSkill,
//   apiGetSkills,
// } from '../../../../services/skills';
// import PageLoader from '../../../../components/pageLoader';
// import noData from '../../../../images/noData.svg';
// import { toast } from 'react-toastify';
// import { Trash2 } from 'lucide-react';

// const Skills = () => {
//   const navigate = useNavigate();
//   const [skills, setSkills] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const fetchSkills = async () => {
//     setIsLoading(true);
//     try {
//       const res = await apiGetSkills();
//       console.log(res.data);
//       setSkills(res.data.skills);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async (_id) => {
//     try {
//       const res = await apiDeleteSkill(_id);
//       console.log(res.data);
//       toast.success(res.data.message);
//       // not sure of the id
//     } catch (error) {
//       console.log(error);
//       toast.error('An error occured');
//     }
//   };
//   useEffect(() => {
//     fetchSkills();
//   }, []);
//   return (
//     <>
//       <div className="bg-gray-500 min-h-[100%] relative">
//         <PagesLayout
//           headerText="Skills"
//           buttonText="Add new Skill"
//           onClick={() => navigate('/dashboard/skills/add')}
//         >
//           {/* <span>All Skills here</span> */}
//         </PagesLayout>

//         <div className="flex flex-col gap-7 items-center justify-center mb-20 mt-24">
//           <div className="flex flex-row gap-11">
//             <div>
//               <SkillsImages image={html} />
//             </div>
//             <div>
//               <SkillsImages image={css} />
//             </div>
//             <div>
//               <SkillsImages image={js} />
//             </div>
//           </div>

//           <div className="flex flex-row gap-11">
//             <div>
//               <SkillsImages image={react} />
//             </div>
//             <div>
//               <SkillsImages image={figma} />
//             </div>
//           </div>
//         </div>

//         {isLoading ? (
//           <PageLoader />
//         ) : (
//           <div>
//             {Skills.length == 0 ? (
//               <div className="flex flex-col items-center">
//                 <img src={noData} alt="" className="w-48 h-48" />
//                 <p>No Skills Added Yet</p>
//               </div>
//             ) : (
//               <div className="relative flex gap-x-10 mx-48">
//                 <div className="relative flex-1">
//                   <button className="absolute cursor-pointer">
//                     onClick={() => handleDelete(id)}
//                     className="text-gray-600 hover:text-primary "
//                     {isDeleting ? <Loader /> : <Trash2 />}
//                   </button>
//                   <div className="mb-11">
//                     <SkillsCard
//                       skillName="HTML"
//                       // skillProficiency="Advanced"
//                       percentage="90"
//                       skillUser="Nana"
//                     />
//                   </div>

//                   <div className="mb-11">
//                     <SkillsCard
//                       skillName="CSS"
//                       // skillProficiency="Advanced"
//                       skillUser="Nana"
//                       percentage="65"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex-1">
//                   <div className="mb-11">
//                     <SkillsCard
//                       skillName="JavaScript"
//                       // skillProficiency="Beginner"
//                       skillUser="Nana"
//                       percentage="30"
//                     />
//                   </div>

//                   <div className="mb-11">
//                     <SkillsCard
//                       skillName="React"
//                       // skillProficiency="Intermediate"
//                       skillUser="Nana"
//                       percentage="80"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <div className="mb-11 ">
//                     <SkillsCard
//                       skillName="Figma"
//                       // skillProficiency="Intermediate"
//                       skillUser="Nana"
//                       percentage="70"
//                     />
//                   </div>
//                   <div className="mb-11 ">
//                     <SkillsCard
//                       skillName="Figma"
//                       // skillProficiency="Intermediate"
//                       skillUser="Nana"
//                       percentage="70"
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Skills;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PagesLayout from '../pagesLayout';
import SkillsCard from '../../../../components/skillsCard';
import SkillsImages from '../../../../components/skillsImages';
import html from '../../../../images/html.png';
import css from '../../../../images/css.png';
import js from '../../../../images/javaSscript.png';
import react from '../../../../images/react.png';
import figma from '../../../../images/figma.png';
import {
  apiAddSkill,
  apiDeleteSkill,
  apiGetSkills,
} from '../../../../services/skills';
import PageLoader from '../../../../components/pageLoader';
import noData from '../../../../images/noData.svg';
import { toast } from 'react-toastify';
import { Trash2 } from 'lucide-react';

const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [newSkill, setNewSkill] = useState({
    name: '',
    percentage: '',
    user: 'Nana',
  });

  const fetchSkills = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetSkills();
      console.log(res.data);
      setSkills(res.data.skills);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setIsDeleting(true);
    try {
      const res = await apiDeleteSkill(_id);
      console.log(res.data);
      toast.success(res.data.message);
      setSkills(skills.filter((skill) => skill._id !== _id));
    } catch (error) {
      console.log(error);
      toast.error('An error occurred');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleAddSkill = async (e) => {
    e.preventDefault();
    try {
      const res = await apiAddSkill(newSkill);
      console.log(res.data);
      toast.success('Skill added successfully');
      setSkills([...skills, res.data.skill]);
      setNewSkill({ name: '', percentage: '', user: 'Nana' });
    } catch (error) {
      console.log(error);
      toast.error('Failed to add skill');
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="bg-gray-500 min-h-[100%] relative">
      <PagesLayout
        headerText="Skills"
        buttonText="Add new Skill"
        onClick={() => navigate('/dashboard/skills/add')}
      >
        <form onSubmit={handleAddSkill} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Skill Name"
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Percentage"
            value={newSkill.percentage}
            onChange={(e) =>
              setNewSkill({ ...newSkill, percentage: e.target.value })
            }
            className="p-2 border rounded"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Add Skill
          </button>
        </form>
      </PagesLayout>

      <div className="flex flex-col gap-7 items-center justify-center mb-20 mt-24">
        <div className="flex flex-row gap-11">
          <SkillsImages image={html} />
          <SkillsImages image={css} />
          <SkillsImages image={js} />
        </div>
        <div className="flex flex-row gap-11">
          <SkillsImages image={react} />
          <SkillsImages image={figma} />
        </div>
      </div>

      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          {Skills.length === 0 ? (
            <div className="flex flex-col items-center">
              <img src={noData} alt="" className="w-48 h-48" />
              <p>No Skills Added Yet</p>
            </div>
          ) : (
            <div className="relative flex flex-wrap gap-10 mx-8">
              {skills.map((skill) => (
                <div key={skill._id} className="relative flex-1 mb-11">
                  <button
                    onClick={() => handleDelete(skill._id)}
                    className="absolute top-2 right-2 text-gray-600 hover:text-primary"
                  >
                    {isDeleting ? <Loader /> : <Trash2 />}
                  </button>
                  <SkillsCard
                    skillName={skill.name}
                    // skillProficiency={skill.proficiency}
                    percentage={skill.percentage}
                    skillUser={skill.user}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Skills;
