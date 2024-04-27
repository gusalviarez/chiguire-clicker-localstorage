import dna from "/dna-svgrepo-com.svg"
import buildings from "/buildings-3-svgrepo-com.svg"
import { useCounterStore } from "../store"


function Nav() {
  const { changeWindow } = useCounterStore();

  return (
    <div className="bg-white w-[15rem] md:w-80 rounded-lg border-2 flex">
      <div className="w-1/2 flex items-center justify-center border-r-2 hover:bg-gray-100" onClick={() => { changeWindow(1) }}>
        <img className="w-8" src={buildings} />
      </div>
      <div className="w-1/2 h-12 flex items-center justify-center border-r-2 hover:bg-gray-100"
        onClick={() => { changeWindow(2) }}
      >
        <img className="w-8" src={dna} />
      </div>
    </div>
  )
}

export default Nav
