import Plus from "../../assets/box.svg"

const BalanceHeader = ({onAddCardClick}:{onAddCardClick : () => void}) => {
  return (
    <div className="mb-8">
      {/* Label */}
      <p className="text-sm text-gray-500">Available balance</p>

      {/* Amount + Button aligned */}
      <div className="mt-1 flex items-center justify-between">
        <h1 className="text-[26px] flex items-center gap-[12px] font-semibold">
          <span className="inline-flex items-center justify-center bg-[#01D167] text-white text-[13px] w-[40px] h-[24px] rounded-[4px]">
            S$
          </span>
          3,000
        </h1>

        <button
          type="button"
          className="bg-[#325BAF] text-white font-medium px-4 py-2 rounded-[4px] transition flex items-center gap-2"
          onClick={onAddCardClick}
        >
          <img src={Plus} alt="add new card" /> New card
        </button>
      </div>
    </div>
  );
};

export default BalanceHeader;
