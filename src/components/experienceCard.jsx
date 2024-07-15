import { Download, Edit, Trash2 } from 'lucide-react';

const ExperienceCard = ({
  exStartDate,
  exEndDate,
  exPlace,
  exRole,
  exSkills,
  exResponsibility,
  exUser,
  dateColor,
}) => {
  return (
    <div className="flex gap-x-6  text-white shadow-lg bg-white shadow-black/55 rounded-b-lg rounded-br-lg">
      <div
        className="flex-shrink-0 bg-gray-700 text-center pt-10 text-lg font-bold p-4 w-20 rounded-bl-lg"
        style={{ backgroundColor: dateColor }}
      >
        <div className="transform rotate-90 whitespace-nowrap">
          {exStartDate} - {exEndDate}
        </div>
      </div>

      <div className="relative flex-grow bg-white text-black p-4 rounded-br-lg">
        <div className="absolute top-0 right-0 flex space-x-2 p-2">
          <span className="cursor-pointer">
            <Edit className="text-gray-600 hover:text-primary " />{' '}
          </span>
          <span className="cursor-pointer">
            <Download className="text-gray-600 hover:text-primary " />{' '}
          </span>
          <span className="cursor-pointer">
            <Trash2 className="text-gray-600 hover:text-primary " />{' '}
          </span>
        </div>
        <h2 className="text-xl font-semibold">{exPlace}</h2>
        <p className="text-sm italic text-gray-400">{exRole}</p>

        <p className="text-sm mt-2">{exSkills}</p>

        <p className="text-sm mt-2">{exResponsibility}</p>

        <p className="ext-sm italic text-gray-400">{exUser}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
