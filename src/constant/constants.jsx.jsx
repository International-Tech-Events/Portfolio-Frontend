import gift from '../images/gifty.png';
import theo from '../images/theo.png';
import ell from '../images/ellen.png';
import ruth from '../images/ruth.png';
import {
  Award,
  BookDashed,
  BookText,
  FolderKanban,
  HandHelping,
  MedalIcon,
} from 'lucide-react';

const K = {
  OVERVIEW: [
    {
      id: 'skills',
      icon: <BookText />,
      text: 'Skills',
    },
    {
      id: 'projects',
      icon: <FolderKanban />,
      text: 'Projects',
    },
    {
      id: 'experiences',
      icon: <MedalIcon />,
      text: 'Experiences',
    },
    {
      id: 'achievements',
      icon: <Award />,
      text: 'achievements',
    },
    {
      id: 'education',
      icon: <BookDashed />,
      text: 'Education',
    },
    {
      id: 'Volunteering',
      icon: <HandHelping />,
      text: 'Volunteering',
    },
  ],

  PROJECTS: [
    {
      proStartDate: 'May 2020',
      proimg: { gift },
      projectName: 'Devport',
      proEndDate: 'June 2024',
      proInstitution: 'Mest',
      proDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      proSkills: 'React',
      contributors: 'Gifty Theo Ellen Ruth',
      proLink: 'nana.com',
    },
    {
      proStartDate: 'May 2020',
      proimg: { theo },
      projectName: 'Devport',
      proEndDate: 'June 2024',
      proInstitution: 'Mest',
      proDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      proSkills: 'React',
      contributors: 'Gifty Theo Ellen Ruth',
      proLink: 'nana.com',
    },
    {
      proStartDate: 'May 2020',
      proimg: { ell },
      projectName: 'Headstart School',
      proEndDate: 'June 2024',
      proInstitution: 'Mest',
      proDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      proSkills: 'React',
      contributors: 'Gifty Theo Ellen Ruth',
      proLink: 'nana.com',
    },
    {
      proStartDate: 'May 2020',
      proimg: { ruth },
      projectName: 'Haven of Mindfullness',
      proEndDate: 'June 2024',
      proInstitution: 'Mest',
      proDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      proSkills: 'React',
      contributors: 'Gifty Theo Ellen Ruth',
      proLink: 'nana.com',
    },
  ],

  EXPERIENCES: [
    {
      exStartDate: '2023',
      exEndDate: '2024',
      exPlace: 'Mest (Generation-Africa)',
      exRole: 'Web Developments',
      exSkills: 'HTML CSS React',
      exResponsibility:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
      exUser: 'Nana',
      dateColor: '#60A5FA',
    },

    {
      exStartDate: '2023',
      exEndDate: '2024',
      exPlace: 'Mest (Generation-Africa)',
      exRole: 'Web Developments',
      exSkills: 'HTML CSS React',
      exResponsibility:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
      exUser: 'Nana',
      dateColor: '#04131F',
    },
    {
      exStartDate: '2023',
      exEndDate: '2024',
      exPlace: 'Mest (Generation-Africa)',
      exRole: 'Web Developments',
      exSkills: 'HTML CSS React',
      exResponsibility:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
      exUser: 'Nana',
      dateColor: '#04131F',
    },
    {
      exStartDate: '2023',
      exEndDate: '2024',
      exPlace: 'Mest (Generation-Africa)',
      exRole: 'Web Developments',
      exSkills: 'HTML CSS React',
      exResponsibility:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
      exUser: 'Nana',
      dateColor: '#60A5FA',
    },
  ],

  ACHIEVEMENTS: [
    {
      achDate: '2024',
      achInstitution: 'Mest',
      achTitle: 'Ruthlicious Keto Haven',
      achDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
      achSkills: 'HTML CSS React',
      theproject:
        'https://preview.themeforest.net/item/zed-programmer-resume-portfolio-elementor-template-kit/full_screen_preview/47135920?_ga=2.62989423.1923050438.1720387898-2079034422.1719742841',
      achUser: 'Nana',
    },

    {
      achDate: '2024',
      achInstitution: 'Mest',
      achTitle: 'Ruthlicious Keto Haven',
      achDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
      achSkills: 'HTML CSS React',
      theproject:
        'https://preview.themeforest.net/item/zed-programmer-resume-portfolio-elementor-template-kit/full_screen_preview/47135920?_ga=2.62989423.1923050438.1720387898-2079034422.1719742841',
      achUser: 'Nana',
    },

    {
      achDate: '2024',
      achInstitution: 'Mest',
      achTitle: 'Ruthlicious Keto Haven',
      achDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
      achSkills: 'HTML CSS React',
      theproject:
        'https://preview.themeforest.net/item/zed-programmer-resume-portfolio-elementor-template-kit/full_screen_preview/47135920?_ga=2.62989423.1923050438.1720387898-2079034422.1719742841',
      achUser: 'Nana',
    },

    {
      achDate: '2024',
      achInstitution: 'Mest',
      achTitle: 'Ruthlicious Keto Haven',
      achDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
      achSkills: 'HTML CSS React',
      theproject:
        'https://preview.themeforest.net/item/zed-programmer-resume-portfolio-elementor-template-kit/full_screen_preview/47135920?_ga=2.62989423.1923050438.1720387898-2079034422.1719742841',
      achUser: 'Nana',
    },
  ],

  EDUCATION: [
    {
      schName: 'Generation-Mest',
      schStartDate: 'May 2024',
      schEndDate: 'Present',
      schProgram: 'Web Development',
      proDescription:
        ' Consequat interdum varius sit amet mattis vulputate. Iaculis at erat pellentesque adipiscing. Molestie nunc non blandit massa enim nec dui nunc mattis.',
    },

    {
      schName: 'Generation-Mest',
      schStartDate: 'May 2024',
      schEndDate: 'Present',
      schProgram: 'Web Development',
      proDescription:
        ' Consequat interdum varius sit amet mattis vulputate. Iaculis at erat pellentesque adipiscing. Molestie nunc non blandit massa enim nec dui nunc mattis.',
    },

    {
      schName: 'Generation-Mest',
      schStartDate: 'May 2024',
      schEndDate: 'Present',
      schProgram: 'Web Development',
      proDescription:
        ' Consequat interdum varius sit amet mattis vulputate. Iaculis at erat pellentesque adipiscing. Molestie nunc non blandit massa enim nec dui nunc mattis.',
    },
  ],

  VOLUNTEER: [
    {
      volStartDate: 'May 2022',
      volEndDate: 'May 2024',
      volOrganization: 'International tech event',
      volTitle: 'Connecting tech people',
      volRole: 'Organizer',
      volSkill: 'Communication, Pitching',
      volResponsibilities:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
    },

    {
      volStartDate: 'May 2022',
      volEndDate: 'May 2024',
      volOrganization: 'International tech event',
      volTitle: 'Connecting tech people',
      volRole: 'Organizer',
      volSkill: 'Communication, Pitching',
      volResponsibilities:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
    },

    {
      volStartDate: 'May 2022',
      volEndDate: 'May 2024',
      volOrganization: 'International tech event',
      volTitle: 'Connecting tech people',
      volRole: 'Organizer',
      volSkill: 'Communication, Pitching',
      volResponsibilities:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
    },

    {
      volStartDate: 'May 2022',
      volEndDate: 'May 2024',
      volOrganization: 'International tech event',
      volTitle: 'Connecting tech people',
      volRole: 'Organizer',
      volSkill: 'Communication, Pitching',
      volResponsibilities:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
    },
  ],
};

export default K;
