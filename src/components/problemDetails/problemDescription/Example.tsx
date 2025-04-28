import { FC } from "react";

export interface ExampleProps {
    id:number;
    inputText: string;
    outputText: string;
    explanation?: string;
  }
  
  
  export const Example:FC<ExampleProps> = ({
    id,
    inputText,
    outputText,
    explanation
  })=>{
    return (
      <div>
        <div>
          <div className="mt-2 font-bold">
            Example {id+1}:
          </div>
  
          {/* if problem contains image show here */}
  
          <div className="py-4 px-3 mt-5 flex flex-col justify-center items-start bg-neutral-700 rounded-lg">
            {/* input */}
            <div className="flex justify-start items-start gap-3 flex-wrap">
              Input : {inputText}
            </div>
            {/* output */}
            <div className="flex justify-start items-start gap-3">
              Output : {outputText}
            </div>
            {/* explanation */}
            {
              explanation && <div className="flex justify-start items-start gap-3">
                Explantaion : {explanation}
            </div>
            }
          </div>
        </div>
      </div>
    )
  };
  