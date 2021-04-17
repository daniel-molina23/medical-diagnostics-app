import './App.css';
import React from 'react';
import './SymptomForm.css';

class SymptomForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {firstName: '', lastName: '', birthYear: '', gender: '', symptoms: ''};
  
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
      alert('A name was submitted from ' + this.state.firstName + this.state.lastName);
      event.preventDefault();
    }
  
    render() {
      return (
      <div id="symptom-form">
        {/* <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form> */}




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


// function Form() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <form>
//             <label>
//                 First Name:
//                 <input type="text" name="first-name" />
//             </label>
//             <br/>
//             <label>
//                 Last Name:
//                 <input type="text" name="last-name" />
//             </label>
//             <label>
//                 Birth Year:
//                 <input type="text" name="birth-year" />
//             </label>
//             <label>
//                 Gender:
//                 <input type="text" name="gender" />
//             </label>
//             <label>
//                 Symptoms:
//                 <input type="text" name="symptoms" />
//             </label>
//             <input type="submit" value="Submit" />
//         </form>
//       </header>
//       <body>
//       </body>
//     </div>
//   );
// }

// export default Form;