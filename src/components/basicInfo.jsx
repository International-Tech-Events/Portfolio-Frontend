import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const BasicInfo = () => {
    return (
        <div id="basic-info-card" className="relative flex-[2] pt-[10px] pl-[10px] h-screen">

            <div id="avatar" className="absolute top-[5%] left-[25%] size-[170px] border-2 box-border bg-white text-black text-center rounded-[50%]">Avatar</div>

            <div className="h-[80%]">

                <div className="h-[25%] bg-blue-400 rounded-t-lg"></div>

                <div className="h-[75%] bg-[#04131F] rounded-b-lg border-b border-r border-l border-[#60A5FA] text-[#60A5FA] flex flex-col gap-4 justify-end pb-2">

                    <div id="text-info" className="flex flex-col gap-2 pl-[1rem]">
                        <p>Name:</p>
                        <p>Address:</p>
                        <p>Email:</p>
                        <p>Phone:</p>
                    </div>

                    <div id="follow-social-media" className="flex flex-col gap-2 items-center">

                        <p>Follow me on social media:</p>

                        <div className="flex gap-x-4">
                            <Link> <Linkedin className="size-[20px]"/> </Link>
                            <Link> <Instagram className="size-[20px]"/> </Link>
                            <Link> <Facebook className="size-[20px]"/> </Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BasicInfo;