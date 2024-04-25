import Clicker from "./Counter"
import Buildings from "./Buildings"
import Nav from "./Nav"
import { useCounterStore } from "../store"
import Mutation from "./Mutation"

export const Home = () => {

  const { window } = useCounterStore();

  return (
    <div className="flex flex-row-reverse md:flex-row md:space-x-40 justify-center items-center h-screen bg-yellow-100">
      <Clicker />
      <div className="space-y-4">
        <Nav />
          {(window == 1) ? <Buildings /> : <Mutation />}
      </div>
    </div>
  )
}
