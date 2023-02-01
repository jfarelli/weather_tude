import { useState } from 'react';

const useFillers = (insults) => {
  const [cityFillerWord, setCityFillerWord] = useState('');
  const [temperatureFillerWord, setTemperatureFillerWord] = useState('');
  const [weatherConFillerWord, setWeatherConFillerWord] = useState('');

  const displayFillerWords = () => {
    if (insults.fillerWords) {
      setCityFillerWord(
        insults.fillerWords[
          Math.floor(
            Math.random(insults.fillerWords) * insults.fillerWords.length
          )
        ]
      );
    }
    if (insults.fillerTempText) {
      setTemperatureFillerWord(
        insults.fillerTempText[
          Math.floor(
            Math.random(insults.fillerTempText) * insults.fillerTempText.length
          )
        ]
      );
    }
    if (insults.fillerWeatherConText) {
      setWeatherConFillerWord(
        insults.fillerWeatherConText[
          Math.floor(
            Math.random(insults.fillerWeatherConText) *
              insults.fillerWeatherConText.length
          )
        ]
      );
    }
  };

  return [
    cityFillerWord,
    temperatureFillerWord,
    weatherConFillerWord,
    displayFillerWords,
  ];
};

export default useFillers;
