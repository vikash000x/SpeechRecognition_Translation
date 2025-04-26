## Language Translator App

This is a Next.js-based language translator app that uses the Gemini API for text translation and the Web Speech API for speech recognition and synthesis.

## Features

🎤 Speech Recognition: Convert spoken words into text.

🌍 Language Translation: Translate text into selected languages using Gemini API.

🔊 Speech Synthesis: Read out the translated text.

🎨 User-friendly UI: Simple and clean interface with language selection.

## Tech Stack

  -Next.js (React Framework)
  
  -Gemini API (Translation)
  
  -Web Speech API (Speech Recognition & Synthesis)
  
  -Tailwind CSS (Styling)

## Installation & Setup

  1️⃣ Clone the Repository

  ```
  git clone https://github.com/yourusername/translator-app.git
  cd translator-app
  ```
  
  2️⃣ Install Dependencies

  ```
  npm install
  ```
  
  3️⃣ Set Up Environment Variables
  
  Create a .env.local file in the root directory and add your Gemini API key:

  ```
      NEXT_PUBLIC_API_KEY=your-api-key-here
  ```
  
  4️⃣ Run the App

  ```
  npm run dev
  ```

**The app will be available at http://localhost:3000**

## Usage

-Click on the "🎤 Speak" button and start speaking.

-The recognized text will appear in the text box.

-Select the target language from the dropdown.

-Click "🔁 Translate" to translate the text.

-Click "🔊 Listen" to hear the translation.


## Deployment

To deploy on Vercel, run:
  ```
   npm run build
  ```


## Future Improvements

    Support for more languages
    
    Enhanced UI/UX
    
    Offline translation support

