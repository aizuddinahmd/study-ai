import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">AI Study Assistant</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <div>
      <UploadForm />
      <Chatbot />
    </div>
    <div>
      <Quiz />
      <Flashcards />
    </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
