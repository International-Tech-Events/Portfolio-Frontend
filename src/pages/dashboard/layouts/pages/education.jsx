import React from 'react';
import PagesLayout from '../pagesLayout';
import { useNavigate } from 'react-router-dom';
import EducationCard from '../../../../components/educationCard';

const Education = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-500 min-h-screen">
      <PagesLayout
        headerText="Education"
        buttonText="Add new Education"
        onClick={() => navigate('/dashboard/education/add')}
      >
        <span>Education List here</span>
      </PagesLayout>

      <div className="flex flex-col gap-y-10 mx-4 md:mx-16 lg:mx-64 mt-16">
        <div className="">
          <EducationCard
            schName="Generation-Mest"
            schStartDate="May 2024"
            schEndDate="Present"
            schProgram="Web Development"
            proDescription=" Consequat interdum varius sit amet mattis vulputate. Iaculis at erat pellentesque adipiscing. Molestie nunc non blandit massa enim nec dui nunc mattis."
          />
        </div>

        <div>
          <EducationCard
            schName="Generation-Mest"
            schStartDate="May 2024"
            schEndDate="Present"
            schProgram="Web Development"
            proDescription=" Consequat interdum varius sit amet mattis vulputate. Iaculis at erat pellentesque adipiscing. Molestie nunc non blandit massa enim nec dui nunc mattis."
          />
        </div>

        <div>
          <EducationCard
            schName="Generation-Mest"
            schStartDate="May 2024"
            schEndDate="Present"
            schProgram="Web Development"
            proDescription=" Consequat interdum varius sit amet mattis vulputate. Iaculis at erat pellentesque adipiscing. Molestie nunc non blandit massa enim nec dui nunc mattis."
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
