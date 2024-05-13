import "./style/index.scss"
import Header from './Components/Header'
import Works from "./Components/Works"
import WorkShop from "./Components/WorkShop"

function App() {

  return (
    <>
      <Header />
      <main>
        <Works />
        <WorkShop />
      </main>
    </>
  )
}

export default App
