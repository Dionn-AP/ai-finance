"use client";

import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface AddTransactionButtonProps {
  userCanAddTransaction?: boolean;
}

const addTransactionButton = ({
  userCanAddTransaction,
}: AddTransactionButtonProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  console.log({ userCanAddTransaction });

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="rounded-full font-bold"
              onClick={() => setDialogIsOpen(true)}
              disabled={!userCanAddTransaction}
            >
              Adicionar transação <ArrowDownUpIcon />
            </Button>
          </TooltipTrigger>
          {!userCanAddTransaction && (
            <TooltipContent>
              Você atingiu o limite de transações. Atualize seu plano para criar
              transações ilimitadas.
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};

export default addTransactionButton;
