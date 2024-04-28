import { Home } from "./components/Home"

const handleContextMenu = (event) => {
  event.preventDefault()
}

function App() {

  return (
    <>
      <div onContextMenu={handleContextMenu}>
      <Home/>
      </div>
    </>
  )
}

export default App
