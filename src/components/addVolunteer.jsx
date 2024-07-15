const AddVolunteer = () => {
  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-200">
      <form
        action=""
        className="bg-white p-8 shadow-lg w-full max-w-md shadow-black"
      >
        <div>
          <label
            htmlFor="organization"
            className="block text-primary text-lg font-bold mb-3"
          >
            Name of Organization{' '}
          </label>
          <input
            type="text"
            name="organization"
            id="organization"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-primary text-lg font-bold mb-3"
          >
            Description{' '}
            <textarea
              name="description"
              id="description"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            ></textarea>
          </label>
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-primary text-lg font-bold mb-3"
          >
            Role{' '}
            <input
              type="text"
              name="role"
              id="role"
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
            Skills{' '}
            <input
              type="text"
              name="skills"
              id="skills"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="responsibility"
            className="block text-primary text-lg font-bold mb-3"
          >
            Responsibilities{' '}
            <textarea
              type="text"
              name="responsibility"
              id="responsibility"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
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

        <div>
          <label
            htmlFor="location"
            className="block text-primary text-lg font-bold mb-3"
          >
            Location{' '}
            <input
              type="text"
              name="location"
              id="location"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="projectName"
            className="block text-primary text-lg font-bold mb-3"
          >
            Project{' '}
            <input
              type="text"
              name="projectName"
              id="projectName"
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

export default AddVolunteer;
