const AddAchievements = () => {
  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-200">
      <form
        action=""
        className="bg-white p-8 shadow-lg w-full max-w-md shadow-black"
      >
        <div>
          <label
            htmlFor="awardName"
            className="block text-primary text-lg font-bold mb-3"
          >
            Award Title{' '}
            <input
              type="text"
              name="awardName"
              id="awardName"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </label>
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
            htmlFor="awardingInstitution"
            className="block text-primary text-lg font-bold mb-3"
          >
            Awarding Institution{' '}
            <input
              type="text"
              id="awardingInstitution"
              name="awardingInstitution"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </label>
        </div>

        <div className="">
          <label
            htmlFor="date"
            className="block text-primary text-lg font-bold mb-3"
          >
            Date for the Award
            <input
              type="date"
              id="date"
              name="date"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-primary text-lg font-bold mb-3"
          >
            Choose a file{' '}
            <input
              type="file"
              id="image"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-md focus:border-primary"
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="user"
            className="block text-primary text-lg font-bold mb-3"
          >
            User{' '}
            <input
              type="text"
              name="user"
              id="user"
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

export default AddAchievements;
