import Eye from "../../assets/remove_red_eye-24px.svg";
import Logo from "../../assets/white logo.svg";
import VisaLogo from "../../assets/Visa Logo.svg";

type Card = {
  holderName: string;
  number: string[];
  expiry: string;
  cvv: string;
};

type CardPreviewProps = {
  card: Card;
  showCardDetails: boolean;
  onToggleDetails: () => void;
};

export default function CardPreview({
  card,
  showCardDetails,
  onToggleDetails,
}: CardPreviewProps) {
  return (
    <div className="mb-6">
      {/* View card details */}
      <div className="mb-2 flex justify-end">
        <button
          type="button"
          onClick={onToggleDetails}
          className="flex items-center gap-2 text-sm font-medium text-green-500 hover:underline"
        >
          <img src={Eye} alt="Show card number" className="h-4 w-4" />
          {showCardDetails ? "Hide card number" : "Show card number"}
        </button>
      </div>

      {/* Card */}
      <div className="relative w-full rounded-xl bg-[#01D167] p-6 text-white">
        {/* Card Brand */}
        <div className="flex justify-end">
          <span className="text-sm font-semibold">
            <img src={Logo} alt="aspire logo" />
          </span>
        </div>

        <div className="mt-4 text-[1.5rem] font-bold">{card.holderName}</div>

        {/* Card Number */}
        <div className="mt-6 flex items-center gap-[1.5rem]">
          {showCardDetails ? (
            card.number.map((group) => (
              <span
                key={group}
                className="text-[14px] font-medium tracking-widest"
              >
                {group}
              </span>
            ))
          ) : (
            <>
              {[0, 1, 2].map((group) => (
                <div key={group} className="flex gap-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <span key={i} className="h-2 w-2 rounded-full bg-white" />
                  ))}
                </div>
              ))}
              <span className="text-[14px] font-medium tracking-widest">
                {card.number[3]}
              </span>
            </>
          )}
        </div>

        {/* Card Meta */}
        <div className="mt-4 flex gap-6 text-[13px] font-bold align-start">
          <div>
            <span className="">Thru:</span> {card.expiry}
          </div>
          <div className="flex gap-2 align-center">
            <span className="">CVV:</span>
            <span className="text-[1.5rem] leading-[1]">***</span>
          </div>
        </div>

        <div className="flex justify-end mt-1">
          <img src={VisaLogo} alt="Visa logo" className="h-8 w-14" />
        </div>
      </div>
    </div>
  );
}
