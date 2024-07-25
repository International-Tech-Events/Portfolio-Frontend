

const ProjectInfo = ({projectName, description, contributors, skills, link, nameOfInstitution, startDate, endDate}) => {
    return (

        <div className="myContainer flex w-[490px] h-[350px] bg-[url('./images/theo.png')] bg-cover bg-center">

            <div className="myContent">

                <div className="flex gap-1">

                    <p className="font-[550] text-[12pt] text-[rgba(0,0,0,0.6)]">{nameOfInstitution}</p>

                    <div className="text-white text-[10pt] font-medium font-sans">
                        [<span> {startDate}</span> - <span>{endDate} </span>]
                    </div>

                </div>

                <p className="font-bold text-[15pt]">{projectName}</p>

                <p className="text-[10.5pt]">{description}</p>

                <p className="text-[10.5pt]">Contributors: <span className="font-semibold text-[rgba(0,0,0,0.6)] text-[11pt]">{contributors}</span> </p>

                <div className="flex justify-between text-[10.5pt]">

                    <p className="font-semibold text-[rgba(0,0,0,0.6)]">Skills: <span className="font-normal text-red-800">{skills}</span> </p>

                </div>

                <a href="" className="text-white w-max">{link}</a>

            </div>

        </div>

    );
};

export default ProjectInfo;