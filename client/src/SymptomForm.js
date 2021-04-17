import './App.css';
import React from 'react';
import './SymptomForm.css';
import symptomsProposed from './script.js';

class SymptomForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {firstName: '', lastName: '', birthYear: '', gender: '', symptoms: ''};
      this.mappings = {firstName: "Enter Fist Name", lastName:"Enter Last Name",birthYear:"Enter Birth Year", gender:"Select One", symptoms:"Enter Symptom ID"}
      this.symptoms = new symptomsProposed();
      this.handleChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
  
    handleSubmit(event) {
      var valid = true;
      Object.entries(this.state).forEach(([key, value]) => {
        valid = valid && (value !== '' || value !== this.mappings[key]);
      });

      if(valid === false){
        alert('Make sure that everything is inputted correctly! Try again')
      }
      else{
        try{
          alert('A name was submitted from ' + this.state.firstName + " " +  this.state.lastName
        + "\nPlease wait for the MediAPI to send back your response!");
          event.preventDefault();
          // This was taken from script.js
          //symtpomsProposed Request

          const body = this.symptoms.makeRequest(this.state.value);
        }
        catch(e){
          console.error(e);
        }
      }
    }
  
    render() {
      return (
      <div id="symptom-form">
        <form onSubmit={this.handleSubmit} className="form">
          <p class="required">* Required</p>
          <div class="fieldSet">
            <fieldset>
              <legend>Patient Symptoms</legend>
              <p class="form-group"><label class="field"><span>*</span>
                    First Name:
                    <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} placeholder="Enter Fist Name"/>
                </label>
              </p>
              <p  class="form-group"><label class="field"><span>*</span>
                    Last Name:
                    <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange}  placeholder="Enter Last Name"/>
                </label>
              </p>
              <p class="form-group"><label class="field"><span>*</span>
                    Birth Year:
                    <input type="text" value={this.state.birthYear} name="birthYear" aria-describedby="birthYearDesc" onChange={this.handleChange}  placeholder="Enter Birth Year"/>
                    <br/>
                    <small id="birthYearDesc" class="form-text text-muted">The year you were born in '<b>YYYY</b>' format.</small>
                </label>
              </p>
              <p class="form-group"><label class="field"><span>*</span>
                    Gender:
                    <select value={this.state.gender} name="gender" onChange={this.handleChange}  placeholder="Select One">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
              </p>
              <p class="form-group"><label class="field"><span>*</span>
                    Symptoms:
                    <input type="text" value={this.state.symptoms} name="symptoms" onChange={this.handleChange}  placeholder="Enter Symptom ID"/>
                </label>
              </p>
              
              </fieldset>
              <button type="submit" class="btn-primary">Submit</button>
            </div>
          </form>
        </div>
      );
    }
  }


export default SymptomForm;