import React, { useEffect } from 'react';
import './App.css';
import Dictaphones from './Dictaphones';
import { TextToSpeech } from "./Speak";

const App = () => {

  return (
    <div>
      <div className="border border-b p-6">
        <h1 className="text-3xl text-gray-700 font-bold">
          TtS & StT
        </h1>
      </div>
      <div className="flex justify-between p-6 h-screen bg-gray-100">
        <div className="w-full">
          <Dictaphones />
        </div>
        <div className="px-2 border-l-2">
          <TextToSpeech />
        </div>
      </div>
    </div>

  );
}

export default App;
