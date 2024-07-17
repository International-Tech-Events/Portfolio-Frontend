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
      <div className="bg-gray-500 min-h-[100%]">
        <PagesLayout
          headerText="Skills"
          buttonText="Add new Skill"
          onClick={() => navigate('/dashboard/skills/add')}
        >
          <span>All Skills here</span>
        </PagesLayout>

        <div className="flex flex-col gap-7 items-center justify-center mb-20">
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
                skillName="HTML"
                // skillProficiency="Advanced"
                percentage="90"
                skillUser="Nana"
              />
            </div>

            <div className="mb-11">
              <SkillsCard
                skillName="CSS"
                // skillProficiency="Advanced"
                skillUser="Nana"
                percentage="65"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-11">
              <SkillsCard
                skillName="JavaScript"
                // skillProficiency="Beginner"
                skillUser="Nana"
                percentage="30"
              />
            </div>

            <div className="mb-11">
              <SkillsCard
                skillName="React"
                // skillProficiency="Intermediate"
                skillUser="Nana"
                percentage="80"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-11 ">
              <SkillsCard
                skillName="Figma"
                // skillProficiency="Intermediate"
                skillUser="Nana"
                percentage="70"
              />
            </div>
            <div className="mb-11 ">
              <SkillsCard
                skillName="Figma"
                // skillProficiency="Intermediate"
                skillUser="Nana"
                percentage="70"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
