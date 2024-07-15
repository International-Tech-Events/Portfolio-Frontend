import React from 'react';
import PagesLayout from '../pagesLayout';
import { useNavigate } from 'react-router-dom';

const Education = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PagesLayout
        headerText="Education"
        buttonText="Add new Education"
        onClick={() => navigate('/dashboard/education/add')}
      >
        <span>Education List here</span>
      </PagesLayout>
    </div>
  );
};

export default Education;
