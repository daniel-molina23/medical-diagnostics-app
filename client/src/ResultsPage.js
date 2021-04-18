import React, {Component} from 'react';



class ResultsPage extends Component{
    constructor(props){
        super(props);
        this.state = {results: '', isShow: false};
        this.componentDidCatch = this.componentDidMount.bind(this);
    }

    componentDidMount(props){
        this.setState({results: this.props.location.state.results, isShow: true});
        console.log('Props: \n' + props)
        console.log("this.Props: \n" + this.props.location.state.results)
    }


    render(){
        return (
            <div>
                <p>Welcome to the Results Page:</p>
                <br/>
                <br/>
                <p>{this.state.isShow? "Value is: " + this.state.results : "Waiting..."}</p>
            </div>

        )
    }
}

export default ResultsPage;