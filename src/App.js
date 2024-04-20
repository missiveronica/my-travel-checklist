import './App.css';
import { Travellist } from './Travellist';
import image from './eyedropper_1799720.png'

function App() {
  return (
    <div className="App">
      
      <div>
      <h2>Travel</h2>
      </div>
      
      <div className='container'>
      <h1>Checklist</h1>
      <img src = {image} alt ="eyedropper" width="80px"/>
      </div>
      <Travellist/>

    </div>

  );
}

export default App;
