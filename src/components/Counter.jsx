import { useCounterStore } from '../store';
import capy from "/capybara-svgrepo-com.svg"
import useClickAnimation from "../hooks/useClickAnimation";

function Clicker() {
  const { count, cps } = useCounterStore();
  const { number, handleClick, styles} = useClickAnimation();

  return (
    <div className="flex flex-col md:space-y-4 h-screen mx-4 justify-center items-center">
      <div className="w-96 flex space-x-6">
        <span className="text-2xl md:text-6xl">Chiguires</span>
        <span className="text-2xl md:text-6xl">{Math.floor(count)}</span>
      </div>
      <p className="text-xl md:text-3xl">{Number.isInteger(cps) ? <span>{cps}</span> : <span>{cps.toFixed(1)}</span>}
        <span> cps</span>
      </p>
      <img src={capy} className="w-96" onClick={handleClick} />
      {number && <span style={styles} className="absolute clickEffect text-yellow-400 text-5xl" >+ {number} chiguire</span>}
    </div>
  )
}

export default Clicker
