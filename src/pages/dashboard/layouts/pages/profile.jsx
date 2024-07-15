import { useNavigate } from 'react-router-dom';
import PagesLayout from '../pagesLayout';

const UserProfile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PagesLayout
        headerText="Profile"
        buttonText="Add your Profile"
        onClick={() => navigate('/dashboard/profile/add')}
      >
        <span>Your profile</span>
      </PagesLayout>
    </div>
  );
};

export default UserProfile;
