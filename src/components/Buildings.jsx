import { useCounterStore } from '../store';

function Buildings() {
  const { buyBuilding, buildings } = useCounterStore(); 

  return (
    <>
      <div>
        <h2>Available Buildings</h2>
        {Object.entries(buildings).map(([buildingId, buildingData]) => (
          <div key={buildingId}>
            <p>
              <b>{buildingData.name}</b> - Cost: {buildingData.cost} clicks, CPS: {buildingData.cps}
            </p>
            <button onClick={() => buyBuilding(buildingId)}>Buy</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Buildings
