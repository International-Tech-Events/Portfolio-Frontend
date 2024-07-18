
const SkillTile = ({skillName, proficiencyLevel='25'}) => {

    // const level = proficienyLevel;

    // switch (level) {
    //     case "beginner":
    //         document.getElementById("slider").value = "25";
    //         break;
    //     case "intermediate":
    //         document.getElementById("slider").value = "50";
    //         break;
    //     case "advanced":
    //         document.getElementById("slider").value = "75";
    //         break;
    //     case "expert":
    //         document.getElementById("slider").value = "100";
    //         break;
    
    //     default: document.getElementById("slider").value = "0";
    //         break;
    // }


    return (
        <div className="w-[190px] h-[350px] flex flex-col gap-[6rem] pt-4 items-center rounded-xl shadow-md text-[#04131F] border">

            <p className="font-bold text-[15pt] text-orange-500">JavaScript</p>

            <div className="-rotate-90">


                <input type="range" value={proficiencyLevel} min={'0'} max={'100'} step={'25'} list="levels" className="w-[250px] appearance-none" />

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