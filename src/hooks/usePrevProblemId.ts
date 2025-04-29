import questions from '../../public/data/questions.json';

export const usePrevProblemId = (problemId: string | undefined) => {
  if (!problemId) return null;

  const current = questions.find((q) => q.id === problemId);
  if (!current) return null;

  const currentIndex = parseInt(current.title.split('.')[0].trim());
  if (currentIndex === 1) return null;

  const prev = questions.find((q) => {
    const index = parseInt(q.title.split('.')[0].trim());
    return index === currentIndex - 1;
  });

  return prev?.id || null;
};
