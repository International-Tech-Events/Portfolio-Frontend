import React, { useState } from 'react';
import SkillTile from './skillTile';
import ExperienceTile from './experienceTile';
import { Download } from 'lucide-react';
import AboutSection from '../sections/aboutSection';
import EducationTile from './educationTile';
import AchievementTile from './achievementTile';
import ProjectTile from './projectTile';



const TabNavigation = () => {

    const [activeTab, setActiveTab] = useState('about');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };



    return (

        <div className="tab-navigation flex-[6]">

            <div className="tabs">

                <button
                    className={`tab ${activeTab === 'about' ? 'active' : ''}`}
                    onClick={() => handleTabClick('about')}
                >ABOUT</button>


                <button
                    className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
                    onClick={() => handleTabClick('skills')}
                >SKILLS</button>


                <button
                    className={`tab ${activeTab === 'experiences' ? 'active' : ''}`}
                    onClick={() => handleTabClick('experiences')}
                >EXPERIENCES</button>
                
                <button
                    className={`tab ${activeTab === 'education' ? 'active' : ''}`}
                    onClick={() => handleTabClick('education')}
                >EDUCATION</button>

                <button
                    className={`tab ${activeTab === 'achievement' ? 'active' : ''}`}
                    onClick={() => handleTabClick('achievement')}
                >ACHIEVEMENT</button>

                <button
                    className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
                    onClick={() => handleTabClick('projects')}
                >PROJECTS</button>

                <button
                    className={`tab ${activeTab === 'volunteering' ? 'active' : ''}`}
                    onClick={() => handleTabClick('volunteering')}
                >VOLUNTEERING</button>

            </div>



            <div className="tab-content">

                {activeTab === 'about' && <div className='flex flex-col gap-4'>
                    <p className='text-[18pt] text-center font-medium'>My Story</p>

                    <div className='text-[rgba(0,0,0,0.6)]'>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, laborum labore obcaecati rerum repellendus dignissimos quisquam pariatur maiores, iure facere culpa odit reprehenderit, mollitia nisi quaerat iusto aperiam. Veniam, iure?

                    <AboutSection />

                    </div>

                    <a href="/src/files/simulation.pdf" download className='flex gap-2 w-max rounded px-4 py-2 bg-[#04131F] text-[#60A5FA]'> <Download /> My Resume </a>

                </div>}

                {activeTab === 'skills' && <div className='flex flex-col gap-8'>

                    <div className='font-serif font-bold text-[20pt] text-center'>SKILLS</div>

                    <div className='flex flex-row flex-wrap gap-4'>
                        <SkillTile />
                        <SkillTile />
                        <SkillTile />
                        <SkillTile />
                        <SkillTile />
                        <SkillTile />
                    </div>

                </div>}

                {activeTab === 'experiences' && <div className='flex flex-col gap-8'>
                    <div className='font-semibold text-[#60A5FA]'>PROFESSIONAL HISTORY</div>

                    <div className='flex flex-col gap-5'>
                        <ExperienceTile />
                        <ExperienceTile />
                        <ExperienceTile />
                        <ExperienceTile />
                    </div>
                </div>}
                
                {activeTab === 'education' && <div className='flex flex-col gap-8'>

                    {/* <div className='font-semibold text-[#60A5FA]'>EDUCATION</div> */}

                    <div className='flex flex-col gap-[3rem]'>
                        <EducationTile />
                        <EducationTile />
                        <EducationTile />
                    </div>
                </div>}

                {activeTab === 'achievement' && <div className='flex flex-col gap-8'>

                    <div className='font-serif font-bold text-[20pt] text-center'>ACCOMPLISHMENTS</div>

                    <div className='flex flex-wrap gap-[1.5rem]'>
                        <AchievementTile />
                        <AchievementTile />
                        <AchievementTile />
                    </div>
                </div>}

                {activeTab === 'projects' && <div className='flex flex-col gap-8'>

                    <div className='font-serif font-bold text-[20pt]'>My Works</div>

                    <div className='flex flex-wrap gap-[1.5rem] ml-[2rem]'>
                        <ProjectTile />
                        <ProjectTile />
                        <ProjectTile />
                    </div>
                </div>}

                {activeTab === 'volunteering' && <div className='flex flex-col gap-8'>

                    <div className='font-serif font-bold text-[20pt] text-center'>Voluntary Works</div>

                    <div className='flex flex-wrap gap-[1.5rem]'></div>
                </div>}

            </div>

        </div>
    );
};

export default TabNavigation;