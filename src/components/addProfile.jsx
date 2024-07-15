const AddProfile = () => {
  return (
    <div className=" flex items-center justify-center  min-h-screen bg-gray-200">
      <form
        action=""
        className="bg-white p-8 shadow-lg w-full max-w-md shadow-black"
      >
        <div>
          <label
            htmlFor="profilePicture"
            className="block text-primary text-lg font-bold mb-3"
          >
            Profile picture{' '}
          </label>
          <input
            type="file"
            id="profilePicture"
            // accept="image/*"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
          />
          <img
            id="profilePreview"
            className="rounded-full mb-4"
            // class="mt-4 rounded-full"
            // alt="Profile Preview"
          ></img>
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
            />
          </label>
        </div>

        <div className="flex gap-x-4 ">
          <div className="mb-4 flex-1">
            <label
              htmlFor="maritalStatus"
              className="block text-primary text-lg font-bold"
            >
              Marital Status
              <select
                name="maritalStatus"
                id="maritalStatus"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              >
                <option value="" className="text-primary" defaultValue>
                  Select
                </option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </label>
          </div>

          <div className="mb-4 flex-1">
            <label
              htmlFor="sex"
              className="block text-primary text-lg font-bold"
            >
              Sex
              <select
                name="sex"
                id="sex"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
                required
              >
                <option value="" className="text-primary" defaultValue>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>
        </div>

        <div>
          <label
            htmlFor="about"
            className="block text-primary text-lg font-bold mb-3"
          >
            About
            <input
              type="text"
              id="about"
              name="about"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
            />
          </label>
        </div>

        <div className="">
          <label
            htmlFor="dateOfBirth"
            className="block text-primary text-lg font-bold mb-3"
          >
            Date of birth
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="contact"
            className="block text-primary text-lg font-bold mb-3"
          >
            Contact
            <input
              type="text"
              id="contact"
              name="contact"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
              required
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="resume"
            className="block text-primary text-lg font-bold"
          >
            CV/Resume{' '}
          </label>
          <input
            type="file"
            id="resume"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
            required
          />
        </div>

        <div>
          <label
            htmlFor="languages"
            className="block text-primary text-lg font-bold mb-3"
          >
            Language spoken
            <input
              type="text"
              id="languages"
              name="languages"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
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

export default AddProfile;
