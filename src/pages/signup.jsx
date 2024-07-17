import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { apiCheckUserName, apiSignUp } from "../services/auth";
import Loader from "../components/loader";
import { toast } from "react-toastify";



const SignUp = () => {

    //e-mail pattern "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigation = useNavigate();

    const [isUserNameLoading, setIsUserNameLoading] = useState(false);

    // const [userNameAvailable, setUserNameAvailable] = useState(false);

    // const [userNameNotAvailable, setUserNameNotAvailable] = useState(false);



    const checkUserName = async (username) => { 
        
        setIsUserNameLoading(true);
        
        try {
            const res = await apiCheckUserName(username);

            const user = res.data.user;
            // console.log(user);

            if (user) {
                // setUserNameNotAvailable(true);
                document.getElementById("errMsg").style.color = "red";
                document.getElementById("errMsg").innerHTML = `${userNameWatch} is NOT available`;
                // console.log(msg);

            }
            
            else {
                // setUserNameAvailable(true);
                document.getElementById("errMsg").style.color = "green";
                document.getElementById("errMsg").innerHTML = `${userNameWatch} is available`;
                // console.log(msg);
            }
        }
        
        catch (error) {
            console.log(error);
        }

        finally {
            setIsUserNameLoading(false);
        }
    };


    const userNameWatch = watch("userName"); //watch the field with the name 'userName'
    
    
    useEffect(() => {
        if (userNameWatch) {
            checkUserName(userNameWatch);
        }
    }, [userNameWatch]);



    const sendFormData = async (data) => {

        console.log(data);

        setIsSubmitting(true);

        let payload = {
            firstName: data.firstName,
            lastName: data.lastName,
            userName: data.userName,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        };


        if (data.otherNames) {
            payload = {...payload, otherNames: data.otherNames};
        }


        try {
            const res = await apiSignUp(payload);

            toast.success(res.data.message);

            console.log("Response: ", res.data);
            
            setTimeout(() => {navigation('/signin')}, 5000);
        }

        catch (error) {
            toast.error("An error ocured!");
            console.log("An error ocured!");
        }

        finally {
            setIsSubmitting(false);
        }
    };



    return (
        <div className="h-screen w-full flex justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('./images/img7.jpg')] bg-no-repeat bg-center bg-cover">

            <fieldset className="px-[3rem] pb-[3rem] pt-[3rem] rounded-2xl bg-[rgba(234,240,240,0.15)] backdrop-blur-[8px]">

                <legend className="text-center text-white font-semibold text-[20pt]">SIGN UP</legend>

                <form onSubmit={handleSubmit(sendFormData)} className="flex flex-col gap-2">

                    <div className="flex gap-4">

                        <fieldset className="text-white">

                            <legend>First Name:</legend>

                            <input type="text" placeholder="Your first name" className="outline-none bg-transparent px-2 py-2 border" {...register("firstName", { required: "Your first name is required!" })} />

                            {errors.firstName && (<p className="text-[14px] text-emerald-300">{errors.firstName.message}</p>)}

                        </fieldset>


                        <fieldset className="text-white">

                            <legend>Other Names:</legend>

                            <input type="text" placeholder="Optional other names" title="This field is optional" className="outline-none bg-transparent px-2 py-2 border" {...register("otherNames")} />

                        </fieldset>

                        <fieldset className="text-white">

                            <legend>Last Name:</legend>

                            <input type="text" placeholder="Your last name" className="outline-none bg-transparent px-2 py-2 border" {...register("lastName", { required: "Your last name is required!" })} />

                            {errors.lastName && (<p className="text-[14px] text-emerald-300">{errors.lastName.message}</p>)}

                        </fieldset>

                    </div>


                    <div className="flex justify-between">

                        <fieldset className="text-white flex-[1]">

                            <legend>Username:</legend>

                            <input type="text" placeholder="unique username" className="outline-none bg-transparent px-2 py-2 border" {...register("userName", { required: "A username is required!" })} />

                            {errors.userName && (<p className="text-[14px] text-emerald-300">{errors.userName.message}</p>)}

                            <div className="flex w-full justify-between">
                                <span></span>
                                <p id="errMsg"></p>
                            </div>

                            {/* {userNameAvailable && <p className="text-lime-500">Username is available</p>}
                            {userNameNotAvailable && <p className="text-red-500">Username is NOT available</p>} */}

                        </fieldset>

                        <fieldset className="text-white flex-[2]">

                            <legend>E-mail:</legend>

                            <input type="email" placeholder="someone@example.com" className="outline-none bg-transparent px-2 py-2 border w-full" {...register("email", { required: "Your e-mail address is required!" })} />

                            {errors.email && (<p className="text-[14px] text-emerald-300">{errors.email.message}</p>)}

                        </fieldset>

                    </div>

                    <div className="flex gap-4">

                        <fieldset className="text-white flex-[1]">

                            <legend>Password:</legend>

                            <input type="password" id="pword1" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number, one uppercase letter, one lowercase letter, and at least 8 or more characters" className="outline-none bg-transparent px-2 py-2 border w-full" {...register("password", { required: "A password is required!" })} />

                            {errors.password && (<p className="text-[14px] text-emerald-300">{errors.password.message}</p>)}

                        </fieldset>

                        <fieldset className="text-white flex-[1]">

                            <legend>Confirm Password:</legend>

                            <input type="password" id="pword2" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number, one uppercase letter, one lowercase letter, and at least 8 characters" className="outline-none bg-transparent px-2 py-2 border w-full" {...register("confirmPassword", { required: "Confirm your password" })} />

                            {errors.confirmedPassword && (<p className="text-[14px] text-emerald-300">{errors.confirmedPassword.message}</p>)}

                        </fieldset>

                    </div>


                    <div className="flex gap-2 items-center text-white">

                        <input type="checkbox" id="checkbox" />

                        <label htmlFor="checkbox">I agree to the Terms & conditions </label>

                    </div>


                    <div className="flex justify-between items-center text-white mt-4">

                        <button type="submit" className="px-6 py-[6px] rounded-full bg-[#04131F] hover:bg-blue-300">
                            {isSubmitting ? <Loader /> : "Sign Up"}
                        </button>

                        <label>Already have an account? <Link to={'/signin'} className="text-[#04131F] font-semibold">Sign in</Link> </label>

                    </div>

                </form>
            </fieldset>
        </div>
    );
}

export default SignUp;