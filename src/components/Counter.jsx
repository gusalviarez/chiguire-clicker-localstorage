import { useCounterStore } from '../store';
import capy from "/capybara-svgrepo-com.svg"
import useClickAnimation from "../hooks/useClickAnimation";
import useCapyAnimation from "../hooks/useCapyAnimation";

function Clicker() {
  const { count, cps, addCounter } = useCounterStore();
  const { clickAnimation, styles, spanRef, number } = useClickAnimation();
  const { capyRef, capyAnimation } = useCapyAnimation();

  const handleClick = (event) => {
    capyAnimation()
    clickAnimation(event)
    addCounter()
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
    <div className="flex flex-col space-y-4 h-screen mx-4 justify-center items-center">
      <div className="w-2/3 md:w-96 flex flex-col items-center justify-center md:flex-row md:space-x-6">
        <span className="text-xl md:text-6xl">Chiguires</span>
        <span className="text-xl md:text-6xl">{convertNumber(Math.floor(count))}</span>
      </div>
      <p className="text-xl md:text-3xl">{Number.isInteger(cps) ? <span>{cps}</span> : <span>{cps.toFixed(1)}</span>}
        <span> cps</span>
      </p>
      <img ref={capyRef} src={capy} className="w-full md:w-96" onClick={handleClick} />
      {number && <span ref={spanRef} style={styles} className="text-yellow-700 text-3xl md:text-5xl" >+ {number}</span>}
    </div>
  );
}

export default Clicker
