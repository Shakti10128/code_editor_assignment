import {useState } from "react";
import Description from "./Description";
import Solutions from "./Solutions";
import Submission from "./Submission";



const problemOptions:string[] = ["Description","Solutions","Submission"];
const ProblemDescription = () => {
    // selected means, description,submission,solutions etc...
    const [selectedOption,setSelectedOption] = useState<string>(problemOptions[0]);
  return (
    <div>
        <div className="h-full flex flex-col">
            {/* problem options like, description, submission, solutions */}
            <div className="h-[5vh] flex items-center justify-start mt-2">
                {
                    problemOptions.map((option)=>{
                        return <p key={option} className={`px-6 py-2 ${selectedOption === option && "bg-[#282828] rounded-t-md"} cursor-pointer text-[14px]`}
                        onClick={()=>setSelectedOption(option)}
                        >
                            {option}
                        </p>
                    })
                }
            </div>

            {/* problem content based on selected option */}
            <div className="bg-[#282828] max-h-[86vh] overflow-y-scroll">
                {selectedOption === "Description" && <Description/>}
                {selectedOption === "Solutions" && <Solutions/>}
                {selectedOption === "Submission" && <Submission/>}
            </div>
        </div>
    </div>
  )
}

export default ProblemDescription