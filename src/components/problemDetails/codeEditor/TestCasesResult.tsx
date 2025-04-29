import { FC, useEffect, useState } from "react";
import { ProblemInterface } from "../../../interfaces/ProblemInterface"


interface TestCasesResultProps{
    currentProblem:ProblemInterface;
    isRun:boolean;
    isSubmit:boolean;
    setIsRun:(isRun:boolean)=>void;
    setIsSubmit:(isSubmit:boolean)=>void;
}

type ResultOptionType = "Testcase" | "Test Result" | "Compilation Error"

type TesecaseType = {
    input:string,
    expectedOutput:string
}

export const TestCasesResult:FC<TestCasesResultProps> = ({
    currentProblem,isRun,isSubmit,setIsRun,setIsSubmit
}) => {
    // it's means user want to see the result after runing the code, or submitting the code
    const [resultType,setResultType] = useState<ResultOptionType>("Testcase");
    // initailly first test case will show
    const [testcase,setTestcase] = useState<TesecaseType>(currentProblem.testCases[0]);

    // tab switiching between initial test case, Test Result,compilation error
    const resultTabSwitch = (switchType:ResultOptionType)=>{
        setResultType(switchType);
    }

    // when user will run the code make api call and show the Test Result via tab switching
    // or if there is any error active the compilation error tab
    const testOutTheCode = async()=>{
        // api call to test the the user code
        try {
            // const response = await axios("")
            setResultType("Test Result");
        } catch (error) {
            setResultType("Compilation Error")
            console.log("error while testing the user code",error);
            return;
        }finally{
            setIsRun(false);
        }
    }
    // when user will sumit the code make api call and show the Test Result via tab switching
    // or if there is any error active the compilation error tab
    const submitTheUserCode = ()=>{
        // api call to test the the user code
        try {
            // const response = await axios("")
            setResultType("Test Result");
        } catch (error) {
            setResultType("Compilation Error")
            console.log("error while submitting the user code",error);
            return;
        }finally{
            setIsSubmit(false);
        }
    }

    useEffect(()=>{
        if(isRun) {
            testOutTheCode();
        }
        else if(isSubmit){
            submitTheUserCode();
        }
    },[isRun,isSubmit]);

    console.log(currentProblem,isRun,isSubmit,setIsRun,setIsSubmit);
  return (
    <div>
        <div className="w-full overflow-auto px-4">
            {/* testcases tabs, like initial testcase, Test Result, Compliation Error */}
            <div className="h-14 top-0 -mt-3 flex gap-4 justify-start items-center">
                <p className={`${resultType === 'Testcase' && "border-b-2"} cursor-pointer text-sm font-semibold`} onClick={()=>resultTabSwitch("Testcase")}>
                    Testcase
                </p>

                <p className={`${resultType === 'Test Result' && "border-b-2"} cursor-pointer text-sm font-semibold`} onClick={()=>resultTabSwitch("Test Result")}>
                    Test Result
                </p>
                <p className={`${resultType === 'Compilation Error' && "border-b-2"} cursor-pointer text-sm font-semibold`} 
                onClick={()=>resultTabSwitch("Compilation Error")}>
                    Compilation Error
                </p>
            </div>

            <div>
                <div className="flex gap-4 justify-start items-center">
                    {
                        // if there is no compliation error show the test case
                        resultType !== "Compilation Error" && currentProblem.testCases.map((test,index)=>{
                            return <p key={test.input}
                            className={`py-1 px-4 rounded-md bg-neutral-600 text-white cursor-pointer *:
                                ${resultType === "Test Result" && "border-2 border-green-500"}`}
                            onClick={()=> setTestcase(test)}
                            >
                                Case {index + 1}
                            </p>
                        })
                    }
                </div>
                {
                    // if there is no error show the input and expected output also
                    resultType !== "Compilation Error" && <div className="mt-2">
                        <h1>Input:</h1>
                        <p className="bg-neutral-700 w-full rounded-md p-3 my-2">
                            {testcase.input}
                        </p>
                        <h1>Expected:</h1>
                        <p className="bg-neutral-700 w-full rounded-md p-3 my-2">
                            {testcase.expectedOutput}
                        </p>
                    </div>
                 }
                {/* if there is any compilation error show only error*/}
                {
                    resultType === "Compilation Error" && 
                    <div> Compliation Error</div>
                }
            </div>

        </div>
    </div>
  )
}


