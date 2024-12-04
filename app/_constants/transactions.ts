import {
  TransactionCategory,
  TransactionpaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Depósito",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionpaymentMethod.CREDIT_CARD]: "credit-card.svg",
  [TransactionpaymentMethod.DEBIT_CARD]: "debit-card.svg",
  [TransactionpaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
  [TransactionpaymentMethod.BANK_SLIP]: "bank-slip.svg",
  [TransactionpaymentMethod.CASH]: "money.svg",
  [TransactionpaymentMethod.PIX]: "pix.svg",
  [TransactionpaymentMethod.OTHER]: "other.svg",
};

export const TRANSACTION_CATEGORY_LABEL = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};

export const TRANSACTION_PAYMENT_METHOD_LABEL = {
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Créditro",
  DEBIT_CARD: "Cartão de Débito",
  OTHER: "Outros",
  PIX: "Pix",
};

export const TRANSACTION_CATEGORY = [
  {
    value: TransactionCategory.EDUCATION,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.FOOD,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HEALTH,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.HOUSING,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.OTHER,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.OTHER],
  },
  {
    value: TransactionCategory.SALARY,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.UTILITY,
    label: TRANSACTION_CATEGORY_LABEL[TransactionCategory.UTILITY],
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTION = [
  {
    value: TransactionpaymentMethod.BANK_TRANSFER,
    label:
      TRANSACTION_PAYMENT_METHOD_LABEL[TransactionpaymentMethod.BANK_TRANSFER],
  },
  {
    value: TransactionpaymentMethod.BANK_SLIP,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[TransactionpaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionpaymentMethod.CASH,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[TransactionpaymentMethod.CASH],
  },
  {
    value: TransactionpaymentMethod.CREDIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABEL[TransactionpaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionpaymentMethod.DEBIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABEL[TransactionpaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionpaymentMethod.OTHER,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[TransactionpaymentMethod.OTHER],
  },
  {
    value: TransactionpaymentMethod.PIX,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[TransactionpaymentMethod.PIX],
  },
];
