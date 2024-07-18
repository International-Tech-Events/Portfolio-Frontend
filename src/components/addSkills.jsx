import { useForm } from 'react-hook-form';
import { apiAddSkill } from '../services/skills';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Loader from './loader';

const AddSkills = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const res = await apiAddSkill({
        skillName: data.name,
        levelOfProficiency: data.proficiency,
      });

      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error('An error occured');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 shadow-lg w-full max-w-md shadow-black"
      >
        <div className="mb-4">
          <label
            htmlFor="skillName"
            className="block text-primary text-lg font-bold mb-3"
          >
            Skill Name
            <input
              type="text"
              {...register('name', { required: 'name is required' })}
              id="skillName"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
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
              id="levelOfProficiency"
              {...register('proficiency', {
                required: 'proficiency is required',
              })}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:shadow-md focus:border-primary"
            >
              {/* add values to the form */}
              <option>Select level</option>
              <option value="25">Beginner</option>
              <option value="50">Intermediate</option>
              <option value="75">Advanced</option>
              <option value="100">Expert</option>
            </select>
          </label>
        </div>

        {/* <div className="mb-4">
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
        </div> */}

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-primary hover:bg-white hover:text-primary text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-md focus:border-primary"
          >
            {isSubmitting ? <Loader /> : 'Add Skill'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSkills;
