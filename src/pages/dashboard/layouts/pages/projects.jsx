import React from 'react';
import PagesLayout from '../pagesLayout';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PagesLayout
        headerText="Projects"
        buttonText="Add new projects"
        onClick={() => navigate('/dashboard/projects/add')}
      >
        <span>Project List here</span>
      </PagesLayout>
    </div>
  );
};

export default Projects;
