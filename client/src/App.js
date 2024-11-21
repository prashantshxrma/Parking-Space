import './App.css';
import { Navbar } from './Components/Navbar';
import Signup from './Components/Signup';
import { ParkingSpace } from './Components/ParkingSpace';
import { BookingPage } from './Components/BookingPage';
import Wallet from './Components/Wallet';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Signup/>
      <ParkingSpace/>
      <BookingPage/>
      <Wallet/>
    </div>
  );
}

export default App;
