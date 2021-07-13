import "./App.css";
import IMAGES from "./Images/Images";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stella Krypriotis's Art</h1>
        <div className="landingImage">
          {/* <img src={IMAGES.beachWaves} alt="crashing waves" /> */}
          <img src={IMAGES.lily} alt="crashing waves" />
        </div>
      </header>
    </div>
  );
}

export default App;
