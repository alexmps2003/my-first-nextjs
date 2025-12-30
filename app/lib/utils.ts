import { Revenue } from "./definitions";

export const generateYAxis = (revenue: Revenue[]) => {
  const yAxisLabels = [];
  const topLabel = Math.max(...revenue.map((month) => month.revenue));

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};
