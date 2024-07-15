import { useNavigate } from 'react-router-dom';
import PagesLayout from '../pagesLayout';

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
    </div>
  );
};

export default Volunteer;
