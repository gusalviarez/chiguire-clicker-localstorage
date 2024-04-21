import { useEffect } from "react";
import { useCounterStore } from '../store';
import capy from "/capybara-clicker.svg"

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
      <span className="text-2xl md:text-6xl">Chiguires {Math.floor(count)}</span>
      <p className="text-xl md:text-3xl">{ Number.isInteger(cps) ? <span>{cps}</span> : <span>{cps.toFixed(1)}</span>}
        <span> cps</span>
      </p>
      <img src={capy} className="w-96" onClick={addCounter} />
    </div>
  )
}

export default Clicker
