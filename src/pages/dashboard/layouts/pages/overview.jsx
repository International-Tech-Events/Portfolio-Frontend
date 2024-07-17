// import React from 'react';
// import ReturnPage from '../../../../components/returnPage';
// import {
//   Award,
//   BookDashed,
//   BookText,
//   CircleUserRound,
//   FolderKanban,
//   HandHelping,
//   MedalIcon,
// } from 'lucide-react';

// const Overview = () => {
//   return (
//     <>
//       <div className="flex gap-9 my-10 ml-10">
//         {/* <div className="text-black shadow-lg bg-white rounded-b-lg rounded-br-lg p-6"> */}
//         <div className="flex flex-col">
//           <div className="flex gap-x-9 mb-6 ">
//             <div className="h-80 w-80 bg-slate-600 ">
//               <div className="flex justify-between">
//                 <MedalIcon className="size-20" />
//                 <span>Experiences</span>
//               </div>
//               <p className="text-[40px]">32</p>
//             </div>

//             <div className="h-[320px] w-[700px] bg-slate-300 ">
//               <div className="flex justify-between">
//                 <BookText className="size-24" />
//                 <span>Skills</span>
//               </div>
//               <h1 className="text-[40px]">76</h1>
//             </div>
//           </div>

//           <div className="flex gap-x-9">
//             <div className="h-80 w-[330px] bg-slate-600">
//               <div className="flex justify-between">
//                 <Award className="size-24" />
//                 <span>Achievements</span>
//               </div>
//               <h1 className="text-[40px]">45</h1>
//             </div>

//             <div className="h-80 w-[330px] bg-slate-300 ">
//               <div className="flex justify-between">
//                 <BookDashed className="size-24" />
//                 <span>Education</span>
//               </div>
//               <h1 className="text-[40px]">57</h1>
//             </div>

//             <div className="h-80 w-[330px] bg-slate-600 ">
//               <div className="flex justify-between">
//                 <HandHelping className="size-24" />
//                 <span>Volunteer</span>
//               </div>
//               <h1 className="text-[40px]">56</h1>
//             </div>
//           </div>

//           <div className="h-[250px] w-auto bg-slate-600 mt-6 ">
//             <div className="flex justify-between">
//               <FolderKanban className="size-24" />
//               <span>Projects</span>
//             </div>
//             <h1 className="text-[40px]">77</h1>
//           </div>
//         </div>

//         <div className="h-[938px] w-[400px] bg-slate-300 flex justify-between">
//           <CircleUserRound className="size-24" />
//           <span>User Profile</span>
//         </div>
//       </div>
//       {/* <div className="right-60">
//         <ReturnPage homepages="overview" />
//       </div> */}
//     </>

//     // </div>
//   );
// };

// export default Overview;

import React from 'react';
import {
  Award,
  BookDashed,
  BookText,
  CircleUserRound,
  FolderKanban,
  HandHelping,
  MedalIcon,
} from 'lucide-react';

const Overview = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 mt-28">
      {/* Left Section */}
      <div className="flex flex-col flex-grow gap-6">
        {/* Experiences and Skills */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col justify-between p-4 bg-slate-600 text-white rounded-lg shadow-md w-full md:w-1/3 h-40">
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
          <div className="flex flex-col justify-between p-4 bg-slate-300 text-black rounded-lg shadow-md w-full md:w-2/3 h-40">
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
          <div className="flex flex-col justify-between p-4 bg-slate-600 text-white rounded-lg shadow-md w-full md:w-1/3 h-40">
            <div className="flex justify-between items-center">
              <Award className="h-6 w-6" />
              <span className="text-lg font-semibold">Achievements</span>
            </div>
            <h1 className="text-4xl font-bold">45</h1>
            {/* <div className="text-sm mt-2">
              <p>Recent Award: Best Developer 2023</p>
            </div> */}
          </div>
          <div className="flex flex-col justify-between p-4 bg-slate-300 text-black rounded-lg shadow-md w-full md:w-1/3 h-40">
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
          <div className="flex flex-col justify-between p-4 bg-slate-600 text-white rounded-lg shadow-md w-full md:w-1/3 h-40">
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
        <div className="flex flex-col justify-between p-4 bg-slate-600 text-white rounded-lg shadow-md w-full h-40 md:h-60">
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
      <div className="flex flex-col justify-between p-4 bg-slate-300 text-black rounded-lg shadow-md w-full md:w-1/4 h-auto">
        <div className="flex justify-between items-center">
          <CircleUserRound className="h-6 w-6" />
          <span className="text-lg font-semibold">User Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
