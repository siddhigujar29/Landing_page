
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Introduction from './Components/introduction'
import Targetaudience from './Components/Targetaudience';
import Golfculture from './Components/Golfculture';
import Gamechanging from './Components/Gamechanging';
import Benefits from './Components/Benefits';
import Swing from './Components/Swing';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
        <Navbar/>
    <Home/>
    <Introduction/>
    <Targetaudience/>
    <Golfculture/>
    <Gamechanging/>
    <Benefits/>
    <Swing/>
    <Footer/>
    </div>
     );
}

export default App;
