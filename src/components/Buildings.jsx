import { useCounterStore } from '../store';
import fish from "/fish-svgrepo-com.svg"
import capy from "/capybara-svgrepo-com.svg"
import dna from "/dna-svgrepo-com.svg"

const images = [null, capy, fish, dna]

function Buildings() {
  const { buyBuilding, buildings } = useCounterStore();


  return (
    <div className="bg-white rounded-lg flex flex-col justify-center items-center" >
      <div className="w-64 md:w-80 border-2 rounded-lg">
        {Object.entries(buildings).map(([buildingId, buildingData]) => (
          <div key={buildingId}>
            <div className="flex flex-row mt-4 mx-4 space-x-8">
              <img src={images[buildingId]} alt="un bebe chiguire" className="h-auto w-20 rounded-lg" />
              <div>
                <p className="text-xl">{buildingData.name}</p>
                <p>tienes {Number(buildingData.amount)}</p>
                <button onClick={() => { buyBuilding(buildingId) }} className="bg-yellow-100 p-2 rounded-lg hover:border">
                  <span>costo </span>
                  <span>{buildingData.cost}</span>
                </button>
              </div>

            </div>
            <hr className="h-px mt-4 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Buildings
