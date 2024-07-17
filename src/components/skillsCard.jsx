// const SkillsCard = ({ skillProficiency, skillName, skillUser, percentage }) => {
//   return (
//     <div className="text-black shadow-lg bg-white rounded-b-lg rounded-br-lg p-6">
//       <div>
//         <label htmlFor="file">{skillProficiency}</label>
//         <progress id="file" value={percentage} max="100">
//           {percentage}%
//         </progress>
//       </div>
//       <div>
//         <div>{skillName}</div>
//         <p>{skillUser}</p>
//       </div>
//     </div>
//   );
// };
// export default SkillsCard;

import { Download, Edit, Trash2 } from 'lucide-react';
import Buttons from './buttons';

// const SkillsCard = ({ skillName }) => {
//   return (
//     <div className=" text-black shadow-lg bg-white shadow-black/10 rounded-b-lg rounded-br-lg p-6 ">
//       <div>
//         {/* className="w-[250px] h-[350px] flex flex-col gap-[6rem] items-center pt-3 rounded-2xl bg-[#04131F] text-[#60A5FA] border" */}
//         <p className="font-extrabold text-[18pt]">{skillName}</p>

//         {/* <div className="-rotate-90"> */}

//         <input
//           type="range"
//           name="skillName"
//           min={'0'}
//           max={'100'}
//           step={'25'}
//           list="levels"
//           className="w-[250px]"
//         />

//         <datalist className="skill-datalist" id="levels">
//           {/* <option className="p-0 font-semibold" value="0" label="None"></option> */}
//           <option
//             className="p-0 font-semibold"
//             value="25"
//             label="Beginner"
//           ></option>
//           <option
//             className="p-0 font-semibold"
//             value="50"
//             label="Intermediate"
//           ></option>
//           <option
//             className="p-0 font-semibold"
//             value="75"
//             label="Advanced"
//           ></option>
//           <option
//             className="p-0 font-semibold"
//             value="100"
//             label="Expert"
//           ></option>
//         </datalist>
//       </div>
//     </div>

//     // </div>
//   );
// };
// export default SkillsCard;

const SkillsCard = ({ skillName, skillUser, percentage }) => {
  return (
    <div className="relative text-black shadow-lg bg-white rounded-b-lg rounded-br-lg p-6">
      <Buttons />
      <div className="text-[20px] font-bold mb-3">{skillName}</div>
      <div className="flex gap-5">
        <label htmlFor={`${skillName}-range`}>Proficiency</label>
        <div className="relative w-full">
          <input
            type="range"
            name={skillName}
            min="0"
            max="100"
            step="25"
            value={percentage}
            list="levels"
            id={`${skillName}-range`}
            className="w-full"
          />
          <datalist id="levels">
            {/* <option value="0" label="None"></option> */}
            <option value="25" label="Beginner"></option>
            <option value="50" label="Intermediate"></option>
            <option value="75" label="Advanced"></option>
            <option value="100" label="Expert"></option>
          </datalist>
          <div className="relative mt-2">
            <div className="absolute right-0 top-0 ">
              {/* <div className="absolute right-0 top-0 transform translate-y-[-50%]"> */}
              {percentage}%
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>{skillUser}</p>
      </div>
    </div>
  );
};

export default SkillsCard;
