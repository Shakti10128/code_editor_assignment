export interface ProblemInterface {
  id: string;
  title: string;
  problemStatement: string;
  constraints: string;
  difficulty: string;
  examples: {
    id: number;
    inputText: string;
    outputText: string;
    explanation: string;
  }[];
  starterCode: {
    cpp: string;
    java: string;
    python: string;
  };
  testCases: {
    input: string;
    expectedOutput: string;
  }[];
  status: string;
  category: string;
}

export interface difficultyColorType{
    Easy:string;
    Medium:string;
    Hard:string;
    HardBgColor:string;
    MediumBgColor:string;
    EasyBgColor:string;
}
export const difficultyColor: difficultyColorType = {
    Easy: "text-green-500",
    Medium: "text-yellow-500",
    Hard: "text-red-500",
    HardBgColor:"#482a30",
    MediumBgColor:"#483f26",
    EasyBgColor:"#223d3a",
};
  
  