import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";



const SignUp = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const sendFormData = (data) => {console.log(data);};
    // watch(firstName);


    return (
        <div className="h-screen w-full flex justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('./images/img7.jpg')] bg-no-repeat bg-center bg-cover">

            <fieldset className="px-[3rem] pb-[3rem] pt-[3rem] rounded-2xl bg-[rgba(234,240,240,0.15)] backdrop-blur-[8px]">

                <legend className="text-center text-white font-semibold text-[20pt]">SIGN UP</legend>

                <form  onSubmit={handleSubmit(sendFormData)} className="flex flex-col gap-2">

                    <div className="flex gap-4">

                        <fieldset className="text-white">

                            <legend>First Name:</legend>

                            <input type="text" placeholder="John" className="outline-none bg-transparent px-2 py-2 border" {...register("firstName", {required: "First name is required!"})}/>
                            
                            {errors.firstName && (<p className="text-[14px] text-emerald-300">{errors.firstName.message}</p>)}

                        </fieldset>

                        <fieldset className="text-white">   

                            <legend>Last Name:</legend>

                            <input type="text" placeholder="Doe" className="outline-none bg-transparent px-2 py-2 border" {...register("lastName", {required: "Last name is required!"})}/>

                        </fieldset>
                        
                    </div>

                    <fieldset className="text-white">

                        <legend>E-mail:</legend>

                        <input type="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder="someone@example.com" className="outline-none bg-transparent px-2 py-2 border w-full" />

                    </fieldset>

                    <div className="flex gap-4">

                        <fieldset className="text-white">
                            
                            <legend>Password:</legend>

                            <input type="password" id="pword1" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number, one uppercase letter, one lowercase letter, and at least 8 or more characters" className="outline-none bg-transparent px-2 py-2 border" />

                        </fieldset>

                        <fieldset className="text-white">

                            <legend>Confirm Password:</legend>

                            <input type="password" id="pword2" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number, one uppercase letter, one lowercase letter, and at least 8 or more characters" className="outline-none bg-transparent px-2 py-2 border" />

                        </fieldset>

                    </div>

                    <div className="flex gap-2 items-center text-white">

                        <input type="checkbox" id="checkbox" />

                        <label htmlFor="checkbox">I agree to the Terms & conditions </label>

                    </div>

                    <div className="flex justify-between items-center text-white mt-4">

                        <button type="submit" className="px-6 py-[6px] rounded-full bg-[#04131F] hover:bg-blue-300">Sign Up</button>

                        <label>Already have an account? <Link to={'/signin'} className="text-[#04131F] font-semibold">Sign in</Link> </label>

                    </div>

                </form>
            </fieldset>
        </div>
    );
}

export default SignUp;