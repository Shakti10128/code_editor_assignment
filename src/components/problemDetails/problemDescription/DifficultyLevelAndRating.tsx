import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { FC } from "react";
import { difficultyColor, difficultyColorType, ProblemInterface } from "../../../interfaces/ProblemInterface";

interface DifficultyLevelAndRatingProps{
    currentProblem:ProblemInterface;
}

export const DifficultyLevelAndRating :FC<DifficultyLevelAndRatingProps>= ({
    currentProblem
}) => {
    
  const textColor = difficultyColor[currentProblem.difficulty as keyof difficultyColorType];
  const bgColor = difficultyColor[`${currentProblem.difficulty+"BgColor"}` as keyof difficultyColorType];

  return (
    <div>
        <div>
          <div className="flex items-center justify-start gap-5 mt-2">
            <span className={`${textColor} py-0.5 px-2 text-[14px] font-semibold rounded-lg text-center`} style={{backgroundColor:bgColor}}>
              {currentProblem.difficulty}
            </span>
            <AiOutlineLike className="cursor-pointer"/>
            <AiOutlineDislike className="cursor-pointer"/>
            <FaRegStar className="cursor-pointer"/>
          </div>
        </div>
    </div>
  )
}
