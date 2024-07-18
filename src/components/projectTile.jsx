
const ProjectTile = () => {
    return (

        <div className="flex flex-col gap-2 w-[320px] px-2 py-2 border rounded-lg shadow-md">

            <div className="flex gap-1">

                <p className="font-[550] text-[12pt] text-[rgba(0,0,0,0.6)]">MEST Africa</p>

                <div className="text-[#0779E4] text-[11pt] font-medium font-sans">
                    [<span>May 2024</span>-<span>June 2024</span>]
                </div>

            </div>

            <p className="font-bold text-[15pt]">Mobile App Project</p>

            <p className="text-[10.5pt]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odio, sint alias adipisci praesentium dolores inventore blanditiis. Dolores optio consectetur rerum, laboriosam possimus a vero deleniti atque corporis facilis fuga.
            </p>

            <p className="text-[10.5pt]">Contributors: <span className="font-semibold text-[rgba(0,0,0,0.6)]">Theophilus, Ellen, Ruth, Gifty</span> </p>

            <div className="flex justify-between text-[10.5pt]">

                <p className=""> <span className="font-semibold text-[rgba(0,0,0,0.6)]">Skills:</span> HTML, CSS, JavaScript</p>

                <a href="" className="text-blue-600">Project Link</a>

            </div>

        </div>

    );
};

export default ProjectTile;