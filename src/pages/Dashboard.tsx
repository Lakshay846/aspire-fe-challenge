import Sidebar from "../components/Sidebar/Sidebar";

export default function DashboardPage() {
    return (
        <div className="min-h-screen flex bg-gray-50">
        <Sidebar />
  
        <main className="flex-1 p-8">
          {/* <BalanceHeader />
          <CardsSection /> */}
        </main>
      </div>
    );
}