import { useState, useEffect } from 'react';

export function useTypewriter(phrases, typingSpeed = 120, pauseDuration = 200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const timeout = setTimeout(() => {
      if (forward) {
        if (subIndex < phrases[index].length) {
          setSubIndex(subIndex + 1);
        } else {
          setPause(true);
          setTimeout(() => {
            setForward(false);
            setPause(false);
          }, pauseDuration);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex(subIndex - 1);
        } else {
          setPause(true);
          setTimeout(() => {
            setIndex((index + 1) % phrases.length);
            setForward(true);
            setPause(false);
          }, pauseDuration);
        }
      }
    }, forward ? typingSpeed : typingSpeed / 2);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, pause]);

  return phrases[index].substring(0, subIndex);
}
