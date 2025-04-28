import { CiSettings } from "react-icons/ci";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FC } from "react";
import { languages } from "../codeEditor/CodeEditor";

interface LanguagePreferenceProps{
    setSelectedLanguage:(language:languages)=>void
}

const LanguagePreferenceAndSettings:FC<LanguagePreferenceProps> = ({setSelectedLanguage}) => {
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedLanguage(e.target.value as languages);
  };
  return (
    <div>
        <div className="h-[5vh] flex items-center justify-between mt-2 ml-5" >
                {/* language selection dropdown */}
                <select name="python" id="python" className="relative hover:bg-neutral-700 flex justify-center items-center pl-2 py-1 text-center rounded-md cursor-pointer"
                onChange={handleLanguageChange}
                >
                    <option value="python">python</option>
                    <option value="java">java</option>
                    <option value="cpp">cpp</option>
                </select>

                {/* fontsize selection */}
                <div className="flex gap-5 pr-4 ">
                    <CiSettings className="h-6 w-6 cursor-pointer"/>
                    <AiOutlineFullscreen className="h-6 w-6 cursor-pointer"/>
                </div>

            </div>
    </div>
  )
}

export default LanguagePreferenceAndSettings