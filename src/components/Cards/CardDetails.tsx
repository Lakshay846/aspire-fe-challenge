import { useState } from 'react';
import DownArrow from "../../assets/down-arrow.svg"
import Details from  "../../assets/details.svg"

export default function CardDetail() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 rounded-xl bg-[#F5F9FF] shadow-sm">
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-4 py-6"
      >
        <span className="text-sm text-gray-900">
          <img src={Details} alt="Card icon" className="inline h-6 w-6 mr-3" />
          Card details
        </span>

        <span
          className={`transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <img src={DownArrow} alt="Toggle card details" className="h-4 w-4" />
        </span>
      </button>

      {/* Content */}
      {isOpen && (
        <div className="px-4 pb-4 text-sm text-gray-600 space-y-2">
          <div className="flex justify-between">
            <span>Card holder name</span>
            <span className="font-medium">Mark Henry</span>
          </div>

          <div className="flex justify-between">
            <span>Card number</span>
            <span className="font-medium">
              •••• •••• •••• 2020
            </span>
          </div>

          <div className="flex justify-between">
            <span>Expiry date</span>
            <span className="font-medium">12/20</span>
          </div>

          <div className="flex justify-between">
            <span>CVV</span>
            <span className="font-medium">***</span>
          </div>
        </div>
      )}
    </div>
  );
}
