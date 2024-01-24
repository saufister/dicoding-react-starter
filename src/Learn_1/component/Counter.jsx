//demo deklarasi class component . 
import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {counter : 1};
    }   

    render(){
        //menampilkan data counter pada state
        return <h1>Counter : {this.state.counter}</h1>;
    }

    //code to change state using button
    componentDidMount(){
        setInterval(() => {
            this.setState({counter : this.state.counter + 1});
        }, 1000);
    }
}

export default Counter;