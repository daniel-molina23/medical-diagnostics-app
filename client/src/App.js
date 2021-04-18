// import background from './images/medical-cover.jfif';
import doctor from './images/doctor-smiling.jfif';
import heart from './images/heart.png';
import './App.css';
// import './mysass.scss';
import SymptomForm from './SymptomForm';
import ResultsPage from './ResultsPage';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";



function AppHTML(){
  return (
    <div className="App">
        <header className="App-header">
          <img src={doctor} className="doctor" alt="background" />
          <img src={heart} className="heart" alt="heart beat" />
          <p>
            Welcome to your virtual medical assistant. <br/>
          </p>
            <Link
              to="/patient-form"
              className="App-link"
              rel="noopener noferrer"
            >
              <button>
                Press to Start
              </button>
            </Link>
      </header>
    </div>
  )
}



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AppHTML}>
          <AppHTML />
        </Route>
        <Route path="/patient-form" component={SymptomForm}>
          <SymptomForm />
        </Route>

        {/* This last route is redirected from SymptomForm */}
        <Route path="/results" component={ResultsPage} render={(props) => <ResultsPage {...props}/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
