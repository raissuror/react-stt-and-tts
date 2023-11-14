import React, { useState } from 'react'
import { SpeakerXMarkIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid'


const TextToSpeech = () => {
    const [ourText, setOurText] = useState("")
    const msg = new SpeechSynthesisUtterance()
  
    const speechHandler = (msg) => {
      msg.lang = "id-ID"
      msg.text = ourText
      window.speechSynthesis.speak(msg)
    }

  return (
    <div className="flex flex-col p-6 justify-center">
        <h1>Text to Speech</h1>
        <textarea
          type='text'
          value={ourText}
          placeholder='Enter Text'
          onChange={(e) => setOurText(e.target.value)}
          className="p-2 rounded-lg h-96 mt-4 border-2"
        />
        <button className="mt-4 flex justify-center" onClick={() => speechHandler(msg)}>
          <SpeakerWaveIcon className="h-6 w-6 text-blue-500" />
        </button>
        <div className="flex flex-col mt-8 justify-center space-y-4">
          <button className="p-2 bg-slate-500 rounded text-sky-400" onClick={() => setOurText("Mohon maaf, saya ingin bertanya")}>
            "Mohon maaf, saya ingin bertanya"
          </button>
          <button className="p-2 bg-slate-500 rounded text-sky-400" onClick={() => setOurText("Mohon maaf, saya ingin izin ke toilet")}>
            "Mohon maaf, saya ingin izin ke toilet"
          </button>
        </div>
    </div>
  )
}

export default TextToSpeech;
