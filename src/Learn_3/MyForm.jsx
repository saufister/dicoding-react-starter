import React from 'react';

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name : 'nadia',
            email : 'moh.saufy@gmail.com',
            gender : 'Wanita',
        };

        //binding context ke event handler 
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeEventHandler(event){
        //console.log(event.target.value)
        const method = (prev) => {
            console.log(prev.name);
                return {
                  name: event.target.value
                };
        };
        this.setState(method);
    }
    onEmailChangeEventHandler(event){
        this.setState((prevEmail) => {
            return {
                email : event.target.value
            };
        });
    }
    onGenderChangeEventHandler(event){
        this.setState((prevGender) =>{
            return {
                gender : event.target.value
            }
        });
    }
    onSubmitEventHandler(event){
        event.preventDefault();
        console.log(this.state);
        const message = `
        Name: ${this.state.name}
        Email: ${this.state.email}
        Gender: ${this.state.gender}
      `;
      alert(message);
    }

    render(){
        return(
            <div>
                <h1> Register Form</h1>
            <form onSubmit={this.onSubmitEventHandler}>
                <label htmlFor="name">Nama : </label>
                <input id="name" type ="text" value ={this.state.name} onChange={this.onNameChangeEventHandler}></input>
                 <br></br><br></br>
                <label htmlFor="email"> Email  : </label>
                <input id="email" type ="text" value = {this.state.email} onChange={this.onEmailChangeEventHandler}></input>
                <br></br><br></br>
                <label htmlFor="gender"> Gender : </label>
                <select id="gender" value ={this.state.gender} onChange={this.onGenderChangeEventHandler} >
                    <option value = "Pria"> Pria</option>
                    <option value = "Wanita">Wanita </option>
                </select>
                <br></br><br></br>
                <button type="submit">Submit</button>
            </form>
            </div>
        );
    }
}

export default MyForm;