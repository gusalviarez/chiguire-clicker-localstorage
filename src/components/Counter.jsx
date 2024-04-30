import { useCounterStore } from '../store';
import capy from "/capybara-svgrepo-com.svg"
import useCapyAnimation from "../hooks/useCapyAnimation";
import { useRef } from 'react';
function Clicker() {
  const { count, cps, addCounter, click } = useCounterStore();
  const { capyRef, capyAnimation } = useCapyAnimation();
  const divRef = useRef(null)


  const handleClick = (event) => {
    capyAnimation()
    addCounter()
    const span = document.createElement("span")
    span.textContent = "+ " + `${click}`
    span.classList.add("upward-animation")
    span.style.position = "absolute"
    span.style.top = `${event.clientY}px`
    span.style.left = `${event.clientX}px`
    span.style.color = "white"
    span.style.fontSize = "1.6rem"
    divRef.current.appendChild(span)
    span.addEventListener('animationend', () => {
      span.parentNode.removeChild(span);
    });
  }

  const convertNumber = (number) => {

    if (number < 1000000) {
      return number
    }
    else if (number >= 1000000 && number < 1000000000) {
      return `${(number / 1000000).toFixed(1)}M`
    } else if (number >= 1000000000) {
      return `${(number / 1000000000).toFixed(1)}B`
    }
  }

  return (
    <div ref={divRef} className="flex flex-col space-y-4 h-screen mx-1 justify-center items-center">
      <div className="w-[11rem] md:w-96 flex flex-col items-center justify-center md:flex-row md:space-x-6">
        <span className="text-xl md:text-6xl">Chiguires</span>
        <span className="text-xl md:text-6xl">{convertNumber(Math.floor(count))}</span>
      </div>
      <p className="text-xl md:text-3xl">{Number.isInteger(cps) ? <span>{convertNumber(cps)}</span> : <span>{convertNumber(cps.toFixed(1))}</span>}
        <span> cps</span>
      </p>
      <img ref={capyRef} src={capy} className="h-auto w-[9rem] md:w-96" onClick={handleClick} />
    </div>
  );
}

export default Clicker
