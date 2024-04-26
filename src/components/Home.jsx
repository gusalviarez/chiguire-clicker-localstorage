import Clicker from "./Counter"
import Buildings from "./Buildings"
import Nav from "./Nav"
import { useCounterStore } from "../store"
import Mutation from "./Mutation"

export const Home = () => {

  const { tab } = useCounterStore();
  
  const reset = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div className="flex flex-row-reverse md:flex-row md:space-x-40 justify-center items-center h-screen bg-yellow-100">
      <Clicker />
      <div className="space-y-4">
        <Nav />
          {(tab == 1) ? <Buildings /> : <Mutation />}
        <button onClick={reset} className="bg-red-500 ml-64 text-white p-2 rounded-lg">Reset</button>
      </div>
      
    </div>
  )
}
