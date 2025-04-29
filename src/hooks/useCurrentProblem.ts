import { useMemo } from 'react';
import questions from '../../public/data/questions.json';

interface useCurrentProblemProps {
  problemId: string;
}

const useCurrentProblem = ({ problemId }: useCurrentProblemProps) => {
  const currentProblem = useMemo(() => {
    return questions.find((question) => question.id === problemId) || null;
  }, [problemId]);

  return currentProblem;
};

export default useCurrentProblem;
