// const AddSkills = () => {
//   return (
//     <div className="bg-[#F4F4F4] h-auto flex justify-center items-center">
//       <form action="">
//         <div>
//           <label
//             htmlFor="skillName"
//             className="block text-gray-700 font-bold mb-2 text-lg"
//           >
//             Skill Name
//             <input
//               type="text"
//               name="skillName"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </label>
//         </div>

//         <div>
//           <label
//             htmlFor="levelOfProficiency"
//             className="block text-gray-700 font-bold mb-2 text-lg"
//           >
//             {' '}
//             Level of Proficiency
//             <select
//               name="levelOfProficiency"
//               id="levelOfProficiency"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             >
//               <option value="" className="text-gray-200" selected>
//                 Select level
//               </option>
//               <option value="beginner">Beginner</option>
//               <option value="intermediate">Intermediate</option>
//               <option value="advanced">Advanced</option>
//               <option value="expert">Expert</option>
//             </select>
//           </label>
//         </div>

//         <div>
//           <label
//             htmlFor="user"
//             className="block text-gray-700 font-bold mb-2 text-lg"
//           >
//             User
//             <input
//               type="text"
//               name="user"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </label>
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddSkills;

const AddSkills = () => {
  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-200">
      <form className="bg-white p-8 shadow-lg w-full max-w-md shadow-black">
        <div className="mb-4">
          <label
            htmlFor="skillName"
            className="block text-primary text-lg font-bold mb-3"
          >
            Skill Name
            <input
              type="text"
              name="skillName"
              id="skillName"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label
            htmlFor="levelOfProficiency"
            className="block text-primary text-lg font-bold mb-3"
          >
            Level of Proficiency
            <select
              name="levelOfProficiency"
              id="levelOfProficiency"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            >
              <option value="" defaultValue>
                Select level
              </option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </label>
        </div>

        <div className="mb-4">
          <label
            htmlFor="user"
            className="block text-primary text-lg font-bold mb-3"
          >
            User
            <input
              type="text"
              name="user"
              id="user"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </label>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-primary hover:bg-white hover:text-primary text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-md focus:border-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSkills;
