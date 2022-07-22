import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import{Link} from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home"
import Concrete from "./pages/Concrete"
import Drainage from "./pages/Drainage"
import Masonry from "./pages/Masonry"
import YardClean from "./pages/YardClean"
import AboutUs from "./pages/AboutUs"
import SnowRemoval from "./pages/SnowRemoval"
import "./index.css" 



function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
    <Router>
    <div className="site-title">
      <Link to = "/" >Javis Property Maintenance</Link>
    </div>
      <Navbar/>
      <main>
        <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/concrete" element = {<Concrete/>}/>
        <Route path = "/Drainage" element = {<Drainage/>}/>
        <Route path = "/Masonry" element = {<Masonry/>}/>
        <Route path = "/AboutUs" element = {<AboutUs/>}/>
        <Route path = "/YardCleanUp" element = {<YardClean/>}/>
        <Route path = "/SnowRemoval" element = {<SnowRemoval/>}/>
        </Routes>
      </main>
    </Router>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
