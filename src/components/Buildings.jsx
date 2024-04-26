import { useCounterStore } from '../store';
import fish from "/fish-svgrepo-com.svg"
import capy from "/capybara-svgrepo-com.svg"
import dna from "/dna-svgrepo-com.svg"

const images = [null, capy, fish, dna, capy, capy, capy, capy, capy, capy, capy, capy, capy]

function Buildings() {
  const { buyBuilding, buildings } = useCounterStore();

  return (
    <div id="square" className="overflow-x-hidden overflow-y-scroll bg-white w-64 md:w-80 border-2 rounded-lg max-h-96 flex flex-col justify-center items-center" >
      <div id="square-children" className="relative pt-[45rem]">
      {Object.entries(buildings).map(([buildingId, buildingData]) => (
        <div key={buildingId} className="flex flex-row justify-center items-center w-80 mx-4 space-y-4 space-x-8">
          <img src={images[buildingId]} alt="un bebe chiguire" className="h-auto w-16" />
          <div className="space-y-1 flex flex-col items-center w-32">
            <p className="text-lg">{buildingData.name}</p>
            <span>tienes {Number(buildingData.amount)}</span>
            <button onClick={() => { buyBuilding(buildingId) }} className="text-sm bg-yellow-100 px-2 rounded-lg ml-2">
              <span className="text-sm">costo </span>
              <span className="text-sm">{buildingData.cost}</span>
            </button>
          </div>

        </div>
      ))}
      </div>
    </div>
  )
}

export default Buildings
