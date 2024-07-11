import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('./images/pexels.jpg')] bg-no-repeat bg-center bg-cover">

            <fieldset className="px-[3rem] pb-[3rem] pt-[3rem] rounded-2xl bg-[rgba(234,240,240,0.15)] backdrop-blur-[3px] border">

                <legend className="text-center text-white font-semibold text-[20pt]">SIGN UP</legend>

                <form action="" method="post" className="flex flex-col gap-2">

                    <div className="flex gap-4">
                        <fieldset className="text-white">
                            <legend>First Name:</legend>
                            <input type="text" placeholder="John" className="outline-none bg-transparent px-2 py-2 border" required />
                        </fieldset>

                        <fieldset className="text-white">
                            <legend>Last Name:</legend>
                            <input type="text" placeholder="Doe" className="outline-none bg-transparent px-2 py-2 border" required />
                        </fieldset>
                    </div>

                    <fieldset className="text-white">
                        <legend>E-mail:</legend>
                        <input type="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder="someone@example.com" className="outline-none bg-transparent px-2 py-2 border w-full" required />
                    </fieldset>

                    <div className="flex gap-4">
                        <fieldset className="text-white">
                            <legend>Password:</legend>
                            <input type="password" id="pword1" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number, one uppercase letter, one lowercase letter, and at least 8 or more characters" className="outline-none bg-transparent px-2 py-2 border" required />
                        </fieldset>

                        <fieldset className="text-white">
                            <legend>Confirm Password:</legend>
                            <input type="password" id="pword2" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number, one uppercase letter, one lowercase letter, and at least 8 or more characters" className="outline-none bg-transparent px-2 py-2 border" required />
                        </fieldset>
                    </div>

                    <div className="flex gap-2 items-center">
                        <input type="checkbox" id="checkbox" required/>
                        <label htmlFor="checkbox" className="text-white">I agree to the Terms & conditions </label>
                    </div>

                    <div className="flex justify-between items-center text-white mt-4">
                        <button type="submit" className="px-6 py-[6px] rounded-full bg-orange-600 hover:bg-blue-600">Sign Up</button>
                        <label>Already have an account? <Link to={'/signin'} className="text-orange-600 font-semibold">Sign in</Link> </label>
                    </div>

                </form>
            </fieldset>
        </div>
    );
}

export default SignUp;