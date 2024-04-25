import React from 'react'
import dna from "/dna-svgrepo-com.svg"
import { useCounterStore } from '../store';


function Mutation() {

  const { Mutations } = useCounterStore();

  return (
        <div className="bg-white flex flex-wrap w-80 h-96 rounded-lg border-2 items-center justify-around">
          {Object.entries(Mutations).map(([MutationId, MutationData]) => (
            <div key={MutationId} className="m-5 basis-1/12">
              <button>
              <img src={dna} alt={MutationData.name} className="" />
              </button>
            </div>
          )
          )}
        </div>
  )
}

export default Mutation
