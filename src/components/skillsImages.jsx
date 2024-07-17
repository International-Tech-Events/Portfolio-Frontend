// const SkillsImages = ({ image }) => {
//   return (
//     <div className="size-[90px] shadow-lg bg-white shadow-black/50 rounded-3xl p-6">
//       {/* rounded-b-lg rounded-br-lg */}
//       <img src={image} alt="#" />
//     </div>
//   );
// };

// export default SkillsImages;

const SkillsImages = ({ image }) => {
  return (
    <div className="size-[90px] skills-image-wrapper relative overflow-hidden rounded-3xl shadow-lg bg-white p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
      <img src={image} alt="Skill" className="w-full h-full object-contain" />
    </div>
  );
};

export default SkillsImages;
