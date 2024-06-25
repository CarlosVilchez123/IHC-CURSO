import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const VoiceChatbot = () => {
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [response, setResponse] = useState('');
  
    useEffect(() => {
      if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        alert('Este navegador no soporta reconocimiento de voz.');
      }
    }, []);
  
    const startListening = () => {
      SpeechRecognition.startListening({ continuous: true });
    };
  
    const stopListening = () => {
      SpeechRecognition.stopListening();
      handleChatbotResponse(transcript);
    };
  
    const handleChatbotResponse = (text) => {
      // Simula una respuesta del chatbot
      const simulatedResponse = `Tú dijiste: ${text}`;
      setResponse(simulatedResponse);
      speak(simulatedResponse);
    };
  
    const speak = (text) => {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    };
  
    return (
      <div>
        <button onClick={startListening}>Iniciar</button>
        <button onClick={stopListening}>Detener</button>
        <button onClick={resetTranscript}>Resetear</button>
        <p>{transcript}</p>
        <p>{response}</p>
      </div>
    );
  };
