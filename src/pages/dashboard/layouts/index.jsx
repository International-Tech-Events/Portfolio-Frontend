import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/sidebar';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { SquareMenu } from 'lucide-react';
import { getToken } from '../../../services/config';

const DashboardLayout = () => {
  const [profile, setProfile] = useState();

  const token = getToken();

  const getUserProfile = async () => {
    try {
      const response = await apiGetProfile();
      const userProfileData = response?.data.profile;
      setProfile(userProfileData);
    } catch (error) {
      toast.error('An error occured');
    }
  };

  useEffect(() => {
    if (token) {
      getUserProfile();
    }
  }, []);

  if (!token) {
    return <Navigate to="/signin" />;
  }

  const getAvatar = () => {
    if (!profile) return 'N/A';
    const initials = `${profile.firstName[0]}${profile.lastName[0]}`;
    return initials.toUpperCase();
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className=" w-full">
        <div className="flex px-16 bg-primary py-5 shadow items-center">
          <span className="p-3 bg-pink text-white rounded-full shadow-md hover:bg-white hover:text-pink">
            <SquareMenu className="size-8" />
          </span>
          <Link
            to="/dashboard/profile"
            className="ml-auto bg-pink p-4 rounded-full cursor-pointer"
          >
            <span className="text-xl font-semibold text-white">
              {getAvatar()}
            </span>
          </Link>
        </div>
        <Outlet context={[profile, setProfile]} />
      </div>
    </div>
  );
};

export default DashboardLayout;
