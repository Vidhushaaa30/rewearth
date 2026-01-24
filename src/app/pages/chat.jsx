import { useParams } from "react-router-dom";
import ChatBox from "../components/ChatBox";

export default function Chat() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Chat with Owner</h2>
      <p className="text-stone-500 mb-4">Regarding item #{id}</p>
      <ChatBox />
    </div>
  );
}
