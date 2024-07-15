
const SkillTile = () => {

    return (
        <div className="w-[250px] h-[350px] flex flex-col gap-[6rem] items-center pt-3 rounded-2xl bg-[#04131F] text-[#60A5FA] border">

            <p className="font-extrabold text-[18pt]">JavaScript</p>

            <div className="-rotate-90">


                <input type="range" name="skillName" min={'0'} max={'100'} step={'25'} list="levels" className="w-[250px]" />

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