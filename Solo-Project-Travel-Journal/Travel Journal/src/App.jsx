import Navbar from "./components/Navbar"
import TravelCard from "./components/TravelCard"
import data from "./data"

function App() {

  const tiles = data.map(item => {
    return(
      <TravelCard key={item.id}
        {...item}
      />

    )
  })

  return(
    <div>
    <Navbar />
    <section className="card-list">
    {tiles}
    </section>
    </div>
  )
}

export default App
