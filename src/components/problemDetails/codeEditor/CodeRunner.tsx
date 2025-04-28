import { FC } from "react";
import { IoIosArrowUp } from "react-icons/io";

interface CodeRunnerProps{
    setIsRun:(isRun:boolean)=>void;
    setIsSubmit:(isSubmit:boolean)=>void;
}

export const CodeRunner:FC<CodeRunnerProps> = ({setIsRun,setIsSubmit}) => {
  return (
    <div>
        <div className="h-[7vh] bottom-0 bg-[#282828] flex justify-between items-end pb-2 px-5">
                <button className="flex bg-neutral-700 py-1.5 px-4 rounded-lg text-sm font-bold justify-center items-center gap-2 cursor-pointer">
                    Console <IoIosArrowUp className="h-4 w-4"/>
                </button>
                <div className="flex justify-center items-center gap-3">
                    <button className="py-1 px-4 bg-neutral-700 rounded-lg cursor-pointer"
                    onClick={()=>setIsRun(true)}
                    >
                        Run
                    </button>
                    <button className="py-1 px-4 bg-green-500 rounded-lg cursor-pointer"
                    onClick={()=> setIsSubmit(true)}
                    >
                        Submit
                    </button>
                </div>
            </div>
    </div>
  )
}
