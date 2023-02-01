import { useState } from 'react';

const useTempText = (temp, insults) => {
  const [displayedText, setDisplayedText] = useState('');

  const displayTempText = () => {
    if (temp >= 85) {
      setDisplayedText(
        insults.hot[Math.floor(Math.random(insults.hot) * insults.hot.length)]
      );
    } else if (temp >= 72 && temp < 85) {
      setDisplayedText(
        insults.warmToHot[
          Math.floor(Math.random(insults.warmToHot) * insults.warmToHot.length)
        ]
      );
    } else if (temp >= 60 && temp < 72) {
      setDisplayedText(
        insults.midRange[
          Math.floor(Math.random(insults.midRange) * insults.midRange.length)
        ]
      );
    } else if (temp >= 50 && temp < 60) {
      setDisplayedText(
        insults.coldToMid[
          Math.floor(Math.random(insults.coldToMid) * insults.coldToMid.length)
        ]
      );
    } else if (temp < 50) {
      setDisplayedText(
        insults.cold[
          Math.floor(Math.random(insults.cold) * insults.cold.length)
        ]
      );
    }
  };

  return [displayedText, displayTempText];
};
export default useTempText;
