import { useEffect } from "react";
import { useCounterStore } from '../store';
import capy from "../../public/capybara-clicker.svg"

function Clicker() {
  const { count, cps, addCounter, addCps } = useCounterStore();

  useEffect(() => {
    const intervalId = setInterval(() => {
      addCps()
    }, 1000);

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="flex flex-col md:space-y-4 h-screen mx-4 justify-center items-center">
      <h1 className="text-2xl md:text-6xl">Chiguire clicker</h1>
      <p>Chiguires {Math.floor(count)}</p>
      <p>{ Number.isInteger(cps) ? <span>{cps}</span> : <span>{cps.toFixed(1)}</span>}
        <span> cps</span>
      </p>
      <button onClick={addCounter}>
        <img src={capy} alt="capy"  className="w-96" />
    </button>
    </div>
  )
}

export default Clicker
