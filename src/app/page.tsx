"use client";
import "regenerator-runtime/runtime";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from "react";
import TextArea from "../components/inputs/TextArea";
import SpeechRecognitionComponent from "../components/SpeechRecognition/SpeechRecognitionComponent";
import { IconCopy, IconStar, IconThumbDown, IconThumbUp, IconVolume } from "@tabler/icons-react";
import FileUpload from "../components/inputs/FileUpload";
import { rtfToText } from "../utils/rtfToText";
import LinkPaste from "../components/inputs/LinkPaste";
import useTranslate from "@/hooks/useTranslate";
import LanguageSelector from "../components/inputs/LanguageSelector"
import SvgDecorations from "@/components/SvgDecorations";
import CategoryLinks from "@/components/categoryLinks";
const Home: React.FC = () => {
  const [sourceText, setSourceText] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [languages] = useState<string[]>(["Russian", "English","French", "Spanish", "Sinhala", "Italian", "German", "Japanese", "Chinese", "Korean", "Arabic"])
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Sinhala");
  const targetText = useTranslate(sourceText, selectedLanguage);

  const languageMap: { [key: string]: string } = {
    "Russian": "ru-RU",
    "French": "fr-FR",
    "Spanish": "es-ES",
    "Sinhala": "si-LK",
    "Italian": "it-IT",
    "German": "de-DE",
    "Japanese": "ja-JP",
    "Chinese": "zh-CN",
    "Korean": "ko-KR",
    "Arabic": "ar-SA",
  };

  const handleAudioPlayBack = (sourceText: string) => {
    const audio = new SpeechSynthesisUtterance(sourceText);
    
     if(languageMap[selectedLanguage]){
      audio.lang = languageMap[selectedLanguage];
     }else{
      audio.lang = "en-US";
     }
    window.speechSynthesis.speak(audio);
  };

  const handlePaste = (text: string) => { };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const rtfContent = reader.result as string;
        const text = rtfToText(rtfContent);

        setSourceText(text);
      };
      reader.readAsText(file);
    }
  };
  function handleCopyToClipboard() {
    // throw new Error("Function not implemented.");
    navigator.clipboard.writeText(targetText + "");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);

  }
  function handleFavorite() {
    setFavorite(!favorite);
  }

  return (
    <>
      <div className="w-full bg-dark bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-dark [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="relative  h-screen">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24">
            <div className="text-center">
              <h1 className="text-3xl sm:text-6xl font-bold">
                <span className="text-blue-200">Grammar </span>
                <span className="text-blue-400">Speaker</span>
              </h1>
              <p className="mt-1 text-neutral-500">
                Grammar Speaker : Give Suggestions , Resolving Issues
              </p>
              <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative mb-5">
                <div className="grid gap-6 md:grid-cols-1 grid-cols-1">
                  <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                    <TextArea
                      id="source-language"
                      value={sourceText}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                        setSourceText(e.target.value);
                      }}
                      placeholder={"Source Text"}
                    />
                    <div className="flex flex-row justify-between w-full">
                      <span className="curser-pointer flex space-x-2 flex-row">
                        <SpeechRecognitionComponent
                          setSourceText={setSourceText}
                        />
                        <IconVolume
                          size={22}
                          onClick={() => handleAudioPlayBack(sourceText)}
                        />
                        <FileUpload handleFileUpload={handleFileUpload} />
                        <LinkPaste handleLinkPaste={handlePaste} />
                      </span>
                      {/*file upload component */}
                      <span className="text-sm pr-4">
                        {sourceText.length} /2000
                      </span>
                    </div>
                  </div>
                  <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                    <TextArea id={'target-language'} value={targetText} onChange={() => { }} placeholder={"target-language"} />
                    <div className="flex flex-row justify-between w-full">
                      <span className="curser-pointer flex space-x-2 flex-row items-center">
                        <LanguageSelector selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} language={languages} />
                        <IconVolume size={22} onClick={() => handleAudioPlayBack(targetText + "")} />
                      </span>
                      <div className="flex flex-row items-center space-x-2 pr-4 cursor-pointer">
                        <IconCopy size={22} onClick={handleCopyToClipboard} />
                        {copied && <span className="text-xs text-green-500">Copied</span>}
                        <IconThumbUp size={22} />
                        <IconThumbDown size={22} />
                        <IconStar size={22} onClick={handleFavorite} className={favorite ? "text-yellow-500" : ""} />
                      </div>
                    </div>
                  </div>
                </div>
                <SvgDecorations />
              </div>
            <CategoryLinks />
            </div>
          </div>
        </div>  
      </div>
    </>
  );
}
export default Home;