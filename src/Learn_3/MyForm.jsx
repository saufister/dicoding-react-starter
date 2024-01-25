import React from 'react';

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name : 'nadia',
            email : 'moh.saufy@gmail.com',
            gender : 'Wanita',
        };
    }

    render(){
        return(
            <div>
                <h1> Register Form</h1>
            <form>
                <label htmlFor="name">Nama : </label>
                <input id="name" type ="text" value ={this.state.name}></input>
                 <br></br><br></br>
                <label htmlFor="email"> Email  : </label>
                <input id="email" type ="text" value = {this.state.email}></input>
                <br></br><br></br>
                <label htmlFor="gender"> Gender : </label>
                <select id="gender" value ={this.state.gender} >
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