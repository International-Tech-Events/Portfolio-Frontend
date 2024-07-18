import { GraduationCap } from "lucide-react";


const EducationTile = ({schName, loc, prog, qualification, grade, startDate, endDate}) => {

    return (
        <div className="flex gap-x-[1.5rem]">

            <div className="bg-[#0779E4] text-white size-[40px] flex items-center justify-center rounded-[50%]">
                <GraduationCap className="size-[30px]" />
            </div>

            <div className="flex flex-col gap-[0.5rem]">

                <div className="text-[#0779E4] text-[11pt] font-medium font-sans">
                    <span>startDate</span>-
                    <span>endDate</span>
                </div>

                <div className="text-[18pt] font-semibold flex gap-2 items-center">
                    <span>Qualification</span>
                    <span>Program</span>
                    <span className="text-[15pt]">Grade</span>
                </div>

                <div className="text-[15pt] font-medium flex gap-2 items-center">
                    <span>schoolName</span>
                    <span>Location</span>
                </div>

            </div>

        </div>
    );
};

export default EducationTile;