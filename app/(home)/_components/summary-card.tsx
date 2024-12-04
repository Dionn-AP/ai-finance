import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardHeader, CardContent } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
}

const SummaryCard = ({
  icon,
  title,
  amount,
  size = "small",
}: SummaryCardProps) => {
  const bgColorIcon = (title: string) => {
    if (title === "Saldo") {
      return "bg-black bg-opacity-[40%]";
    }
    if (title === "Despesas") {
      return "bg-red-500 bg-opacity-[8%]";
    }
    if (title === "Receita") {
      return "bg-green-500 bg-opacity-[8%]";
    }
    return "bg-white bg-opacity-[8%]";
  };
  return (
    <Card className={`${size === "large" ? "bg-white bg-opacity-5" : ""}`}>
      <CardHeader className="flex-row items-center gap-4">
        <div className={`bg-gr rounded-lg p-2 ${bgColorIcon(title)}`}>
          {icon}
        </div>
        <p
          className={`${size === "small" ? "text-muted-foreground" : "text-white opacity-70"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`${size === "small" ? "text-2xl font-bold" : "text-4xl"} text-2xl font-bold`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>
        {size === "large" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
