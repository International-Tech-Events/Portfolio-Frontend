import awardImage from '../images/award2.png';


const AchievementTile = () => {

    return (

        <div className='w-[280px] border rounded-md shadow-xl pt-[0.2rem] pb-[0.2rem]'>

            <fieldset className='pt-2 px-1 flex flex-col items-center gap-[0.25rem]'>

                <legend className='text-center border-b px-2 text-[10pt] text-[rgba(0,0,0,0.5)] font-semibold'>awardName</legend>

                <img src={awardImage} alt="" className='w-[267px] h-[189px]'/>

                <div className='w-full'>
                    <p className='text-[rgba(0,0,0,0.6)] text-[10pt]'>Description of award</p>

                    <div className='flex justify-between items-center text-[11pt] text-[rgba(0,0,0,0.5)] font-semibold'>
                        <span>awardingInstitution</span>
                        <span>date</span>
                    </div>
                </div>

            </fieldset>

        </div>
    );
};

export default AchievementTile;