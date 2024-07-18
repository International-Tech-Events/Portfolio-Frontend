// import React from 'react';

// const VolunteerCard = ({
//   volStartDate,
//   volEndDate,
//   volOrganization,
//   volTitle,
//   volRole,
//   volSkill,
//   volResponsibilities,
//   volImg,
// }) => {
//   return (
//     <div>
//       <div>
//         <p>
//           {volStartDate} - {volEndDate}
//         </p>
//         <h1>{volOrganization}</h1>
//         <img src={volImg} alt="" className="size-36" />
//       </div>
//       <div>
//         <h3>{volTitle}</h3>
//         <p>{volRole}</p>
//         <p>{volSkill}</p>
//         <p>{volResponsibilities}</p>
//       </div>
//     </div>
//   );
// };

// export default VolunteerCard;

import React from 'react';

const VolunteerCard = ({
  volStartDate,
  volEndDate,
  volOrganization,
  volTitle,
  volRole,
  volSkill,
  volResponsibilities,
  // volImg,
}) => {
  return (
    <div className="relative w-[600px] h-[500px] bg-white shadow-lg rounded-lg overflow-hidden group mt-12">
      <div className="p-6">
        <p className="text-gray-500">
          {volStartDate} - {volEndDate}
        </p>
        <h1 className="text-xl font-bold">{volOrganization}</h1>
        {/* <img
          src={volImg}
          alt=""
          className="w-36 h-36 object-cover mt-4 rounded-full"
        /> */}
      </div>
      <div className="absolute inset-0 bg-white bg-opacity-90 p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-2xl font-semibold">{volTitle}</h3>
        <p className="text-gray-700 mt-2">{volRole}</p>
        <p className="text-gray-700 mt-2">{volSkill}</p>
        <p className="text-gray-700 mt-4">{volResponsibilities}</p>
      </div>
    </div>
  );
};

export default VolunteerCard;
