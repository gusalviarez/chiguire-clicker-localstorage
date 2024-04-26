import React from 'react'
import { useCounterStore } from '../store';

const images = [null, null, null, null,null,null,null,null,null,null,null,null,null,null,null,null,null]

function Mutation() {

  const { mutations, buyMutation } = useCounterStore();
``
  return (
    <div id="square-mutation" className="bg-white w-64 md:w-80 border-2 rounded-lg h-96">
      <div id="square-mutation-children" className="ml-1 flex flex-col">
        {Object.entries(mutations).map(([mutationId, mutationData]) => (
          <div key={mutationId} className="m-1 h-auto flex items-center justify-center border-2 rounded-lg">
            <button onClick={() => {buyMutation(mutationId)}}>
              <p>{mutationData.name}</p>
              <p>costo {mutationData.cost}</p>
              <p>tienes {mutationData.amount}</p>
            </button>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default Mutation
