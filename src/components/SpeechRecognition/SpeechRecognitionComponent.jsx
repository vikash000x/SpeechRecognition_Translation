import { useEffect } from "react";
import React from 'react';
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";
import { IconMicrophone } from "@tabler/icons-react";
const SpeechRecognitionComponent = ({setSourceText}) => {

  const { transcript, listening} = useSpeechRecognition();

  useEffect(() => {
    setSourceText(transcript)
  }, [transcript]);

  const handleVoiceRecoding =()=>{
    if(listening){
      SpeechRecognition.stopListening()
    }else{
      SpeechRecognition.startListening()
    }
  }
  return (
    <IconMicrophone
     size={22}
     className="text-gray-500"
     onClick={handleVoiceRecoding}
    />
  )
}

export default SpeechRecognitionComponent