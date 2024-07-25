
const SkillTile = ({ skillName, proficiencyLevel = '25' }) => {

    return (
        <div className="w-[190px] h-[270px] flex flex-col gap-[4rem] pt-2 items-center rounded-2xl my-box-shadow bg-[#04131F]">

            <div className="flex justify-between items-center w-[80%]">

                <p className="font-bold text-[15pt] text-white">{skillName}</p>

                <p className="text-green-600 pt-1">{proficiencyLevel}%</p>
                
            </div>


            <div className="-rotate-90 flex flex-col gap-[1.5rem]">

                <input type="range" id="slider" value={proficiencyLevel} min={'0'} max={'100'} step={'25'} list="levels" className="w-[190px]" />


                <datalist className="skill-datalist" id="levels">
                    <option className="p-0 font-semibold" value="0" label="None"></option>
                    <option className="p-0 font-semibold" value="25" label="Beginner"></option>
                    <option className="p-0 font-semibold" value="50" label="Intermediate"></option>
                    <option className="p-0 font-semibold" value="75" label="Advanced"></option>
                    <option className="p-0 font-semibold" value="100" label="Expert"></option>
                </datalist>

            </div>

        </div>
    );
};

export default SkillTile;