import { useEffect} from "react";
import { useCounterStore } from '../store';

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
    <>
      <h1>Chiguire clicker</h1>
      <p>Count: {count.toFixed(2)}</p>
      <p>Cps: {cps.toFixed(2)}</p>
      <button onClick={addCounter}>Increment</button>
    </>
  )
}

export default Clicker
