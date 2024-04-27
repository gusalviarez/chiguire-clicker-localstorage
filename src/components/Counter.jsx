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

  return (
    <div className="flex flex-col md:space-y-4 h-screen mx-4 justify-center items-center">
      <div className="w-56 md:w-96 flex space-x-6">
        <span className="text-2xl md:text-6xl">Chiguires</span>
        <span className="text-2xl md:text-6xl">{Math.floor(count)}</span>
      </div>
      <p className="text-xl md:text-3xl">{Number.isInteger(cps) ? <span>{cps}</span> : <span>{cps.toFixed(1)}</span>}
        <span> cps</span>
      </p>
      <img ref={capyRef} src={capy} className="w-56 md:w-96" onClick={handleClick} />
      {number && <span ref={spanRef} style={styles} className="text-yellow-400 text-xl md:text-5xl" >+ {number}</span>}
    </div>
  );
}

export default Clicker
