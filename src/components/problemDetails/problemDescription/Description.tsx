import { useParams } from "react-router-dom";
import useCurrentProblem from "../../../hooks/useCurrentProblem"

import { Example } from "./Example";
import { DifficultyLevelAndRating } from "./DifficultyLevelAndRating";



const Description = () => {
  const {problemId} = useParams();
  const currentProblem = useCurrentProblem(problemId!);

  if(!currentProblem) {
    return;
    // or show loading something
  }


  return (
    <div>
      <div className="min-h-[86vh] mx-5 mt-3">
        {/* problem name */}
        <div>
          <h2 className="text-[18px] font-semibold">
            {currentProblem.title}
            </h2>
        </div>
        {/* difficulty level & ratings */}
        <DifficultyLevelAndRating currentProblem={currentProblem}/>

        {/* problem description content */}
        <div className="flex items-center justify-start mt-2">
          <p className="text-[14px]">
              {currentProblem.problemStatement}
          </p>
        </div>


        {/* example of input output with explaination */}
        {/* there can be multiple inputs */}
        <div className="flex flex-col gap-3 mt-5 w-full">
          {
            currentProblem.examples.map((example)=>{
              return <Example key={example.id} {...example}/>
            })
          }
        </div>

        {/* constraints */}
        {/* To render HTML inside JSX, you need to use dangerouslySetInnerHTML to inject the raw HTML. While it's safe to use when the content is trusted, you should avoid it if you're dealing with user-generated content or external data without sanitization. */}
        <div className="my-5">
          <h1 className="font-bold">Constraints</h1>
          <div dangerouslySetInnerHTML={{ __html: currentProblem.constraints }}/>
        </div>
      </div>
    </div>
  )
}

export default Description


