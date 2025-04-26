import { useEffect,useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

import React from 'react'

const useTranslate = (sourceText,selectedLanguage) => {
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY); // Replace with your actual API key
    const [targetText, setTargetText] = useState("");
    useEffect(()=>{
        const handleTranslate = async(sourceText)=>{
            try{
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
                const result = await model.generateContent(
                    
                    `
                    You will be provided with a sentence. This sentence ${sourceText}.
                    Tour task are to:
                     - detect what language the sentence is in 
                     - translate the sentence into ${selectedLanguage}
                    do not return anything other than the translated sentence
                    `
                );
                const responseText = await result.response.text();
                setTargetText(responseText);
                console.log(responseText);
            }catch(error){
                console.error("Error in translation",error)
            }
        }
        if(sourceText.trim()){
            const timeoutId = setTimeout(() => {
                handleTranslate(sourceText);
            }, 500);
            return () => {
                clearTimeout(timeoutId);
            };
        }
    },[sourceText,selectedLanguage])
  return targetText;
}

export default useTranslate