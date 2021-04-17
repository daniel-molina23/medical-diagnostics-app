// import background from './images/medical-cover.jfif';
import doctor from './images/doctor-smiling.jfif';
import heart from './images/heart.png';
import './App.css';
import './mysass.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={doctor} className="doctor" alt="background" />
        <img src={heart} className="heart" alt="heart beat" />
        <p>
          Welcome to your virtual medical assistant. <br/>
        </p>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Press to Start
        </a>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
