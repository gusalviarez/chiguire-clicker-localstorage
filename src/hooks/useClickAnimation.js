import { useState, useRef, useEffect } from 'react';
import { useCounterStore } from '../store'

function useClickAnimation(event) {
  const {click} = useCounterStore();
  const [number, setNumber] = useState(null);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef(null);
  const spanRef = useRef(null);

  const clickAnimation = (event) => {
    clearTimeout(timeoutRef.current);
    setNumber(click)
    setClickPosition({ x: event.clientX , y: event.clientY });

    timeoutRef.current = setTimeout(() => {
      setNumber(null);
    }, 1000);
  };

 useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const styles = {
    position: 'absolute',
    top: clickPosition.y - 50,
    left: clickPosition.x + 10,
  }

  return {
    clickAnimation,
    styles,
    spanRef,
    number,
  };
}

export default useClickAnimation;
