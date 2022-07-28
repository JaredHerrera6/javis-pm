import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import{Link} from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home"
import Concrete from "./pages/Concrete"
import Drainage from "./pages/Drainage"
import Masonry from "./pages/Masonry"
import AboutUs from "./pages/AboutUs"
import NotFound from './pages/NotFound';
import "./index.css" 
import "./pages/styles/Concrete.css"



function App() {
  return (
    <div className="page-container">
        <Router>
        <div className='navbar-container'>
          <div className="site-title">
            <Link to = "/" >Javis Property Maintenance</Link>
          </div>
          <Navbar/>
        </div>
        
          <main>
            <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/concrete" element = {<Concrete/>}/>
            <Route path = "/Drainage" element = {<Drainage/>}/>
            <Route path = "/Masonry" element = {<Masonry/>}/>
            <Route path = "/AboutUs" element = {<AboutUs/>}/>
            <Route path = "/*" element = {<NotFound/>}/>
            </Routes>
          </main>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
