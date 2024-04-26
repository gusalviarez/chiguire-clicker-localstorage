import { useState, useRef, useEffect } from 'react';
import {useCounterStore} from '../store';

function useCapyAnimation() {
  const timeoutRef = useRef(null);
  const capyRef = useRef(null);

  const capyAnimation = () => {
    clearTimeout(timeoutRef.current);
    
    capyRef.current.style = "transform: scale(1.1); transition: transform 0.2s;"

    timeoutRef.current = setTimeout(() => {
      capyRef.current.style = "transform: scale(1); transition: transform 0.2s;"
    }, 100);
  };

  useEffect(() => {

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    capyRef, capyAnimation
  };
}

export default useCapyAnimation;

