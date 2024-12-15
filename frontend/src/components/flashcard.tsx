import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Chatbot = () => {
  const [messages, setMessages] = useState("");
  const [input, setInput] = useState("");

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">AI Chatbot</h2>
      <div className="bg-gray-100 p-4 rounded-lg h-64 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.role === "bot" ? "text-blue-600" : "text-green-600"
            }`}
          >
            <strong>{message.role === "bot" ? "AI: " : "You: "}</strong>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};
