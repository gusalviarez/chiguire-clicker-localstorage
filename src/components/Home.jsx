import Clicker from "./Counter"
import Buildings from "./Buildings"

export const Home = () => {

  return (
    <div className="flex flex-row-reverse md:flex-row md:space-x-40 justify-center items-center h-screen bg-yellow-100">
        <Clicker />
        <Buildings />
    </div>
  )
}
