import { GraduationCap } from "lucide-react";


const EducationTile = ({schoolName, location, program, qualification, grade, startDate, endDate}) => {

    return (
        <div className="flex gap-x-[1.5rem] w-min">

            <div className="bg-[#04131F] text-[#60A5FA] size-[40px] flex items-center justify-center rounded-[50%]">
                <GraduationCap className="size-[30px]" />
            </div>

            <div className="flex flex-col gap-[0.5rem]">

                <div className="text-white text-[11pt] font-medium font-sans">
                    <span>{startDate}</span>-
                    <span>{endDate}</span>
                </div>

                <div className="text-[18pt] font-semibold flex gap-2 items-center">
                    <span>{qualification}</span>
                    <span>{program}</span>
                    <span className="text-[15pt]">{grade}</span>
                </div>

                <div className="text-[15pt] font-medium flex gap-2 items-center">
                    <span>{schoolName}</span>
                    <span>{location}</span>
                </div>

            </div>

        </div>
    );
};

export default EducationTile;