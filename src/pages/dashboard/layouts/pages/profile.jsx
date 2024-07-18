import { useNavigate } from 'react-router-dom';
import PagesLayout from '../pagesLayout';
import { DownloadIcon } from 'lucide-react';
import ellen from '../../../../images/Ellen.jpg';
import SkillsCard from '../../../../components/skillsCard';
import github from '../../../../images/github.png';
import linkedin from '../../../../images/linked.png';
import twitter from '../../../../images/twiter2.png';
import inst from '../../../../images/instagram.png';
import ExperienceCard from '../../../../components/experienceCard';
import EducationCard from '../../../../components/educationCard';

const UserProfile = () => {
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle image upload, e.g., validate size, upload to server, etc.
      console.log('Image uploaded: ', file);
    }
  };

  return (
    <div>
      <PagesLayout
        headerText="Profile"
        buttonText="Add you r Profile"
        onClick={() => navigate('/dashboard/profile/add')}
      >
        {/* <span>Your profile</span> */}
      </PagesLayout>

      <div className="container mx-auto p-4">
        <div className="bg-white  p-8 shadow-lg shadow-slate-800 rounded-xl flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="md:w-1/3 p-4 flex flex-col items-center bg-white">
            <div className=" bg-secondary/40 shadow-lg shadow-black/50 px-5 pb-16 pt-10 rounded-b-full">
              <div className="relative">
                <div className="relative h-44 w-44 bg-primary/70 rounded-full flex items-center justify-center px-32 py-32">
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleImageUpload}
                  />
                  <img
                    src={ellen}
                    alt=""
                    className="rounded-full absolute size-[280px]"
                  />
                  {/* <CameraIcon className="absolute h-14 w-14 bg-secondary/65 bottom-2 right-2 p-2 rounded-full cursor-pointer" /> */}
                </div>
              </div>
              <h1 className="mt-4 text-center text-[2rem] font-bold">
                Ellen Akosua
              </h1>
              <p className="text-center text-primary text-[1.5rem]">
                Backend Developer
              </p>

              <div className="mt-6 flex flex-col items-center justify-center">
                <div className="mb-2 text-center">
                  <p className="font-semibold text-[1.5rem] text-gray-700">
                    Contact
                  </p>
                  <p>ellen@example.com</p>
                </div>
                <div className="mb-1 text-center">
                  <p className="font-semibold text-[1.5rem] text-gray-700">
                    Marital Status
                  </p>
                  <p>Single</p>
                </div>
                <div className="mb-2 text-center">
                  <p className="font-semibold text-[1.5rem] text-gray-700">
                    Gender
                  </p>
                  <p>Female</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  {/* <MapPin /> */}
                  <div className="text-center">
                    <p className="font-semibold text-[1.5rem] text-gray-700">
                      Location
                    </p>
                    <p>Accra, Ghana</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="text-center">
                    <p className="font-semibold text-[1.5rem]">Birthday</p>
                    <p>January 1, 1990</p>
                  </div>
                  {/* <Cake /> */}
                </div>
              </div>
            </div>

            <div className="mt-auto w-full">
              <h2 className="text-center text-lg font-semibold">
                Social Media
              </h2>
              <div className="flex justify-center gap-5 mt-2">
                <div className="">
                  <div className="flex items-center gap-2 mb-3">
                    <a
                      href="https://github.com/EllenAK"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                        <img src={github} alt="Github" className="h-8 w-8" />
                      </div>
                    </a>
                    <p className="text-gray-600">EllenAK</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://linkedin.com/in/EllenAK"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                        <img
                          src={linkedin}
                          alt="LinkedIn"
                          className="h-8 w-8"
                        />
                      </div>
                    </a>
                    <p className="text-gray-600">EllenAK</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <a
                      href="https://twitter.com/EllenAK"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                        <img src={twitter} alt="Twitter" className="h-8 w-8" />
                      </div>
                    </a>
                    <p className="text-gray-600">EllenAK</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://instagram.com/EllenAK"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                        <img src={inst} alt="Instagram" className="h-8 w-8" />
                      </div>
                    </a>
                    <p className="text-gray-600">EllenAK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-2/3 p-4 bg-primary/70 text-white rounded-tr-[10rem]">
            <div className="mb-4 mt-10 px-16">
              <h1 className="text-[2rem] font-bold">About</h1>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="mb-4 px-16">
              <h1 className="text-[1.6rem] font-bold">Skills </h1>
              <div className="">
                <SkillsCard
                  skillName="Express"
                  percentage="80"
                  skillUser="Ellen"
                />{' '}
              </div>
            </div>
            <div className="mb-4 px-16">
              <h1 className="text-[1.6rem] font-bold">Experience</h1>
              <div className="mt-2">
                <ExperienceCard
                  exStartDate="2023"
                  exEndDate="2024"
                  exPlace="Mest (Generation-Africa)"
                  exRole="Web Developments"
                  exSkills="HTML, CSS, React"
                  exResponsibility="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
                  exUser="Nana"
                  dateColor="#BFDBFD"
                />
              </div>
            </div>

            <div>
              <h1 className="text-[1.6rem] font-bold mb-4 px-16">Education</h1>
              <div className="mt-2 mb-4 px-16 text-black">
                <EducationCard
                  schName="Generation-Mest"
                  schStartDate="May 2024"
                  schEndDate="Present"
                  schProgram="Web Development"
                  proDescription=" Consequat interdum varius sit amet mattis vulputate. Iaculis at erat pellentesque adipiscing. Molestie nunc non blandit massa enim nec dui nunc mattis."
                />
              </div>
            </div>
            <div className="px-8 md:px-16">
              <h1 className="text-2xl font-bold">Resume</h1>
              <a
                href="resume.pdf"
                download
                className="w-fit flex mt-2 py-2 px-4 bg-white text-primary rounded shadow items-center gap-2"
              >
                <DownloadIcon className="h-5 w-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
