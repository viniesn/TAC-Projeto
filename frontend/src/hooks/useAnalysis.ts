import { useState, useEffect } from "react";
import { analyzeText, AnalysisResult } from "./useAnalysis"; // função Analysis

export function useAnalysis(text: string): AnalysisResult {
  const [analysis, setAnalysis] = useState<AnalysisResult>(
    analyzeText(text)
  );

  useEffect(() => {
    setAnalysis(analyzeText(text));
  }, [text]);

  return analysis;
}