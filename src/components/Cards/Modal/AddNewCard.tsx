import { useState } from "react";
import {
  generateCardNumber,
  generateExpiry,
  generateCVV,
} from "../../../utils/cardGenerator";

type Card = {
  id: string;
  holderName: string;
  number: [string, string, string, string];
  expiry: string;
  cvv: string;
};

export type AddNewCardProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (card: Card) => void;
};

export default function AddCardModal({
  isOpen,
  onClose,
  onSubmit,
}: AddNewCardProps) {
  const [holderName, setHolderName] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!holderName.trim()) {
      setError("Cardholder name is required");
      return;
    }

    const newCard: Card = {
      id: crypto.randomUUID(),
      holderName: holderName.trim(),
      number: generateCardNumber(),
      expiry: generateExpiry(),
      cvv: generateCVV(),
    };

    onSubmit(newCard);
    handleClose();
  };

  const handleClose = () => {
    setHolderName("");
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold">
          Add new card
        </h2>

        <input
          type="text"
          placeholder="Cardholder name"
          className="mb-2 w-full rounded border p-2"
          value={holderName}
          onChange={(e) => setHolderName(e.target.value)}
        />

        {error && (
          <p className="mb-3 text-sm text-red-500">
            {error}
          </p>
        )}

        <div className="flex justify-end gap-3">
          <button
            onClick={handleClose}
            className="text-sm"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded bg-green-500 px-4 py-2 text-sm text-white"
          >
            Add card
          </button>
        </div>
      </div>
    </div>
  );
}
