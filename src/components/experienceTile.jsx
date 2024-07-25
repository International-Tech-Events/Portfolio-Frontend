import { MapPinIcon } from "@heroicons/react/24/outline";
import { Building2Icon } from "lucide-react";



const ExperienceTile = ({companyName, role, responsibilities, startDate, endDate, }) => {
    return (

        <div className="flex gap-x-[1.5rem]">

            <div>
                <Building2Icon />
            </div>


            <div className="flex flex-col ">

                <p className="font-bold text-[17pt]">{role}</p>

                <div className="flex gap-3 items-center w-max">

                    <div className="text-white text-[11pt] font-medium font-sans"> <span>{startDate}</span>-<span>{endDate}</span> </div>

                    <div className="flex items-center">
                        <MapPinIcon className="size-[15px] text-white" />
                        <span className="text-[rgba(0,0,0,0.5)] font-semibold text-[13pt] font-serif">{companyName}</span>
                    </div>

                </div>

                <p className="text-[rgba(0,0,0,0.5)] font-serif font-light">{responsibilities}</p>

            </div>


        </div>
    );
};

export default ExperienceTile;