import { RotatingLines } from "react-loader-spinner";


const Loader = () => {

    return (

        <RotatingLines
            visible={true}
            height="30"
            width="30"
            color="black"
            strokeWidth="3"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />

    );
};

export default Loader;