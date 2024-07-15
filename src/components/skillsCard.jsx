const SkillsCard = ({ skillName, skillUser, percentage }) => {
  return (
    <div className=" text-black shadow-lg bg-white shadow-black/10 rounded-b-lg rounded-br-lg p-6 ">
      <div>
        <div>
          {/* <label for="file">{skillProficiency}</label>
          <progress id="file" value="32" max="100">
            {percentage}
          </progress> */}

          <div>
            <label for="file">Level:</label>
            <progress id="file" value="32" max="100">
              {percentage}
            </progress>
          </div>
        </div>
      </div>

      <div>
        <div>{skillName}</div>
      </div>
      <p>{skillUser}</p>
    </div>
  );
};

export default SkillsCard;
{
  /* <progress value="70" max="100">
  70%
</progress>; */
}

// import React, { useState, useEffect } from 'react';

// const SkillsCard = ({ skillProficiency, skillName, skillUser }) => {
//   const [loading, setLoading] = useState(true);

//   // Simulate loading effect
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000); // Adjust the timeout duration as needed
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-6 mx-auto">
//       {loading ? (
//         <div className="flex justify-center items-center h-20">
//           <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
//         </div>
//       ) : (
//         <>
//           <div className="font-bold text-xl mb-2">{skillName}</div>
//           <p className="text-gray-700 text-base">
//             Proficiency: {skillProficiency}
//           </p>
//           <p className="text-gray-700 text-base">User: {skillUser}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default SkillsCard;
