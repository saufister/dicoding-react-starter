import React from 'react'
import ReactDOM from 'react-dom/client'
import News from './Learn_1/News.jsx'
import Counter from './Learn_1/component/Counter.jsx'
import CounterApp from './Learn_2/CounterApp.jsx'
import ControlledComponent  from './Learn_3/ControlledComponent.jsx'
import './index.css'

class KomponenKu extends React.Component {
   
  render() {
    let i = 0 ;
    console.log(this.props);
    
    console.log("render ke" + i);
    i++;
    return <h1>Hello, {this.props.name}</h1>
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <News /> */}
    {/* <KomponenKu name ="Saufi"/> */}
    {/* <Counter/> */}
    <ControlledComponent/>
  </React.StrictMode>,
)
