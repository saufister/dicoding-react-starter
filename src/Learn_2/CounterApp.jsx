import React from 'react';
import CounterDisplay from './component/CounterDisplay';
import ButtonTambah from './component/ButtonTambah';
import ResetButton from './component/ResetButton';
class CounterApp extends React.Component{
    constructor(props){
        super(props);
        //inisialisasi state
        this.state = {
            ayam: 0
        };
        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onResetEvent = this.onResetEvent.bind(this);
    }
    onIncreaseEventHandler ()  {
        console.log('onCreateEventHandler dipanggil');
        this.setState((previousState) => {
            console.log(previousState.ayam);
          return {
            ayam: previousState.ayam + 1,
          };
        });
        console.log(this.state.ayam);
      };
    onResetEvent(){
        //code untuk mereset nilai ayamer
        this.setState({
            ayam: 0
        });
    }

    render(){
        //menampilkan data ayamer pada state
        return (
            <div>
                <ButtonTambah increase={this.onIncreaseEventHandler} />
                <CounterDisplay count={this.state.ayam} />
                <ResetButton reset={this.onResetEvent} />
            </div>
        );

    }
}
export default CounterApp;