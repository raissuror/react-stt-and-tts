import React, { useState } from 'react'
import { DictaphoneWidgetA } from './Dictaphone'
import SpeechRecognition from './SpeechRecognition'
import { SpeakerXMarkIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid'

export default () => {
  const [mute, setMute] = useState(true)

  const listenContinuously = () => {
    setMute(false);
    SpeechRecognition.startListening({
      continuous: true,
      language: 'id'
    })
  }

  const stopListening = () => {
    setMute(true);
    SpeechRecognition.stopListening();
  }

  return (
    <div className="flex flex-col w-full p-6">
      <h1 className="mb-4">Speech to Text</h1>
      <div className="flex h-fit w-full bg-white rounded-t-lg">
        {<DictaphoneWidgetA/>}
      </div>
      <div className="flex items-center justify-center w-full bg-gray-300 p-4 rounded-b-lg">
        { mute 
          ? <button onClick={listenContinuously}><SpeakerWaveIcon className="h-6 w-6 text-blue-500" /></button> 
          : <button onClick={stopListening}><SpeakerXMarkIcon className="h-6 w-6 text-blue-500" /></button>
        }
      </div>
    </div>
  )
}
