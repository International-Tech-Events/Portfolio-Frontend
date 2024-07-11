// import React from 'react';

import { Link } from 'react-router-dom';
import Overview from './pages/overview';
import {
  BookCheck,
  BookDashed,
  BookText,
  FolderKanban,
  LayoutDashboard,
  MedalIcon,
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
      icon: <BookText />,
      text: 'skills',
      link: '/dashboard/skills',
    },

    {
      icon: <FolderKanban />,
      text: 'projects',
      link: '/dashboard/projects',
    },
    {
      icon: <MedalIcon />,
      text: 'experience',
      link: '/dashboard/experiences',
    },
    {
      icon: <BookDashed />,
      text: 'education',
      link: '/dashboard/education',
    },
  ],
};
export default K;
