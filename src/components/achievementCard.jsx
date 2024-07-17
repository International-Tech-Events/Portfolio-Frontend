import { Download, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Buttons from './buttons';

const AchievementCard = ({
  achDate,
  achInstitution,
  achDescription,
  achSkills,
  theproject,
  achUser,
  achTitle,
}) => {
  return (
    <div className="relative">
      <Buttons />

      <div className="flex gap-x-5">
        <span className="text-gray-600">{achDate}</span>
        <span className="font-bold text-[20px]">{achInstitution}</span>
      </div>
      <h1 className="font-bold text-[26px] mb-3">{achTitle}</h1>
      <p className="mb-3">{achDescription}</p>
      <p className="mb-3">{achSkills}</p>

      <div className="mb-3">
        <a
          href={theproject}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 "
        >
          View Project
        </a>
        {/* target="_blank": This attribute instructs the browser to open the linked
        document in a new tab or window, depending on the user's browser
        settings. */}
        {/* noopener: When you open a new tab using target="_blank", the new tab has
        access to the window.opener property, which refers back to the
        originating tab (your website). */}
        {/* noreferrer: This prevents the referrer header from being sent to the
        linked site. */}
      </div>
      <p>{achUser}</p>
    </div>
  );
};

export default AchievementCard;
