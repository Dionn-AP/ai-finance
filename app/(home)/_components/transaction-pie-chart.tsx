"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import { PiggyBank, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import PercentageItem from "./percentage-item";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investimento",
    color: "#FFFFFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#E93030",
  },
} satisfies ChartConfig;

interface TransactionPieChartProps {
  typePercentage: TransactionPercentagePerType;
  depositsTotal: number;
  expensesTotal: number;
  investimentsTotal: number;
}

const TransactionPieChart = ({
  depositsTotal,
  expensesTotal,
  investimentsTotal,
  typePercentage,
}: TransactionPieChartProps) => {
  const chartData = [
    { type: TransactionType.DEPOSIT, amount: depositsTotal, fill: "#55B02E" },
    { type: TransactionType.EXPENSE, amount: expensesTotal, fill: "#FFFFFF" },
    {
      type: TransactionType.INVESTMENT,
      amount: investimentsTotal,
      fill: "#E93030",
    },
  ];
  return (
    <Card className="flex flex-col p-6">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <div className="space-y-2">
          <PercentageItem
            value={typePercentage[TransactionType.DEPOSIT]}
            icon={<TrendingUpIcon size={16} className="text-primary" />}
            title="Receita"
          />
          <PercentageItem
            value={typePercentage[TransactionType.EXPENSE]}
            icon={<TrendingDownIcon size={16} className="text-red-500" />}
            title="Despesas"
          />
          <PercentageItem
            value={typePercentage[TransactionType.INVESTMENT]}
            icon={<PiggyBank size={16} className="" />}
            title="Investimento"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionPieChart;
