import { useState, useEffect, useRef } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, sender: "me" }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = "Interested to swap for white shirt in your wardrobe 🤍";

      if (input.toLowerCase().includes("date") || input.includes(":")) {
        reply = `📦 Swap Proposal
📅 22/03/26
⏰ 3:00 PM
📍 Block 1`;
      } else if (input.toLowerCase() === "ok") {
        reply = "✅ Swap confirmed! Looking forward to meeting you 😊";
      }

      setIsTyping(false);
      setMessages(prev => [...prev, { text: reply, sender: "bot" }]);
    }, 2000);
  };

  return (
    <div className="border rounded-xl p-4 bg-white max-w-xl">
      <div className="h-64 overflow-y-auto space-y-2 mb-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`px-3 py-2 rounded-lg max-w-[70%] whitespace-pre-line ${
              m.sender === "me"
                ? "ml-auto bg-emerald-500 text-white"
                : "mr-auto bg-gray-200"
            }`}
          >
            {m.text}
          </div>
        ))}

        {isTyping && (
          <div className="mr-auto bg-gray-200 px-3 py-2 rounded-lg italic animate-pulse">
            typing…
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type message…"
          className="border p-2 flex-1 rounded-lg"
          onKeyDown={e => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-emerald-500 text-white px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
