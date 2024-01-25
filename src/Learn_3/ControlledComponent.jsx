import React from 'react';

class ControlledComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : ''
        }
        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    }
    onEmailChangeHandler(event){
        this.setState(()=>{
            console.log(this.state.email);
            return{
                email : event.target.value
            }
            
        });
    }
    render(){
        return(
            <form>
                <input type ="text" value = {this.state.email}
                onChange={this.onEmailChangeHandler}>
                </input>
            </form>
        );
    }
}
export default ControlledComponent;