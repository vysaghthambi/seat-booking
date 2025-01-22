import Header from "./components/Header/Header"
import Seats from "./components/Seats/Seats"
import Summary from "./components/Summary/Summary"

import "./App.css";

function App() {
  return (
    <main>
      <Header />

      <section>
        <Seats />
        <Summary />
      </section>
    </main>
  )
}

export default App
