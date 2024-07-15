import { Link, useNavigate } from 'react-router-dom';
import { EnvelopeIcon } from '@heroicons/react/16/solid';
import { useForm } from 'react-hook-form';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { apiSignIn } from '../services/auth';
import { useState } from 'react';

const Signin = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigation = useNavigate();


  const onSubmit = async (data) => {

    console.log(data);

    setIsSubmitting(true);

    try {
      const res = await apiSignIn({ email: data.email, password: data.password });

      //redirect user if 'login' is successful
      navigation('/dashboard');

      console.log("Response: ", res.data);
    }

    catch (error) {
      console.log(error)
    }

    finally {
      setIsSubmitting(false);
    }
  };



  return (

    <div className=" flex flex-col justify-center items-center h-screen bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('./images/img7.jpg')] bg-no-repeat bg-center bg-cover bg-blend-darken ">

      <div className="leading-9 bg-white bg-opacity-10 border-opacity-30 backdrop-blur-md rounded-lg p-16 shadow-lg">

        <div className="flex flex-col items-center">

          <h1 className="font-bold text-white text-[40px]">Welcome!</h1>

          <p className="text-[16px] text-white text-center mb-6">Login to your dashboard</p>

        </div>


        <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>

          <div>

            <div className="flex gap-x-3 py-5 pl-3 border border-white">

              <EnvelopeIcon className="h-[24px] w-[24px]" />

              <input
                className="outline-none bg-transparent"
                type="email"
                placeholder="e-mail"
                {...register('email', { required: 'e-mail is required' })}
              />

            </div>

            {errors.email && (<p className="text-red-600">{errors.email.message}</p>)}

          </div>


          <div>

            <div className="flex gap-x-3 py-5 pl-3 p-8 border border-white">

              {/* learn how to use the eye icon when you want to view your file */}
              <LockClosedIcon className="h-[24px] w-[24px]" />

              <input
                className="outline-none bg-transparent"
                type="password"
                placeholder="password"
                {...register('password', {required: 'password is required'})}
              />

            </div>

            {errors.password && (<p className="text-red-600">{errors.password.message}</p>)}

          </div>


          <div className="flex items-center justify-between text-white mb-4">

            <label className="flex items-center"> <input type="checkbox" className="mr-2" /> Remember me</label>

            <a href="#" className="hover:underline">Forgot password?</a>

          </div>


          <button type='submit' className="bg-white py-5 px-10 text-gray-800 font-semibold hover:bg-gray-200 transition">
            {isSubmitting ? "Loading..." : "Login"}
          </button>


          <div className="flex gap-x-3 items-center text-white">

            <p>Don't have an Account?</p>

            <Link to={'/signup'}>Sign Up</Link>

          </div>

        </form>

      </div>
    </div>
  );
};

export default Signin;