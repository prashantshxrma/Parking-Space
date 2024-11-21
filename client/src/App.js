import './App.css';
import { Navbar } from './Components/Navbar';
import Signup from './Components/Signup';
import { ParkingSpace } from './Components/ParkingSpace';
import { BookingPage } from './Components/BookingPage';
import Wallet from './Components/Wallet';
import {Footer} from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Signup/>
      <ParkingSpace/>
      <BookingPage/>
      <Wallet/>
      <Footer/>
    </div>
  );
}

export default App;
