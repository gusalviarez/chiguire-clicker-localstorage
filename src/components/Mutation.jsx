import React from 'react'
import dna from "/dna-svgrepo-com.svg"

function Mutation() {
  return (
    <div className="bg-white rounded-lg flex flex-col justify-center items-center" >
      <div className="w-64 md:w-80 border-2 rounded-lg">
        <div>
          <img src={dna} />
          <hr />
        </div>
      </div>
    </div>

  )
}

export default Mutation
