const AddEducation = () => {
  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-200">
      <form
        action=""
        className="bg-white p-8 shadow-lg w-full max-w-md shadow-black"
      >
        <div>
          <label
            htmlFor="schoolName"
            className="block text-primary text-lg font-bold mb-3"
          >
            Name of School
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-primary text-lg font-bold mb-3"
          >
            Location
            <input
              type="text"
              id="location"
              name="location"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="program"
            className="block text-primary text-lg font-bold mb-3"
          >
            Program of Study
            <input
              type="text"
              id="program"
              name="program"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="qualification"
            className="block text-primary text-lg font-bold mb-3"
          >
            Qualification
            <input
              type="text"
              id="qualification"
              name="qualification"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="grade"
            className="block text-primary text-lg font-bold mb-3"
          >
            Grade
            <input
              type="text"
              id="grade"
              name="grade"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
            />
          </label>
        </div>

        <div className="flex gap-x-4">
          <div className="flex-1">
            <label
              htmlFor="startDate"
              className="block text-primary text-lg font-bold mb-3"
            >
              Start date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="endDate"
              className="block text-primary text-lg font-bold mb-3"
            >
              End date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              // minDate={new Date('1945/08/15')}
              // maxDate={new Date()}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center">
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

export default AddEducation;

// const AddEducation = () => {
//   return (
//     <div className=" h-screen bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('./components/img1')] bg-no-repeat bg-center bg-cover">
//       <div className="w-screen h-screen flex items-center justify-center">
//         <form action="" className="w-[70%] p-8 shadow-lg  ">
//           <div>
//             <label
//               htmlFor="schoolName"
//               // className="block text-primary text-lg font-bold mb-3"
//               className="bg-transparent border px-2 w-full"
//             >
//               Name of School
//               <input
//                 type="text"
//                 id="schoolName"
//                 name="schoolName"
//                 // className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
//                 className="bg-transparent border px-2 w-full"
//               />
//             </label>
//           </div>

//           <div>
//             <label
//               htmlFor="location"
//               className="block text-primary text-lg font-bold mb-3"
//             >
//               Location
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 // className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
//                 className="bg-transparent border px-2 w-full"
//               />
//             </label>
//           </div>

//           <div className="flex gap-x-4">
//             <span className="flex-1">
//               <label
//                 htmlFor="program"
//                 className="text-white text-lg font-bold mb-3"
//               >
//                 Program of Study
//                 <input
//                   type="text"
//                   id="program"
//                   name="program"
//                   // className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
//                   className="bg-transparent border px-2 w-full"
//                 />
//               </label>
//             </span>

//             <span className="flex-1">
//               <label
//                 htmlFor="qualification"
//                 className="text-white text-lg font-bold mb-3"
//               >
//                 Qualification
//                 <input
//                   type="text"
//                   id="qualification"
//                   name="qualification"
//                   // className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
//                   className="bg-transparent border px-2 w-full"
//                 />
//               </label>
//             </span>
//           </div>

//           <div>
//             <label
//               htmlFor="grade"
//               className="block text-primary text-lg font-bold mb-3"
//             >
//               Grade
//               <input
//                 type="text"
//                 id="grade"
//                 name="grade"
//                 // className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
//                 className="bg-transparent border px-2 w-full"
//               />
//             </label>
//           </div>

//           <div className="flex gap-x-4">
//             <div className="flex-1">
//               <label
//                 htmlFor="startDate"
//                 className="block text-primary text-lg font-bold mb-3"
//               >
//                 Start date
//               </label>
//               <input
//                 type="date"
//                 id="startDate"
//                 name="startDate"
//                 // className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
//                 className="bg-transparent border px-2 w-full"
//               />
//             </div>

//             <div className="flex-1">
//               <label
//                 htmlFor="endDate"
//                 className="block text-primary text-lg font-bold mb-3"
//               >
//                 End date
//               </label>
//               <input
//                 type="date"
//                 id="endDate"
//                 name="endDate"
//                 // minDate={new Date('1945/08/15')}
//                 // maxDate={new Date()}
//                 // className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
//                 className="bg-transparent border px-2 w-full"
//               />
//             </div>
//           </div>

//           <div className="mt-4">
//             <button
//               type="submit"
//               className="bg-white hover:bg-blue-600 text-primary font-bold py-3 px-4 rounded focus:outline-none focus:shadow-md"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddEducation;
