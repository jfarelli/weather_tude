import { useState } from 'react';

const useFillers = (insults) => {
  const [temperatureFillerWord, setTemperatureFillerWord] = useState('');
  const [weatherConFillerWord, setWeatherConFillerWord] = useState('');

  const displayFillerWords = () => {
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

  return [temperatureFillerWord, weatherConFillerWord, displayFillerWords];
};

export default useFillers;
