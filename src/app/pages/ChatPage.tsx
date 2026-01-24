import { useParams } from "react-router-dom";
import ChatBox from "@/app/components/ChatBox";

export function ChatPage() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Chat with Owner</h1>
      <p className="text-muted-foreground mb-4">
        Regarding item #{id}
      </p>

      <ChatBox />
    </div>
  );
}
