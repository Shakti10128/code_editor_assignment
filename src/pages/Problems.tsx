import { useEffect, useState } from "react";
import { ProblemInterface } from "../interfaces/ProblemInterface";
import axios from "axios";
import ProblemOverview from "../components/problems/problemOverview";


const Problems = () => {
    // or we can fetch set of problems to keeping the networks call lightwieght
    const [allProblems, setAllProblems] = useState<ProblemInterface[]>([]);

    const fetchProblems = async () => {
        try {
        const response = await axios.get("/data/questions.json");
        
        // Check if the fetched data is an array and matches the expected type
        if (Array.isArray(response.data)) {
            setAllProblems(response.data); // Set the state if data is valid
        } else {
            console.error("Data is not an array:", response.data);
        }
        } catch (error) {
        console.error("Error fetching problems:", error);
        }
    };

    // fetch all the problem when component will mount, or we can add pagination
    useEffect(()=>{
        fetchProblems();
    },[])

    if(!allProblems) {
        return;
        // or show loader or shimmer effect
    }
  return (
    <div className="h-full w-full gap-5 flex justify-center items-center">
        <div className="w-full mx-5 lg:mx-0 lg:w-[60%] flex flex-col mt-10">
            <div className="flex justify-center items-center">
                <h1 className="text-2xl">
                    “ QUALITY OVER QUANTITY ” 👇
                </h1>
            </div>
            <div className="mt-8">
                <div className="flex justify-around border-b-2 pb-1">
                    <p className="w-1/5 ml-5">STATUS</p>
                    <p className="w-1/5 mr-20">TITLE</p>
                    <p className="w-1/5">DIFFICULTY</p>
                    <p className="w-1/5">CATEGORY</p>
                    <p className="w-1/5">SOLUTION</p>
                </div>
                {/* rendering all the problems */}
                <div>
                    {
                        allProblems.map((problem)=>{
                            return <ProblemOverview problem={problem} key={problem.id}/>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Problems;