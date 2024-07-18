import { ThreeDots } from 'react-loader-spinner';
const PageLoader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      {/* render( */}
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#60A5FA"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      {/* ) */}
    </div>
  );
};

export default PageLoader;