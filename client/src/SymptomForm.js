import './App.css';
import React from 'react';
import './SymptomForm.css';
// import Diagnosis from './script.js';
import { Redirect } from 'react-router-dom';
// import sampleResponse from './jsonStatic/sampleResponse.js';

const fetch = require('node-fetch');


class SymptomForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {firstName: '',
          lastName: '',
          birthYear: '',
          gender: '',
          symptoms: '',
          showResults: false,
          results: null};
      this.mappings = {firstName: "Enter Fist Name", lastName:"Enter Last Name",birthYear:"Enter Birth Year", gender:"Select One", symptoms:"Enter Symptom ID"}
      // this.diagnostic = new Diagnosis();
      this.handleChange = this.handleInputChange.bind(this);
      this.toggleResults = this.toggleResults.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        // console.log("One change in state");

        this.setState({
          [name]: value
        });
      }

    toggleResults() {
      this.setState(state => ({ showResults: !state.showResults }));
    };

    async MediAPICall({gender, symptoms, birthYear}){
      const url = `https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis?symptoms=${symptoms}&gender=${gender}&year_of_birth=${birthYear}&language=en-gb`;
      const options  = {
        method: 'GET',
        // qs: {symptoms, gender, year_of_birth: birthYear, language: 'en-gb'},  //parameters for specified info
        headers: {
          'x-rapidapi-key': 'ada0373128mshff83f2784144a0fp173715jsn1089a0cfb782',
          'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
          useQueryString: true
          }
      };
      const response = await fetch(url, options);
      const responseJSON = await response.json();
      console.log('INSIDE API CALL ', responseJSON);
      return responseJSON;
    }


    async handleSubmit(event) {
      var valid = true;
      Object.entries(this.state).forEach(([key, value]) => {
        valid = valid && (value !== '' || value !== this.mappings[key]);
      });

      if(valid === false){
        alert('Bad Input! Try again.');
      }
      else{
        try{
          alert('Thank you ' + this.state.firstName + " for your submission."
        + "\nPlease give us some time to process your request.");
          event.preventDefault();

          console.log('BEFORE: ');
          console.log('STATE SHOW RESULTS: ', this.state.showResults);
          
          this.state.results = await this.MediAPICall(this.state);
          console.log('AFTER');
          console.log('STATE SHOW RESULTS: ', this.state.showResults);

          if(this.state.results === '' || this.state.results === null){
            throw new Error("Invalid Request, did not go through!");
          }
          console.log('RENDER SHOULD BE UPDATED!!!');
          this.toggleResults();
        } catch(e) {
          alert("Sorry Request did not go through...");
          console.error(e);
        }
      }
    };
    
    render() {
      console.log('RENDER GETTING CALLED ');
      console.log('INSIDE OF RENDER FUNC THIS STATE RESULTS: ', this.state.showResults);
      return (
      <div id="symptom-form" >
        <form onSubmit={this.handleSubmit} className="form">
          <p className="required">* Required</p>
          <div className="fieldSet">
            <fieldset>
              <legend>Patient Symptoms</legend>
              <p className="form-group"><label className="field"><span>*</span>
                    First Name:
                    <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} placeholder="Enter Fist Name"/>
                </label>
              </p>
              <p  className="form-group"><label className="field"><span>*</span>
                    Last Name:
                    <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange}  placeholder="Enter Last Name"/>
                </label>
              </p>
              <p className="form-group"><label className="field"><span>*</span>
                    Birth Year:
                    <input type="text" value={this.state.birthYear} name="birthYear" aria-describedby="birthYearDesc" onChange={this.handleChange}  placeholder="Enter Birth Year"/>
                    <br/>
                    <small id="birthYearDesc" className="form-text text-muted">The year you were born in '<b>YYYY</b>' format.</small>
                </label>
              </p>
              <p className="form-group"><label className="field"><span>*</span>
                    Gender:
                    <select name="gender" onChange={this.handleChange}  defaultValue="Select One">
                        <option value="Select One"></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
              </p>
              <p className="form-group"><label className="field"><span>*</span>
                    Symptoms:
                    <input type="text" value={this.state.symptoms} name="symptoms" onChange={this.handleChange}  placeholder="Enter Symptom ID"/>
                </label>
              </p>
              
              </fieldset>
              <button type="submit" className="btn-primary">Submit</button>
            </div>
          </form>
          <div>
            {this.state.showResults || this.state.results !== null ? 
              <Redirect to={{
                pathname: "/results",
                state: { results: this.state.results }
              }}/> : <br />}
          </div>
        </div>
      );
    };
}


export default SymptomForm;