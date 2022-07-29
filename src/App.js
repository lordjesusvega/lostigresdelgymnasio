import './App.css';
import Nav from './Nav';
import ImageGrid from './ImageGrid';


function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="hero-image-container">
        <img className="heroImage one" src="https://live.staticflickr.com/65535/52246927042_16c3a397e5_b.jpg"/>
        <img className="heroImage" src="https://live.staticflickr.com/65535/52246927042_16c3a397e5_b.jpg"/>
        <img className="heroImage three" src="https://live.staticflickr.com/65535/52246927042_16c3a397e5_b.jpg"/>
      </div>
    </div>
  );
}

export default App;
