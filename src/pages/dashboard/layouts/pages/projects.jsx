// import React from 'react';
// import PagesLayout from '../pagesLayout';
// import { useNavigate } from 'react-router-dom';
// import ProjectCard from '../../../../components/projectCard';
// import ell from '../../../../images/ellen.png';
// import ruth from '../../../../images/ruth.png';
// import theo from '../../../../images/theo.png';
// import gift from '../../../../images/gifty.png';

// const Projects = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <PagesLayout
//         headerText="Projects"
//         buttonText="Add new projects"
//         onClick={() => navigate('/dashboard/projects/add')}
//       >
//         {/* <span>Project List here</span> */}
//       </PagesLayout>

//       {/* PROJECT NAME */}
//       <div className="bg-gray-500">
//         <div className="flex flex-wrap justify-evenly ">
//           <div className="flex">
//             <div>
//               <ProjectCard
//                 proStartDate="May 2020"
//                 proimg={gift}
//                 projectName="Devport"
//                 proEndDate="June 2024"
//                 proInstitution="Mest"
//                 proDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//                 proSkills="React"
//                 contributors="Gifty Theo Ellen Ruth"
//                 proLink="nana.com"
//               />
//             </div>
//           </div>
//           <div className="flex">
//             <div>
//               <ProjectCard
//                 projectName="Devport"
//                 proimg={theo}
//                 proStartDate="May 2020"
//                 proEndDate="June 2024"
//                 proInstitution="Mest"
//                 proDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//                 proSkills="React"
//                 contributors="Gifty Theo Ellen Ruth"
//                 proLink="nana.com"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-wrap justify-evenly">
//           <div className="flex items-center mb-4">
//             {/* <div className="w-auto shadow-md p-4">
//             <p>Project name:</p>
//             <span className="text-[2rem]">DevPort</span>
//           </div>
//           <hr className="w-12 h-1 bg-black mx-4" /> */}
//             <ProjectCard
//               projectName="Headstart School"
//               proimg={ell}
//               proStartDate="May 2020"
//               proEndDate="June 2024"
//               proInstitution="Mest"
//               proDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//               proSkills="Mongo DB "
//               contributors="Gifty Theo Ellen Ruth"
//               proLink="nana.com"
//             />
//           </div>

//           <div className="flex items-center mb-4">
//             {/* <div className="w-auto shadow-md p-4">
//             <p>Project name:</p>
//             <span className="text-[2rem]">DevPort</span>
//           </div> */}

//             {/* <hr className="w-12 h-1 bg-black mx-4" /> */}
//             <ProjectCard
//               projectName="Haven of Mindfullness"
//               proimg={ruth}
//               proStartDate="May 2020"
//               proEndDate="June 2024"
//               proInstitution="Mest"
//               proDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//               proSkills="React"
//               contributors="Gifty Theo Ellen Ruth"
//               proLink="nana.com"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from 'react';
import PagesLayout from '../pagesLayout';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../../../../components/projectCard';
import ell from '../../../../images/ellen.png';
import ruth from '../../../../images/ruth.png';
import theo from '../../../../images/theo.png';
import gift from '../../../../images/gifty.png';

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-500">
      <PagesLayout
        headerText="Projects"
        buttonText="Add new projects"
        onClick={() => navigate('/dashboard/projects/add')}
      />

      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center gap-6">
          <ProjectCard
            proStartDate="May 2020"
            proimg={gift}
            projectName="Devport"
            proEndDate="June 2024"
            proInstitution="Mest"
            proDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            proSkills="React"
            contributors="Gifty Theo Ellen Ruth"
            proLink="nana.com"
          />
          <ProjectCard
            projectName="Devport"
            proimg={theo}
            proStartDate="May 2020"
            proEndDate="June 2024"
            proInstitution="Mest"
            proDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            proSkills="React"
            contributors="Gifty Theo Ellen Ruth"
            proLink="nana.com"
          />
          <ProjectCard
            projectName="Headstart School"
            proimg={ell}
            proStartDate="May 2020"
            proEndDate="June 2024"
            proInstitution="Mest"
            proDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            proSkills="Mongo DB"
            contributors="Gifty Theo Ellen Ruth"
            proLink="nana.com"
          />
          <ProjectCard
            projectName="Haven of Mindfullness"
            proimg={ruth}
            proStartDate="May 2020"
            proEndDate="June 2024"
            proInstitution="Mest"
            proDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            proSkills="React"
            contributors="Gifty Theo Ellen Ruth"
            proLink="nana.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
