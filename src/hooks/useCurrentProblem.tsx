
import { useMemo } from 'react'
import questions from '../../public/data/questions.json'

const useCurrentProblem = (problemId:string) => {
    // fetch the problem from the backend
    // right now i don't have access of backend, so just using dummy json data to get the 
    // problem based on id

    const currentQuestion = useMemo(()=>{
        // finding the question based on the problemId
        const currentQuestion = questions.find((question) => question.id === problemId);
        return currentQuestion
    },[problemId])

    return currentQuestion;
}

export default useCurrentProblem;