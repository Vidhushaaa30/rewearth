import { useState } from "react";
import { Leaf, X } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const swapItems = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    owner: "Sarah M.",
    image: "https://i.postimg.cc/CKQFG0wF/OIP-(1).webp",
    ecoImpact: { water: "2,500L saved", co2: "4.2kg reduced" },
  },
  {
    id: 2,
    name: "Organic Linen Dress",
    owner: "Emma K.",
    image: "https://i.postimg.cc/VLLV8CqP/P0.jpg",
    ecoImpact: { water: "3,200L saved", co2: "5.8kg reduced" },
  },
  {
    id: 3,
    name: "Floral Bottoms",
    owner: "Tarah M.",
    image: "https://i.postimg.cc/vmRhcgV1/OIP-(4).webp",
    ecoImpact: { water: "2,000L saved", co2: "4.0kg reduced" },
  },
  {
    id: 4,
    name: "Pink Dress",
    owner: "Jesse",
    image: "https://i.postimg.cc/sDQ57fzt/istockphoto-1440977634-612x612.jpg",
    ecoImpact: { water: "3,000L saved", co2: "3.0kg reduced" },
  },
];

export function SwapifyPage() {
  const [chatItem, setChatItem] = useState<any>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  const handleSend = () => {
    if (!message.trim()) return;

    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const myMsg = {
      from: "me",
      text: message,
      time,
    };

    let botReply = "";

    if (message.toLowerCase().includes("am") || message.includes(":")) {
      botReply =
        "📦 Swap Proposal\n\n📅 Date: 22/03/26\n⏰ Time: 3:00 PM\n📍 Location: Block 1";
    } else if (message.toLowerCase() === "ok") {
      botReply = "✅ Swap confirmed! Looking forward to meeting you 😊";
    } else {
      botReply =
        "Interested to swap for white shirt in your wardrobe 🤍";
    }

    const botMsg = {
      from: "bot",
      text: botReply,
      time,
    };

    setMessages((prev) => [...prev, myMsg, botMsg]);
    setMessage("");
  };

  return (
    <div className="space-y-6 relative">
      <h1 className="text-3xl font-semibold">Swapify</h1>

      {/* ITEMS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {swapItems.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border bg-card shadow-sm overflow-hidden"
          >
            <div className="aspect-square">
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-muted-foreground">
                by {item.owner}
              </p>

              <div className="mt-3 bg-primary/5 p-3 rounded-lg text-xs text-primary">
                <div className="flex gap-2 items-center">
                  <Leaf size={14} /> {item.ecoImpact.water}
                </div>
                <div className="flex gap-2 items-center">
                  <Leaf size={14} /> {item.ecoImpact.co2}
                </div>
              </div>

              <button
                onClick={() => {
                  setChatItem(item);
                  setMessages([]);
                }}
                className="mt-3 w-full bg-primary text-white py-2 rounded-lg"
              >
                Interested
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CHAT MODAL */}
      {chatItem && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[90%] max-w-md p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold">
                Chat with {chatItem.owner}
              </h2>
              <button onClick={() => setChatItem(null)}>
                <X />
              </button>
            </div>

            <div className="h-48 border rounded-lg p-3 mb-3 overflow-y-auto space-y-2 text-sm">
              {messages.length === 0 && (
                <p className="text-muted-foreground">
                  Chat started about {chatItem.name}
                </p>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[80%] px-3 py-2 rounded-lg whitespace-pre-line ${
                    msg.from === "me"
                      ? "ml-auto bg-primary text-white"
                      : "mr-auto bg-gray-200"
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className="text-[10px] opacity-70 mt-1 text-right">
                    {msg.time}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type message..."
                className="flex-1 border rounded-lg px-3 py-2"
              />
              <button
                onClick={handleSend}
                className="bg-primary text-white px-4 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
