import { Github, Linkedin, X } from "lucide-react";



const BasicInfo = () => {
    return (
        <div id="basic-info-card" className="relative flex-[2] h-screen">

            <div id="avatar" className="absolute top-[5%] left-[20%] size-[170px] border-2 box-border bg-white text-black text-center rounded-[50%]">Avatar</div>

            <div className="h-[80%] text-[10pt]">

                <div className="h-[25%] bg-[rgba(0,0,0,0.4)] rounded-t-lg"></div>

                <div className="h-[75%] bg-[#04131F] rounded-b-lg text-[#60A5FA] flex flex-col gap-4 justify-end pb-2">

                    <div id="info" className="flex flex-col gap-1 pl-[1rem]">
                        <p>Name:</p>
                        <p>Sex:</p>
                        <p>D.O.B:</p>
                        <p>Marital Status:</p>
                        <p>Languages:</p>
                        <p>Address:</p>
                        <p>Email:</p>
                        <p>Phone:</p>
                    </div>

                    <div id="social-media" className="flex flex-col gap-2 items-center">

                        <p>Follow me on social media:</p>

                        <div className="flex gap-x-4">
                            <a href=""> <Github className="size-[20px]"/> </a>
                            <a href=""> <Linkedin className="size-[20px]"/> </a>
                            <a href=""> <X className="size-[20px]"/> </a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BasicInfo;