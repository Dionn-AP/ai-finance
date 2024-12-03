import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

interface SummaryCardsProps {
  month: string;
  balance: number;
  depositsTotal: number;
  expensesTotal: number;
  investimentsTotal: number;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  expensesTotal,
  investimentsTotal,
}: SummaryCardsProps) => {
  return (
    <div className="space-y-6">
      {/* PRIMEIRO CARD */}

      <SummaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
      />

      {/* PRIMEIRO CARD */}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={14} />}
          title="Investido"
          amount={investimentsTotal}
        />
        <SummaryCard
          icon={<TrendingUpIcon size={14} className="text-primary" />}
          title="Receita"
          amount={depositsTotal}
        />
        <SummaryCard
          icon={<TrendingDownIcon size={14} className="text-red-500" />}
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
