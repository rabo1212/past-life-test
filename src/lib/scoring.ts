import { pastLifeTypes, PastLifeType } from "@/data/results";

export type ScoreMap = Record<string, number>;

export interface DimensionResult {
  letter: string;
  percentage: number;
  pair: [string, string];
}

export function calculateMBTI(scores: ScoreMap): string {
  const ei = (scores.E || 0) >= (scores.I || 0) ? "E" : "I";
  const sn = (scores.S || 0) >= (scores.N || 0) ? "S" : "N";
  const tf = (scores.T || 0) >= (scores.F || 0) ? "T" : "F";
  const jp = (scores.J || 0) >= (scores.P || 0) ? "J" : "P";
  return `${ei}${sn}${tf}${jp}`;
}

export function calculateResult(scores: ScoreMap): PastLifeType {
  const mbti = calculateMBTI(scores);
  const found = pastLifeTypes.find((t) => t.mbti === mbti);
  return found || pastLifeTypes[0];
}

export function getDimensionPercentages(scores: ScoreMap): DimensionResult[] {
  const calc = (a: string, b: string): DimensionResult => {
    const va = scores[a] || 0;
    const vb = scores[b] || 0;
    const total = va + vb || 1;
    const winner = va >= vb ? a : b;
    const pct = Math.round((Math.max(va, vb) / total) * 100);
    return { letter: winner, percentage: pct, pair: [a, b] };
  };

  return [
    calc("E", "I"),
    calc("S", "N"),
    calc("T", "F"),
    calc("J", "P"),
  ];
}

export function addScores(current: ScoreMap, newScores: Record<string, number>): ScoreMap {
  const result = { ...current };
  for (const [key, value] of Object.entries(newScores)) {
    result[key] = (result[key] || 0) + value;
  }
  return result;
}

export function subtractScores(current: ScoreMap, toRemove: Record<string, number>): ScoreMap {
  const result = { ...current };
  for (const [key, value] of Object.entries(toRemove)) {
    result[key] = Math.max(0, (result[key] || 0) - value);
  }
  return result;
}
