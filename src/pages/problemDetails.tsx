import Split from 'react-split'
import ProblemDetailsHeader from "../components/problemDetails/ProblemDetailsHeader";
import CodeEditor from "../components/problemDetails/codeEditor/CodeEditor";
import ProblemDescription from '../components/problemDetails/problemDescription/ProblemDescription';


const ProblemDetails = () => {
  return (
    <div>
      <div className="h-full w-full">
        {/* Problem Detail Header containing content like: prev,next question functionality
        user account info etc....*/}
          <div>
            <ProblemDetailsHeader/>
          </div>
          
          {/* left & right pane for code editor */}
          <div>
          <Split
              className="split h-[calc(100vh - 56px)] w-full overflow-x-hidden"
              gutterAlign="start"
              sizes={[50, 50]}
          >
              <ProblemDescription/>
              <CodeEditor/>
          </Split>

        </div>
      </div>
    </div>
  )
}

export default ProblemDetails