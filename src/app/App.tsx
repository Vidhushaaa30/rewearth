import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "@/app/components/Sidebar";
import TopBar from "@/app/components/TopBar"; // ✅ ADD THIS

import { HomePage } from "@/app/pages/HomePage";
import { WardrobePage } from "@/app/pages/WardrobePage";
import { SwapifyPage } from "@/app/pages/SwapifyPage";
import { ImpactPage } from "@/app/pages/ImpactPage";
import { GreenAlternativesPage } from "@/app/pages/GreenAlternativesPage";
import { ChatPage } from "@/app/pages/ChatPage";
import ExchangeFestPage from "./pages/ExchangeFestPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-background">
        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* RIGHT CONTENT AREA */}
        <div className="ml-64 flex-1">
          {/* 🔥 TOP BAR WITH ECO COINS */}
          <TopBar />

          {/* MAIN PAGE CONTENT */}
          <main className="pt-20 p-8">
            <div className="mx-auto max-w-7xl">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/wardrobe" element={<WardrobePage />} />
                <Route path="/swapify" element={<SwapifyPage />} />
                <Route path="/impact" element={<ImpactPage />} />
                <Route
                  path="/green-alternatives"
                  element={<GreenAlternativesPage />}
                />
                <Route
                  path="/exchange-fest"
                  element={<ExchangeFestPage />}
                />

                {/* Chat */}
                <Route path="/chat/:id" element={<ChatPage />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
