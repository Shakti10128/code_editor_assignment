import questions from '../../public/data/questions.json';

export const useNextProblemId = (problemId: string | undefined) => {
  if (!problemId) return null;

  const current = questions.find((q) => q.id === problemId);
  if (!current) return null;

  const currentIndex = parseInt(current.title.split('.')[0].trim());
  const total = questions.length;

  if (currentIndex >= total) return null;

  const next = questions.find((q) => {
    const index = parseInt(q.title.split('.')[0].trim());
    return index === currentIndex + 1;
  });

  return next?.id || null;
};
