import Clicker from "./Counter"
import Buildings from "./Buildings"
import Nav from "./Nav"
import { useCounterStore } from "../store"
import Mutation from "./Mutation"
import { useEffect, useRef } from "react"

export const Home = () => {

  const { tab, addCps } = useCounterStore();
  const timeoutRef = useRef(null)

  const reset = () => {
    localStorage.clear()
    window.location.reload()
  }

  useEffect(() => {
    timeoutRef.current = setInterval(addCps, 1000)
    return () => clearInterval(timeoutRef.current)
  }, [])

  return (
    <div className="flex flex-row-reverse md:flex-row md:space-x-40 justify-center items-center md:h-screen h-full bg-yellow-100">
      <Clicker />
      <div className="space-y-4 flex flex-col justify-center items-center w-[15rem] md:w-60 ml-12">
        <Nav />
          {(tab == 1) ? <Buildings /> : <Mutation />}
        <button onClick={reset} className="bg-red-500 text-white p-1 rounded-lg">Reset</button>
      </div>
      
    </div>
  )
}
