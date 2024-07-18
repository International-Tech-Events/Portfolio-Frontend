import { Github, Linkedin, X } from "lucide-react";
import xLogo from '../images/xlogo.png';



const BasicInfo = ({cover, profilePic, name, sex, dob, mStatus, lang, loc, email, phone, github, linkedin, twitter}) => {
    return (
        <div id="profileCard" className="relative flex-[2] h-screen">

            <div id="avatar" className="absolute top-[5%] left-[20%] size-[170px] border-2 box-border bg-white text-black text-center rounded-[50%]">
                <img className="size-[170px] w-fit" src={profilePic} alt="Profile picture" />
            </div>

            <div className="h-[80%] text-[10pt]">

                <div className="h-[25%] bg-[rgba(0,0,0,0.4)] bg-center bg-cover bg-origin-border rounded-t-lg">
                    <img src={cover} alt="Cover photo" className="" />
                </div>

                <div className="h-[75%] bg-[#04131F] rounded-b-lg text-[#60A5FA] flex flex-col gap-4 justify-end pb-2">

                    <div id="info" className="flex flex-col gap-1 pl-[1rem]">
                        <p>Name: {name}</p>
                        <p>Sex: {sex}</p>
                        <p>D.O.B: {dob}</p>
                        <p>Marital Status: {mStatus}</p>
                        <p>Languages: {lang}</p>
                        <p>Address: {loc}</p>
                        <p>Email: {email}</p>
                        <p>Phone: {phone}</p>
                    </div>

                    <div id="social-media" className="flex flex-col gap-2 items-center">

                        <p>Follow me:</p>

                        <div className="flex items-center gap-x-4">
                            <a href={`${github}`} > <Github className="size-[24px]"/> </a>
                            <a href={`${linkedin}`} > <Linkedin className="size-[24px]"/> </a>
                            <a href={`${twitter}`} > <img src={xLogo} alt="X platform" className="size-[20px] text-[#60A5FA]"/> </a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BasicInfo;