import Contact from "./components/contact/Contact"
import Foot from "./components/foot/Foot"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Porfolio"
import Topbar from "./components/topbar/Topbar"

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Contact/>
        <Foot/>
      </div>
    </div>
  );
}

export default App;
