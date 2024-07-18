// import React from 'react';

import { Link } from 'react-router-dom';
import Overview from './pages/overview';
import {
  Award,
  BookCheck,
  BookDashed,
  BookText,
  CircleUserRound,
  FolderKanban,
  HandHelping,
  LayoutDashboard,
  MedalIcon,
  Rows3,
  SearchCodeIcon,
} from 'lucide-react';

// const NavLinks = () => {
//   return <div></div>;
// };

const K = {
  NAVLINKS: [
    {
      icon: <LayoutDashboard />,
      text: 'Overview',
      link: '/dashboard',
    },
    {
      icon: <CircleUserRound />,
      text: 'User Profile',
      link: '/dashboard/profile',
    },
    {
      icon: <BookText />,
      text: 'Skills',
      link: '/dashboard/skills',
    },

    {
      icon: <FolderKanban />,
      text: 'Projects',
      link: '/dashboard/projects',
    },
    {
      icon: <MedalIcon />,
      text: 'Experiences',
      link: '/dashboard/experiences',
    },
    {
      icon: <Award />,
      text: 'Achievements',
      link: '/dashboard/achievements',
    },
    {
      icon: <BookDashed />,
      text: 'Education',
      link: '/dashboard/education',
    },
    {
      icon: <HandHelping />,
      text: 'Volunteer',
      link: '/dashboard/volunteer',
    },
    {
      icon: <Rows3 />,
      text: 'Preview',
      link: '/portfolio',
    },
  ],
};
export default K;
