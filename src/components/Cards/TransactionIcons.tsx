import { TRANSACTION_ICONS } from "./Icons/transactions.icons";
import type { TransactionIcon } from "../../types/transaction.types";

type Props = {
  name: TransactionIcon;
  type?: "debit" | "refund";
};

export default function TransactionIcons({ name, type }: Props) {
  return (
    <div
      className={`mt-1 h-12 w-12 rounded-full flex items-center justify-center ${
        type === "refund" ? "bg-green-100" : "bg-blue-100"
      }`}>
      <img src={TRANSACTION_ICONS[name]} alt="" className="h-4 w-4"/>
    </div>
  );
}
