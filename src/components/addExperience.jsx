const AddExperience = () => {
  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-200">
      <form
        action=""
        className="bg-white p-8 shadow-lg w-full max-w-md shadow-black"
      >
        <div>
          <label
            htmlFor="companyName"
            className="block text-primary text-lg font-bold mb-3"
          >
            Name of Company
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-primary text-lg font-bold mb-3"
          >
            Role
            <input
              type="text"
              id="role"
              name="role"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="skills"
            className="block text-primary text-lg font-bold mb-3"
          >
            Skills
            <input
              type="text"
              id="skills"
              name="skills"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="responsibilities"
            className="block text-primary text-lg font-bold mb-3"
          >
            Responsibilities
            <textarea
              type="text"
              id="responsibilities"
              name="responsibilities"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </label>
        </div>

        <div className="flex gap-x-4 mb-3">
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

        <div>
          <label
            htmlFor="user"
            className="block text-primary text-lg font-bold mb-3"
          >
            User
            <input
              type="text"
              id="user"
              name="user"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </label>
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

export default AddExperience;
