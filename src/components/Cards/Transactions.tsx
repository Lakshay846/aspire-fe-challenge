import { useState } from "react";
import DownArrow from "../../assets/down-arrow.svg";
import Transaction from "../../assets/transactions.svg";
import FinanceIcon from "../../assets/business-and-finance.svg";
import NextIcon from "../../assets/next.svg"
import type { TransactionIcon } from "../../types/transaction.types";
import TransactionIcons from "./TransactionIcons";

type Transaction = {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  type: "debit" | "refund";
  date?: string;
  icon?: TransactionIcon;
};

const TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    title: "Hamleys",
    subtitle: "Charged to debit card",
    amount: "- S$ 150",
    type: "debit",
    date: "20 May 2020",
    icon: "flights",
  },
  {
    id: "2",
    title: "Refund",
    subtitle: "Refund on debit card",
    amount: "+ S$ 150",
    type: "refund",
    date: "20 May 2020",
    icon: "storage",
  },
  {
    id: "3",
    title: "Grab",
    subtitle: "Charged to debit card",
    amount: "- S$ 18",
    type: "debit",
    date: "20 May 2020",
    icon: "megaphone",
  },
  {
    id: "1",
    title: "Hamleys",
    subtitle: "Charged to debit card",
    amount: "- S$ 150",
    type: "debit",
    date: "20 May 2020",
  },
  {
    id: "2",
    title: "Refund",
    subtitle: "Refund on debit card",
    amount: "+ S$ 150",
    type: "refund",
    date: "20 May 2020",
  }
];

export default function Transactions() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="rounded-xl bg-[#F5F9FF] shadow-sm border border-[#F5F5F5]">
      {/* Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-4 py-6"
      >
        <span className="text-sm text-gray-900">
          <img
            src={Transaction}
            alt="Card icon"
            className="inline h-6 w-6 mr-3"
          />
          Recent transactions
        </span>

        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <img src={DownArrow} alt="Toggle transactions" className="h-4 w-4" />
        </span>
      </button>

      {isOpen && (
        <>
          <div className="px-4 pb-4 bg-white pt-6">
            <ul className="space-y-5">
              {TRANSACTIONS.map((tx) => (
                <li key={tx.id} className="flex items-center justify-between">
                  <div className="flex items-start gap-3">                    
                    <TransactionIcons name={tx.icon || "flights"} type={tx.type} />

                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {tx.title}
                      </p>
                      <p className="text-xs text-gray-400">{tx.date}</p>
                      <p className="text-xs text-gray-400 flex items-center gap-2 mt-3 text-[#325BAF] font-medium">
                        <span
                          className={`flex items-center justify-center h-5 w-6 rounded-full bg-[#325BAF]`}
                        >
                          <img src={FinanceIcon} alt="card" className="h-3 w-3" />
                        </span>
                        {tx.subtitle}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-sm font-semibold ${
                      tx.amount.startsWith("+")
                        ? "text-green-500"
                        : "text-gray-900"
                    }`}
                  >
                    {tx.amount}
                    <img src={NextIcon} alt="Next icon" className="inline h-4 w-4 ml-2"/>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center py-4 border-x border-b border-[#DDFFEC] bg-[#EDFFF5]">
            <button
              type="button"
              className="text-sm font-medium text-green-500 hover:underline"
            >
              View all card transactions
            </button>
          </div>
        </>
      )}
    </div>
  );
}
