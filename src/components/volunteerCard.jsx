import React from 'react';

const VolunteerCard = ({
  volStartDate,
  volEndDate,
  volOrganization,
  volTitle,
  volRole,
  volSkill,
  volResponsibilities,
  volImg,
}) => {
  return (
    <div>
      <div>
        <p>
          {volStartDate} - {volEndDate}
        </p>
        <h1>{volOrganization}</h1>
        <img src={volImg} alt="" className="size-36" />
      </div>
      <div>
        <h3>{volTitle}</h3>
        <p>{volRole}</p>
        <p>{volSkill}</p>
        <p>{volResponsibilities}</p>
      </div>
    </div>
  );
};

export default VolunteerCard;
