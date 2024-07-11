import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const BasicInfo = () => {
    return (
        <div id="basic-info-card" className="relative flex-[2.25] mr-[10px]">

            <div id="avatar" className="absolute top-[10%] left-[5%] size-[200px] border-2 box-border bg-white text-black text-center rounded-[50%]">Avatar</div>

            <div className="h-screen">

                <div className="h-[25%] bg-blue-400"></div>

                <div className="h-[75%] bg-black text-white flex flex-col gap-8 justify-end pb-5">

                    <div id="text-info" className="flex flex-col gap-3 pl-[1rem]">
                        <p>Name:</p>
                        <p>Address:</p>
                        <p>Email:</p>
                        <p>Phone:</p>
                    </div>

                    <div id="follow-social-media" className="flex flex-col gap-3 items-center">

                        <p>Follow me on social media:</p>

                        <div className="flex gap-x-4">
                            <Link> <Linkedin className="size-[25px]"/> </Link>
                            <Link> <Instagram className="size-[25px]"/> </Link>
                            <Link> <Facebook className="size-[25px]"/> </Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BasicInfo;