// import React from 'react';

// import styled from 'styled-components';

// const CardContainer = styled.div`
//   perspective: 1000px;
//   width: 600px;
//   height: 500px;
// `;

// const CardInner = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   transition: transform 0.7s;
//   transform-style: preserve-3d;
//   &:hover {
//     transform: rotateY(180deg);
//   }
// `;

// const CardFace = styled.div`
//   position: absolute;
//   inset: 0;
//   backface-visibility: hidden;
//   &.back {
//     transform: rotateY(180deg);
//   }
// `;

// const ProjectCard = ({
//   proimg,
//   proStartDate,
//   proEndDate,
//   proInstitution,
//   proDescription,
//   proSkills,
//   contributors,
//   proLink,
//   projectName,
// }) => {
//   return (
//     <CardContainer className="mt-24">
//       <CardInner>
//         <CardFace>
//           <img src={proimg} alt="" className="w-full h-full object-cover" />
//           <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//             <h3 className="text-3xl font-bold">{projectName}</h3>
//           </div>
//         </CardFace>
//         <CardFace className="back p-4 bg-white flex flex-col items-center justify-center">
//           <span className="block mb-2">
//             {proStartDate} - {proEndDate}
//           </span>
//           <p className="text-[2rem] font-semibold mb-2">{proInstitution}</p>
//           <p className="text-base mb-2">{proDescription}</p>
//           <div className="mb-2 items-center">
//             <span className="block font-semibold items-center text-[1.5rem]">
//               Skills:
//             </span>
//             <p className="items-center">{proSkills}</p>
//           </div>
//           <div className="mb-2">
//             <span className="block items-center font-semibold text-[1.5rem]">
//               Contributors:
//             </span>
//             <p className="items-center">{contributors}</p>
//           </div>
//           <div className="mt-2">
//             <a href={proLink} className="text-blue-500 hover:underline">
//               Project Link
//             </a>
//           </div>
//         </CardFace>
//       </CardInner>
//     </CardContainer>
//   );
// };

// export default ProjectCard;
