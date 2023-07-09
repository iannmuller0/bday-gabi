import textosImage from './Textos.png';
import textosImageMobile from './TextosMobile.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <img width={window.screen.width < 930 ? 200 : 800} src={window.screen.width < 930 ? textosImageMobile : textosImage} className="App-logo" alt="save the date" />
    </div>
  );
}

export default App;
