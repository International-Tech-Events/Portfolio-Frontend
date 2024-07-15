import React, { useState } from 'react';
import SkillTile from './skillTile';



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
                >ABOUT ME</button>


                <button
                    className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
                    onClick={() => handleTabClick('skills')}
                >SKILLS</button>


                <button
                    className={`tab ${activeTab === 'experiences' ? 'active' : ''}`}
                    onClick={() => handleTabClick('experiences')}
                >EXPERIENCES</button>

            </div>

            
            <div className="tab-content">

                {activeTab === 'about' && <div>
                    About Me Content <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, laborum labore obcaecati rerum repellendus dignissimos quisquam pariatur maiores, iure facere culpa odit reprehenderit, mollitia nisi quaerat iusto aperiam. Veniam, iure?
                </div>}

                {activeTab === 'skills' && <div className='flex flex-col gap-4'>

                    <div>MY SKILLS</div>

                    <div className='flex flex-row flex-wrap justify-between gap-8'>
                        <SkillTile />
                        <SkillTile />
                        <SkillTile />
                        <SkillTile />
                        <SkillTile />
                        <SkillTile />
                    </div>

                </div>}

                {activeTab === 'experiences' && <div>
                    Experiences Content <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sunt, dignissimos alias natus perferendis veniam animi eum? Magni eum sapiente architecto dolore minima ut fuga rerum, consequuntur recusandae voluptatibus culpa!
                </div>}

            </div>

        </div>
    );
};

export default TabNavigation;