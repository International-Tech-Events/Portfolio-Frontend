import { MapPinIcon } from "@heroicons/react/24/outline";



const ExperienceTile = ({position, startDate, endDate, company, tasks}) => {
    return (

        <div className="flex flex-col ">

            <p className="font-bold text-[16pt]">Art & Creative Director</p>

            <div className="flex gap-3 items-center w-max">

                <div className="text-[#0779E4] text-[11pt] font-sans"> <span>startDate</span>-<span>endDate</span> </div>

                <div className="flex items-center">
                    <MapPinIcon className="size-[15px] text-[#0779E4]" />
                    <span className="text-[rgba(0,0,0,0.5)] font-semibold text-[13pt] font-serif">Google Inc.</span>
                </div>

            </div>

            <p className="text-[rgba(0,0,0,0.5)] font-serif font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos natus repellat non ducimus facere quasi vero alias laborum voluptatibus adipisci harum earum neque, possimus maxime aperiam asperiores quas omnis optio!
            </p>

        </div>
    );
};

export default ExperienceTile;