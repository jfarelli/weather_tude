import { useState } from 'react';

const useTempText = (temp, insults) => {
  console.log('TEMP: ', temp);
  const [rudeText, setRudeText] = useState('');

  const displayRudeText = () => {
    if (!temp) return;
    if (temp >= 85) {
      setRudeText(
        insults.hot[Math.floor(Math.random(insults.hot) * insults.hot.length)]
      );
    }
    if (temp >= 72 && temp < 85) {
      setRudeText(
        insults.warmToHot[
          Math.floor(Math.random(insults.warmToHot) * insults.warmToHot.length)
        ]
      );
    }
    if (temp >= 60 && temp < 72) {
      setRudeText(
        insults.midRange[
          Math.floor(Math.random(insults.midRange) * insults.midRange.length)
        ]
      );
    }
    if (temp >= 50 && temp < 60) {
      setRudeText(
        insults.coldToMid[
          Math.floor(Math.random(insults.coldToMid) * insults.coldToMid.length)
        ]
      );
    }
    if (temp < 50) {
      setRudeText(
        insults.cold[
          Math.floor(Math.random(insults.cold) * insults.cold.length)
        ]
      );
    }
  };

  return [rudeText, displayRudeText];
};
export default useTempText;
