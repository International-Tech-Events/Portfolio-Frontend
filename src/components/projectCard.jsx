const ProjectCard = ({
  proStartDate,
  proEndDate,
  proInstitution,
  proDescription,
  proSkills,
  contributors,
  proLink,
}) => {
  return (
    <div>
      <div className="w-[20rem] h-[auto] shadow-black shadow-lg p-10">
        <span>
          {proStartDate} - {proEndDate}
        </span>
        <p className="text-[2rem] mb-3">{proInstitution}</p>
        <p className="text-[1rem] mb-3">{proDescription}</p>
        <div className="">
          <span className="px-4 py-2 text-white bg-primary/45 rounded-lg mb-2">
            Skills:
          </span>
          <p className="mb-3">{proSkills}</p>
        </div>
        <div className="">
          <span className="px-4 py-2 text-white bg-primary/45 rounded-lg mb-2">
            Contributors:
          </span>
          <p>{contributors}</p>
        </div>
        <div className="">
          <p>link</p>
          <span>{proLink}</span>
        </div>
      </div>

      {/* <div>project1</div>

      <div>project1</div> */}
    </div>
  );
};

export default ProjectCard;
