import { Leaf } from "lucide-react";

export default function TopBar() {
  const ecoCoins = 120; // static for now

  return (
    <div className="fixed top-0 right-0 left-64 h-16 bg-background border-b flex items-center justify-end px-6 z-40">
      <div className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full shadow-sm">
        <Leaf className="h-5 w-5" />
        <span className="font-semibold">{ecoCoins}</span>
        <span className="text-sm">Eco Coins</span>
      </div>
    </div>
  );
}
