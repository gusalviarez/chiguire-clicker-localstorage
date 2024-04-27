import React from 'react'
import { useCounterStore } from '../store';

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

function Mutation() {

  const { mutations, buyMutation } = useCounterStore();
``
  return (
    <div id="square-mutation" className="bg-white w-full md:w-80 border-2 flex justify-center rounded-lg h-96">
      <div id="square-mutation-children" className="md:ml-1 flex flex-col justify-center items-center w-full">
        {Object.entries(mutations).map(([mutationId, mutationData]) => (
          <div key={mutationId} className="w-2/3 m-1 p-1 h-auto w-full flex items-center justify-center border-2 rounded-lg">
            <button onClick={() => {buyMutation(mutationId)}}>
              <p className="text-xs">{mutationData.name}</p>
              <p className="text-xs">costo {convertNumber(mutationData.cost)}</p>
              <p className="text-xs">tienes {mutationData.amount}</p>
            </button>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default Mutation
