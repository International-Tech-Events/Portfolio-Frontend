import { Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import EllenPic from '../images/Ellen.jpg';
import { Github, Linkedin, X } from "lucide-react";
import xLogo from '../images/xlogo.png';
import EducationTile from "../components/educationTile";
import ExperienceTile from "../components/experienceTile";
import SkillTile from "../components/skillTile";
import ProjectInfo from "../components/projectInfo";




const PreviewPage = () => {
    return (
        <div id="main-body">

            <header className="relative h-screen w-full flex items-center justify-center">

                <nav className="absolute top-0 w-full flex justify-between items-center py-[2.5rem] px-[5rem]">

                    <a href="#" className="font-bold text-white">techFOLIO</a>

                    <div className="w-[60%] flex justify-between font-semibold text-white">

                        <a className="nav-link" href="#">About</a>
                        <a className="nav-link" href="#">Skills</a>
                        <a className="nav-link" href="#">Experiences</a>
                        <a className="nav-link" href="#">Education</a>
                        <a className="nav-link" href="#">Achievements</a>
                        <a className="nav-link" href="#">Projects</a>
                        <a className="nav-link" href="#">Volunteering</a>

                    </div>

                </nav>

                {/* <div className="bg-[#EBEFFF] rotate-45 size-[80px] absolute bottom-[23%] left-[46%]"></div> */}

                <div className="text-center absolute">

                    <p className="text-[1.5em] text-white">HEY! I AM</p>

                    <p className="my-name font-black text-[5em] py-[2rem]">Ellen Ntiamoah</p>

                    <div>
                        <TypeAnimation sequence={[
                            "I'm a Junior Developer",
                            2000,
                            "I do Backend Development",
                            2000,
                            "I design the backend logic",
                            2000,
                            "I build backend infrastructure",
                            2000]}
                            // wrapper="span"
                            speed={50}
                            // speed={{type:'keyStrokeDelayInMs', value:100}}
                            // deletionSpeed={90}
                            // omitDeletionAnimation={true}
                            style={{ fontSize: '2em', color: 'white', fontWeight: '600' }}
                            repeat={Infinity}
                        />
                    </div>

                </div>

                {/* <div className="flex-[1] h-screen bg-[#EBEFFF]"></div>

                <div className="flex-[2]"></div> */}

            </header>



            <hr className="my-[5rem]" />



            <section className="flex mx-[4rem]">

                <div className="flex-[1] border-r">
                    <img src={EllenPic} alt="Photo of Ellen" className="h-[600px] object-scale-down rounded-lg" />
                </div>


                <div className="flex-[1] py-[1rem] pl-[2rem] border-l flex flex-col justify-evenly">

                    <div className="font-black font-mono text-[3em]">About Me</div>

                    <p className="">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit culpa delectus enim, eligendi consectetur facilis vero molestiae dolorem quos doloremque odit impedit voluptatibus, nisi perspiciatis quibusdam praesentium suscipit modi officiis.
                    </p>

                    <div className="">
                        <p>Name:</p>
                        <p>Sex:</p>
                        <p>D.O.B.</p>
                        <p>Marital Status:</p>
                        <p>Languages:</p>
                        <p>Address:</p>
                        <p>E-mail:</p>
                        <p>Phone</p>

                        <div></div>
                    </div>

                    <div> <span className="text-white"> 120</span> Project(s) completed</div>

                    <div>
                        <a href="/src/files/simulation.pdf" download className='flex gap-2 w-max rounded px-4 py-2 bg-[#04131F] text-[#60A5FA]'> <Download /> My Resume </a>
                    </div>

                    <div id="social-media" className="flex flex-col gap-2 items-center">

                        <p>Follow me:</p>

                        <div className="flex items-center gap-x-4">
                            <a href="" > <Github className="size-[24px] text-[#60A5FA]" /> </a>
                            <a href="" > <Linkedin className="size-[24px] text-[#60A5FA]" /> </a>
                            <a href="" > <img src={xLogo} alt="X platform" className="size-[20px] text-[#60A5FA]" /> </a>
                        </div>

                    </div>

                </div>

            </section>



            <hr className="my-[5rem]" />



            <section className="mx-[4rem] flex flex-col gap-[4rem]">

                <p className="font-extrabold text-white text-[2rem]">EDUCATION</p>

                <div className='grid grid-cols-2 gap-[3rem] justify-items-center'>
                    <EducationTile />
                    <EducationTile />
                    <EducationTile />
                </div>

            </section>



            <hr className="my-[5rem]" />



            <section className="px-[4rem] flex flex-col gap-[3rem]">

                <p className="font-extrabold text-white text-[2rem]">EXPERIENCE</p>

                <div className="flex justify-center">
                    <div className="flex flex-col gap-[2.5rem] w-[85%]">
                        <ExperienceTile />
                        <ExperienceTile />
                        <ExperienceTile />
                    </div>
                </div>

            </section>



            <hr className="my-[5rem]" />



            <section className="px-[4rem] flex flex-col gap-[3rem]">

                <p className="font-extrabold text-white text-[2rem]">SKILLS</p>

                <div className="flex justify-center">
                    <div className="w-[75%] flex flex-row flex-wrap gap-[3rem]">
                        <SkillTile />
                        <SkillTile />
                        <SkillTile />
                        <SkillTile />
                    </div>
                </div>

            </section>



            <hr className="my-[5rem]" />



            <section className="px-[4rem] flex flex-col gap-[3rem]">

                <p className="font-extrabold text-white text-[2rem]">PROJECTS</p>

                <div className="flex flex-wrap gap-[4rem] justify-center">

                    <ProjectInfo />
                    <ProjectInfo />

                </div>

            </section>



            <hr className="my-[5rem]" />

        </div>
    );
};

export default PreviewPage;