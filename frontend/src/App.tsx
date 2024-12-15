import { useState } from "react";
import "./App.css";
import UploadForm from "./components/upload-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Chatbot } from "./components/flashcard";

function App() {
  // const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="w-full flex justify-center items-center">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 ">AI Study Assistant</h1>

        <div className="flex flex-col w-full">
          <UploadForm />
          {/* <Chatbot /> */}
          <div className="container mx-auto px-4 py-8">
            {/* <FileUpload /> */}
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="mt-8"
            >
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="chat">Chat</TabsTrigger>
                <TabsTrigger value="quiz">Quiz</TabsTrigger>
                <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
              </TabsList>
              <TabsContent value="summary">{/* <Summary /> */}</TabsContent>
              <TabsContent value="chat">{/* <Chat /> */}</TabsContent>
              <TabsContent value="quiz">{/* <Quiz /> */}</TabsContent>
              <TabsContent value="flashcards">
                {/* <Flashcards /> */}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
