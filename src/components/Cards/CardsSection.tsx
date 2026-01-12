import CardsTabs from "./CardsTabs";
import CardActions from "./CardsActions";
import Transactions from "./Transactions";
import CardDetail from "./CardDetails";
import CardCarousel from "./CardCarousel";

export default function CardsSection({isAddCardOpen, onCloseAddCard}: {isAddCardOpen: boolean, onCloseAddCard: () => void}) {
  return (
    <>
      <CardsTabs />
      <section className="rounded-xl bg-white p-6 shadow mt-4">
        <div className="mt-6 grid grid-cols-2 gap-11 left-column">
          <div className="flex flex-col gap-8">
            <CardCarousel isAddCardOpen={isAddCardOpen} onCloseAddCard={onCloseAddCard}/>
            <CardActions />
          </div>

          <div className="pt-7 right-column">
            <CardDetail />
            <Transactions />
          </div>
        </div>
      </section>
    </>
  );
}
