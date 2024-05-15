import "./style/index.scss"
import Header from './Components/Header'
import Works from "./Components/Works"
import WorkShop from "./Components/WorkShop"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
      <Header />
      <main>
        <Works />
        <WorkShop />
      </main>
      <Footer />
    </>
  )
}

export default App
