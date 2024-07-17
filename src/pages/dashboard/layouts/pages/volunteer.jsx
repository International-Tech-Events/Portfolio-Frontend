import { useNavigate } from 'react-router-dom';
import PagesLayout from '../pagesLayout';
import VolunteerCard from '../../../../components/volunteerCard';
import pl from '../../../../images/plan.jpeg';

const Volunteer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PagesLayout
        headerText="Volunteer"
        buttonText="Add new Volunteer"
        onClick={() => navigate('/dashboard/volunteer/add')}
      >
        <span>Volunteer list here</span>
      </PagesLayout>

      <div className="flex">
        <div className="flex-1">
          <VolunteerCard
            volStartDate="May 2022"
            volEndDate="May 2024"
            volOrganization="Plan Internation"
            volTitle="Caring for the needy"
            volRole="Organizer"
            volSkill="Communication, Pitching"
            volResponsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
            volImg={pl}
          />
        </div>
        <div className="flex-1">empty</div>
      </div>

      <div className="flex">
        <div className="flex-1">empty</div>
        <div className="flex-1">
          <VolunteerCard
            volStartDate="May 2022"
            volEndDate="May 2024"
            volOrganization="Plan Internation"
            volTitle="Caring for the needy"
            volRole="Organizer"
            volSkill="Communication, Pitching"
            volResponsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
            volImg={pl}
          />
        </div>
      </div>

      <div className="flex">
        <div className="flex-1">
          <VolunteerCard
            volStartDate="May 2022"
            volEndDate="May 2024"
            volOrganization="Plan Internation"
            volTitle="Caring for the needy"
            volRole="Organizer"
            volSkill="Communication, Pitching"
            volResponsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
            volImg={pl}
          />
        </div>
        <div className="flex-1">empty</div>
      </div>

      <div className="flex">
        <div className="flex-1">empty</div>
        <div className="flex-1">
          <VolunteerCard
            volStartDate="May 2022"
            volEndDate="May 2024"
            volOrganization="Plan Internation"
            volTitle="Caring for the needy"
            volRole="Organizer"
            volSkill="Communication, Pitching"
            volResponsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
            volImg={pl}
          />
        </div>
      </div>

      <div className="flex">
        <div className="flex-1">
          <VolunteerCard
            volStartDate="May 2022"
            volEndDate="May 2024"
            volOrganization="Plan Internation"
            volTitle="Caring for the needy"
            volRole="Organizer"
            volSkill="Communication, Pitching"
            volResponsibilities="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
            volImg={pl}
          />
        </div>
        <div className="flex-1">empty</div>
      </div>
    </div>
  );
};

export default Volunteer;
