import { useCounterStore } from '../store';
import fish from "/fish-svgrepo-com.svg"
import capy from "/capybara-svgrepo-com.svg"
import dna from "/dna-svgrepo-com.svg"
import question from "/question-mark-svgrepo-com.svg"

const images = [null, capy, fish, dna, question, question, question, question, question, question, question, question, question]

const convertNumber = (number) => {

    if (number < 1000000) {
      return number
    }
     else if (number >= 1000000 && number < 1000000000) {
      return `${(number / 1000000).toFixed(1)}M`
    } else if (number >= 1000000000) {
      return `${(number / 1000000000).toFixed(1)}B`
    }
  }

function Buildings() {
  const { buyBuilding, buildings } = useCounterStore();

  return (
    <div id="square" className="overflow-x-hidden overflow-y-scroll bg-white w-full md:w-80 border-2 rounded-lg max-h-96 flex flex-col justify-center items-center" >
      <div id="square-children" className="relative pt-[29rem] md:pt-[46rem]">
      {Object.entries(buildings).map(([buildingId, buildingData]) => (
        <div key={buildingId} className="flex flex-row justify-center items-center w-80 mx-4 space-y-4 space-x-8">
          <img src={images[buildingId]} alt="un bebe chiguire" className="h-auto w-12 md:w-16" />
          <div className="space-y-1 flex flex-col items-center md:w-32">
            <p className="text-xs md:text-lg">{buildingData.name}</p>
            <span className="text-xs md:text-lg">tienes {Number(buildingData.amount)}</span>
            <button onClick={() => { buyBuilding(buildingId) }} className="bg-yellow-100 px-2 rounded-lg ml-2">
              <span className="text-xs md:text-sm">costo </span>
              <span className="text-xs md:text-sm">{convertNumber(buildingData.cost)}</span>
            </button>
          </div>

        </div>
      ))}
      </div>
    </div>
  )
}

export default Buildings
