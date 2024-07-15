import { useNavigate } from 'react-router-dom';
import PagesLayout from '../pagesLayout';
import SkillsCard from '../../../../components/skillsCard';
import SkillsImages from '../../../../components/skillsImages';
import html from '../../../../images/html.png';
import css from '../../../../images/css.png';
import js from '../../../../images/javaSscript.png';
import react from '../../../../images/react.png';
import figma from '../../../../images/figma.png';

const Skills = () => {
  const navigate = useNavigate();
  return (
    <>
      <PagesLayout
        headerText="Skills"
        buttonText="Add new Skill"
        onClick={() => navigate('/dashboard/skills/add')}
      >
        <span>All Skills here</span>
      </PagesLayout>

      <div className="flex flex-col gap-7 items-center justify-center my-20">
        <div className="flex flex-row gap-11">
          <div>
            <SkillsImages image={html} />
          </div>
          <div>
            <SkillsImages image={css} />
          </div>
          <div>
            <SkillsImages image={js} />
          </div>
        </div>

        <div className="flex flex-row gap-11">
          <div>
            <SkillsImages image={react} />
          </div>
          <div>
            <SkillsImages image={figma} />
          </div>
        </div>
      </div>

      <div className="flex gap-x-10 mx-48">
        <div className="flex-1">
          <div className="mb-11">
            <SkillsCard
              skillProficiency="Advanced"
              //       <div>
              //   <label for="file">Downloading progress:</label>
              //   <progress id="file" value="32" max="100">
              //     {' '}
              //     32%{' '}
              //   </progress>
              // </div>
              skillName="HTML"
              skillUser="Nana"
              percentage="90%"
            />
          </div>

          <div className="mb-11">
            <SkillsCard
              skillProficiency="Advanced"
              skillName="CSS"
              skillUser="Nana"
              percentage="90%"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-11">
            <SkillsCard
              skillProficiency="Beginner"
              skillName="JavaScript"
              skillUser="Nana"
              percentage="90%"
            />
          </div>

          <div className="mb-11">
            <SkillsCard
              skillProficiency="Intermediate"
              skillName="React"
              skillUser="Nana"
              percentage="90%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
