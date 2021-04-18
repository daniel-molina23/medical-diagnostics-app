import React, {Component} from 'react';
import Map from './Map';



class ResultsPage extends Component{
    constructor(props){
        super(props);
        this.state = {results: '', isShow: false, displayText: ''};
        this.componentDidCatch = this.componentDidMount.bind(this);
        // this.searchGoogleAPI = this.searchGoogleAPI.bind(this);
        this.adaptNewChanges = this.adaptNewChanges.bind(this);
        this.rows = [];
    }

    componentDidMount(props){
        console.log("this.Props: \n" + this.props.location.state.results);
        this.setState({results: this.props.location.state.results});
        //use this.state.results to navigate with JSON response
    }

    // async searchGoogleAPI(){
    //     console.log("CLICKED IT!!!!!!!!!!!!!!!!!!!!");
    // }

    async adaptNewChanges() {
        const possible = "Possible Issue: ";
        const docsText = "The Doctors who specialize in this area are: ";
        const nearbyText = "Click on their specialization to see nearby doctors";
        console.log("ABOUT TO ADAPTNEWCHANGES()");
        // var count = 1;
        var str = "";
        // var rows = [];

        const obj = this.state.results
        if(obj.length >= 1){
            str += possible + obj[0].Issue.Name + "\nLikelihood of : " + obj[0].Issue.Accuracy + "%\n";
            str += obj[0].Specialisation.map((spec) => {
                return "     -   "+ spec.Name + "\n"
            })
        }
        else{
            str += "There was no data returned back...Go back and try again.";
        }
        
        this.setState( state => ({ displayText: str, isShow : true }));
        // this.state.setState({displayText: str});
        // this.state.displayText = str;

        // this.state.results.map((obj) => {
        //     const tempIssue = possible + obj.Issue.Name + "\nLikelihood of : " + obj.Issue.Accuracy + "%\n";
        //     // rows.push(<li key={count}>{tempIssue}</li>);
        //     str += tempIssue;
        //     console.log(tempIssue);
        //     // count ++;
        //     // rows.push(<li key={count}>{docsText}</li>);
        //     // count ++;
        //     // rows.push(<li key={count}>{nearbyText}</li>);
        //     // count++;
        //     var temp = [];
        //     var tempCount = 1;
        //     obj.Specialisation.map((spec) => {
        //         temp.push(<li key={tempCount}>{spec.Name}</li>);
        //         tempCount++;
        //         console.log("     Specialisation: ", spec.Name);
        //     })
        //     rows.push(<ul>{temp}</ul>);
        // })
        // const res = [<ul>{ rows }</ul>];
        // this.state.setState( {displayText: <ul>{ namesList }</ul>});
        
        // console.log("TOTAL OBJECT: ", rows);

        // return res;
    }


    render(){
        return (
            <div>
                <p>Here are your results from your virtual Machine Learning Medic Model:</p>
                <br/>
                <small>Don't self diagnose. This is the highest result we found:</small>
                <br/>
                <br />
                <div id="ML-model-output">
                    {this.state.isShow || this.state.displayText !== '' ? this.state.displayText : "Nothing was returned..."}
                </div>
                <div id="google maps">
                    <Map />
                </div>
            </div>

        )
    }
}


export default ResultsPage;