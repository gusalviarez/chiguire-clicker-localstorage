import { useCounterStore } from '../store';
import capy from "/capybara-svgrepo-com.svg"
import dna from "/dna-svgrepo-com.svg"
import question from "/question-mark-svgrepo-com.svg"
import lettuce from "/lettuce-svgrepo-com.svg"
import soap from "/soap-svgrepo-com.svg"
import fire from "/fire-svgrepo-com.svg"
import basic from "/basic-svgrepo-com.svg"
import knife from "/knife-svgrepo-com.svg"
import town from "/town-svgrepo-com.svg"
import city from "/city-svgrepo-com.svg"
import zen from "/zen-svgrepo-com.svg"
import pacifier from "/pacifier-baby-svgrepo-com.svg"

const images = [question, pacifier, lettuce, soap, zen, dna, fire, basic, knife, town, city]

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
  const { buyBuilding, buildings, totalCount } = useCounterStore();

  return (
    <div id="square" className="overflow-x-hidden overflow-y-scroll bg-white w-full md:w-80 border-2 rounded-lg max-h-96 flex flex-col justify-center items-center" >
      <div id="square-children" className="relative pt-[42rem] md:pt-[46rem]">
        {Object.entries(buildings).map(([buildingId, buildingData]) => (
          <div key={buildingId} className="flex flex-row justify-center items-center md:w-80 md:mx-4 space-y-4 md:space-x-8 space-x-2">
            <img src={buildingId > 1 ? totalCount >= buildingData.cost ? images[buildingId] : images[0] : images[buildingId]}
  alt="un bebe chiguire" className="h-auto w-12 md:w-16" />
            <div className="space-y-1 flex justify-center text-center items-center flex-col items-center w-20 md:w-32">
              <span className="text-xs md:text-lg text-center">
                {buildingId > 1 ? totalCount >= buildingData.cost ? buildingData.name : '???' : buildingData.name}
              </span>
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
