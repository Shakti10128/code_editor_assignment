import { useState } from "react";
import Split from 'react-split'
import useCurrentProblem from "../../../hooks/useCurrentProblem";
import { useParams } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-themes-all';
import { getLanguageExtension } from "../../../utils/getLanguageExtension";
import { CodeRunner } from "./CodeRunner";
import { TestCasesResult } from "./TestCasesResult";
import LanguagePreferenceAndSettings from "./LanguagePreferenceAndSettings";





export type languages = "python" | "cpp" | "java";

const CodeEditor= () => {
    // if user want to test the code via running on test cases
    const [isRun,setIsRun] = useState<boolean>(false);
    // if user want to submit the code
    const [isSubmit,setIsSubmit] = useState<boolean>(false);
    // in which language user is writing the code
    const [selectedLanguage,setSelectedLanguage] = useState<languages>("python");

    // the current problem id
    const {problemId} = useParams();
    // Always call the hook, even if problemId is undefined
    const currentProblem = useCurrentProblem({ problemId: problemId ?? "" });

    if(!currentProblem) {
        return;
        // or show some loading effect
    }

  return (
    <div>
        <div className="max-h-[86vh]">
            {/* languages option to select & fontsize */}
            <LanguagePreferenceAndSettings setSelectedLanguage={setSelectedLanguage} />

            <div className="bg-[#282828] h-[78vh] relative">
            <Split
                className="flex flex-col h-full"
                direction="vertical"
                sizes={[70, 30]}
                minSize={10} // optional: minimum size for each pane
                gutterSize={10} // optional: size of the draggable gutter
            >
                {/* editor for user to write the code */}
                <div className="w-full h-full bg-[#282828] overflow-auto">
                    <CodeMirror
                        value={currentProblem?.starterCode[selectedLanguage]}
                        theme={vscodeDark}
                        extensions={[getLanguageExtension(selectedLanguage)]}
                    />
                </div>
                {/* test case & run + submit */}
                <div className="w-full h-full overflow-hidden">
                    <TestCasesResult 
                        currentProblem={currentProblem} 
                        isRun={isRun} 
                        isSubmit={isSubmit}
                        setIsRun={setIsRun} 
                        setIsSubmit={setIsSubmit}
                    />
                </div>
            </Split>


            {/* Code Runner */}
            <CodeRunner setIsRun={setIsRun} setIsSubmit={setIsSubmit}/>

            </div>
        </div>
    </div>
  )
}

export default CodeEditor