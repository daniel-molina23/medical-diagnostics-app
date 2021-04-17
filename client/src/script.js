import React from 'react';


const request = require('request');


class symptomsProposed extends React.Component{
  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: '', birthYear: '', gender: '', symptoms: ''};
    this.symptomsProposed = null;
  }

  makeRequest({firstName, lastName, birthYear, gender, symptoms}) {
    
    this.setState(firstName, lastName, birthYear, gender, symptoms);
    
    this.symptomsProposed = {
      method: 'GET',
      url: 'https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms/proposed',
      qs: {gender, birthYear, language: 'en-gb', symptoms }, //parameters for specified info
      headers: {
        'x-rapidapi-key': 'ada0373128mshff83f2784144a0fp173715jsn1089a0cfb782',
        'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
        useQueryString: true
      }
    };

    return genericResponse('SYMPTOMS PROPOSED',this.symptomsProposed);
  }
}

function genericResponse(responseStringIdentifier, requestType){
  //requestStringIdentifier: SYMPTOMS PROPOSED, ISSUES, SPECIALISTS
  //requestType: the response const you get back from api
  request (requestType, function (error, res, body) {
    if (error) {throw new Error(error)};
    
    console.log('')
    console.log(responseStringIdentifier)
    console.log(body);
    res.send(body);
    return body;
  });
}

export default symptomsProposed;

/*
//symtpomsProposed Requst
const symptomsProposed = {
  method: 'GET',
  url: 'https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms/proposed',
  qs: {gender: 'male', year_of_birth: '1984', language: 'en-gb', symptoms: '[11]'}, //parameters for specified info
  headers: {
    'x-rapidapi-key': 'ada0373128mshff83f2784144a0fp173715jsn1089a0cfb782',
    'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
    useQueryString: true
  }
};

request (symptomsProposed, function (error, response, body) {
	if (error) throw new Error(error);
    console.log('')
    console.log('SYMPTOMS PROPOSED')
	console.log(body);
});



//diagnosis request
const diagnosis = {
    method: 'GET',
    url: 'https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis',
    qs: {symptoms: '[11]', gender: 'male', year_of_birth: '1984', language: 'en-gb'},  //parameters for specified info
    headers: {
      'x-rapidapi-key': 'ada0373128mshff83f2784144a0fp173715jsn1089a0cfb782',
      'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
      useQueryString: true
    }
  };
  
  request(diagnosis, function (error, response, body) {
      if (error) throw new Error(error);
      console.log('')
      console.log('DIAGNOSIS')
      console.log(body);
  });


//Specializations

const specializations = {
    method: 'GET',
    url: 'https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis/specialisations',
    qs: {symptoms: '[11]', gender: 'male', year_of_birth: '1984', language: 'en-gb'}, //parameters for specified info
    headers: {
      'x-rapidapi-key': 'ada0373128mshff83f2784144a0fp173715jsn1089a0cfb782',
      'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
      useQueryString: true
    }
  };
  
  request(specializations, function (error, response, body) {
      if (error) throw new Error(error);
      console.log('')
      console.log('SPECIALISATION')
      console.log(body);
  });


//Issue info

const issueInfo = {
  method: 'GET',
  url: 'https://priaid-symptom-checker-v1.p.rapidapi.com/issues/11/info',
  qs: {issue_id:'[11]', language: 'en-gb'}, //parameters for specified info
  headers: {
    'x-rapidapi-key': 'ada0373128mshff83f2784144a0fp173715jsn1089a0cfb782',
    'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
    useQueryString: true
  }
};

request(issueInfo, function (error, response, body) {
	if (error) throw new Error(error);
    console.log('')
    console.log('ISSUE INFO')
	console.log(body);
});

//Issues

const options = {
  method: 'GET',
  url: 'https://priaid-symptom-checker-v1.p.rapidapi.com/issues',
  qs: {language: 'en-gb'},
  headers: {
    'x-rapidapi-key': 'ada0373128mshff83f2784144a0fp173715jsn1089a0cfb782',
    'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
    useQueryString: true
  }
};
//doesnt need a parameter, can take bodyIndex parameter to limit down # of issues
request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
*/

//requires the issues index to extract po
const symptoms = {
  method: 'GET',
  url: 'https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms',
  qs: {language: 'en-gb', format: 'json'},
  headers: {
    'x-rapidapi-key': 'ada0373128mshff83f2784144a0fp173715jsn1089a0cfb782',
    'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
    useQueryString: true
  }
};

request(symptoms, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});