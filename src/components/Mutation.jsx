import React from 'react'
import { useCounterStore } from '../store';

const images = [null, null, null, null,null,null,null,null,null,null,null,null,null,null,null,null,null]

function Mutation() {

  const { mutations, buyMutation } = useCounterStore();
``
  return (
    <div id="square-mutation" className="bg-white w-full md:w-80 border-2 rounded-lg h-96">
      <div id="square-mutation-children" className="md:ml-1 flex flex-col justify-center items-center">
        {Object.entries(mutations).map(([mutationId, mutationData]) => (
          <div key={mutationId} className="w-2/3 m-1 h-auto w-full flex items-center justify-center border-2 rounded-lg">
            <button onClick={() => {buyMutation(mutationId)}}>
              <p className="text-xs">{mutationData.name}</p>
              <p className="text-xs">costo {mutationData.cost}</p>
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
