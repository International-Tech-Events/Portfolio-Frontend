import { useNavigate } from 'react-router-dom';
import PagesLayout from '../pagesLayout';
import VolunteerCard from '../../../../components/volunteerCard';
import pl from '../../../../images/plan.jpeg';

const Volunteer = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="">
        <PagesLayout
          headerText="Volunteer"
          buttonText="Add new Volunteer"
          onClick={() => navigate('/dashboard/volunteer/add')}
        >
          {/* <span>Volunteer list here</span> */}
        </PagesLayout>

        <div className="bg-gray-500 min-h-screen p-4">
          <div className="flex ml-20">
            <div className="flex-1">
              <VolunteerCard
                volStartDate="May 2022"
                volEndDate="May 2024"
                volOrganization="International tech event"
                volTitle="Connecting tech people"
                volRole="Organizer"
                volSkill="Communication, Pitching"
                volResponsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
              />
            </div>

            <div className="flex-1">
              <VolunteerCard
                volStartDate="May 2022"
                volEndDate="May 2024"
                volOrganization="International tech event"
                volTitle="Connecting tech people"
                volRole="Organizer"
                volSkill="Communication, Pitching"
                volResponsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
              />
            </div>
          </div>

          <div className="flex ">
            <div className="flex-1 ml-20 mb-20">
              <VolunteerCard
                volStartDate="May 2022"
                volEndDate="May 2024"
                volOrganization="International tech event"
                volTitle="Connecting tech people"
                volRole="Organizer"
                volSkill="Communication, Pitching"
                volResponsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
              />
            </div>
            <div className="flex-1">
              <VolunteerCard
                volStartDate="May 2022"
                volEndDate="May 2024"
                volOrganization="International tech event"
                volTitle="Connecting tech people"
                volRole="Organizer"
                volSkill="Communication, Pitching"
                volResponsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;

// import { useNavigate } from 'react-router-dom';
// import PagesLayout from '../pagesLayout';
// import VolunteerCard from '../../../../components/volunteerCard';
// import pl from '../../../../images/plan.jpeg';

// const Volunteer = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="bg-gray-500 min-h-screen p-4">
//       <PagesLayout
//         headerText="Volunteer"
//         buttonText="Add new Volunteer"
//         onClick={() => navigate('/dashboard/volunteer/add')}
//       >
//         {/* <span>Volunteer list here</span> */}
//       </PagesLayout>

//       <div className="container mx-auto">
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
//             <VolunteerCard
//               volStartDate="May 2022"
//               volEndDate="May 2024"
//               volOrganization="International tech event"
//               volTitle="Connecting tech people"
//               volRole="Organizer"
//               volSkill="Communication, Pitching"
//               volResponsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
//             />
//           </div>

//           <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
//             <VolunteerCard
//               volStartDate="May 2022"
//               volEndDate="May 2024"
//               volOrganization="International tech event"
//               volTitle="Connecting tech people"
//               volRole="Organizer"
//               volSkill="Communication, Pitching"
//               volResponsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
//             />
//           </div>

//           <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
//             <VolunteerCard
//               volStartDate="May 2022"
//               volEndDate="May 2024"
//               volOrganization="International tech event"
//               volTitle="Connecting tech people"
//               volRole="Organizer"
//               volSkill="Communication, Pitching"
//               volResponsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
//             />
//           </div>

//           <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
//             <VolunteerCard
//               volStartDate="May 2022"
//               volEndDate="May 2024"
//               volOrganization="International tech event"
//               volTitle="Connecting tech people"
//               volRole="Organizer"
//               volSkill="Communication, Pitching"
//               volResponsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Volunteer;
