import React, { Component } from 'react';
import Desc from './desc';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props) {
    console.log("constructor");
    super(props)
  
    this.state = {
       name:"roua" ,lastname:"" ,counter:0,
       show:true
    }
  }
   show= () => {
     this.setState({show:!this.state.show})
   };
   add= () => {
     this.setState({counter:++this.state.counter})
   };
   
   handlechange= (e) => {
     this.setState({[e.target.name]:e.target.value})
   };
   componentDidMount() {
    setInterval(()=> this.setState({counter:this.state.counter+1})   , 1000)
   }
   componentDidUpdate() {
     console.log("component will updated");
   }
 
   
   
  render() {
    console.log("render");
    return <>
     {  this.state.show  ? <Desc/> : null} 
       <button onClick={this.show}> show</button>
       {this.state.counter}
       <button onClick={this.add}> +</button>
       name
       <input name='name' type="text" onChange={ this.handlechange
       
       }/>
       lastname
       <input name="lastname" type="text" onChange={ this.handlechange
       
       }/>
       {this.state.name}


</> ;
  }
}

