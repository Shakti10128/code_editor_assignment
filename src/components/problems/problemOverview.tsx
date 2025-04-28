import { FC } from 'react'
import {difficultyColor, difficultyColorType, ProblemInterface} from '../../interfaces/ProblemInterface'
import { useNavigate } from 'react-router-dom';

interface ProblemProps{
    problem:ProblemInterface
}


const ProblemOverview:FC<ProblemProps> = ({problem}) => {
    const navigate = useNavigate();
    const problemNumber:number = parseInt(problem.title.split(".")[0]);
    const handleRedirect = ()=>{
        navigate(`/problems/${problem.id}`);
    }
  return (
    <div className="w-full gap-1">
        {/* {problem.title} */}
        <div className={`w-full min-h-14 flex justify-around items-center ${problemNumber % 2 === 0 && "bg-neutral-800"} rounded-md cursor-pointer`}>
            <p className="w-1/5 ml-5">{problem.status === "unsolved" ? "❌" : "✅"}</p>
            <p className="w-1/5 mr-20  overflow-hidden text-ellipsis whitespace-nowrap"
            onClick={handleRedirect}
            >
            {problem.title}
            </p>
            <p className={`w-1/5 ${difficultyColor[problem.difficulty as keyof difficultyColorType]}`}>
                {problem.difficulty}
            </p>
            <p className="w-1/5">{problem.category}</p>
            <p className="w-1/5">Upcomming</p>
        </div>
    </div>
  )
}

export default ProblemOverview