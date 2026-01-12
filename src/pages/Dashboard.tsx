import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import BalanceHeader from "../components/BalanceHeader/BalanceHeader";
import CardsSection from "../components/Cards/CardsSection";

export default function DashboardPage() {

  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);

    return (
        <div className="h-screen flex bg-gray-50 overflow-hidden">
        <Sidebar />
  
        <main className="flex-1 p-8 overflow-y-auto no-scrollbar">
          <BalanceHeader onAddCardClick={() => setIsAddCardModalOpen(true)}/>
          <CardsSection isAddCardOpen={isAddCardModalOpen} onCloseAddCard = {() => setIsAddCardModalOpen(false)}/>
        </main>
      </div>
    );
}