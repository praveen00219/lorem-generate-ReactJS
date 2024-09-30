import React, { useState } from "react";
import loremIpsumData from "../data/loremData.json";

function Home() {
  const [numParagraphs, setNumParagraphs] = useState(0);
  const [loremText, setLoremText] = useState([]);

  const generateLoremIpsum = () => {
    // Using .slice() to extract the number of paragraphs based on the user input
    const selectedText = loremIpsumData.loremIpsumData.slice(0, numParagraphs);
    setLoremText(selectedText);
  };

  return (
    <div className="home-container">
      <div className="mt-5">
        <h1 className="text-4xl font-bold text-green-500">
          TIRED OF BORING LOREM IPSUM ?
        </h1>
        <p className="text-xl mt-2 font-sans font-semibold text-gray-700">
          Get the best lorem ipsum generator for your needs
        </p>
      </div>

      <div className="my-4">
        <input
          type="number"
          value={numParagraphs}
          className="border mr-4 border-gray-200 shadow-sm px-2 py-1 w-32 rounded-md"
          onChange={(e) => setNumParagraphs(e.target.value)}
          min="1"
          placeholder="Number of paragraphs"
        />

        <button
          onClick={generateLoremIpsum}
          className="bg-[#fde8d5] shadow-md hover:scale-105 active:scale-100 border border-red-300 px-3 py-1 rounded-md text-md font-bold"
        >
          Generate
        </button>
      </div>

      <div className="text-left w-[60%] mx-auto">
        {loremText.map((paragraph, index) => (
          <p
            key={index}
            className="my-4 p-6 rounded-lg shadow-lg animate-fade-in"
          >
            <strong className="mr-2">{index + 1}).</strong>
            {paragraph.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Home;
