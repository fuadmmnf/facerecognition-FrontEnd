import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import LinkForm from './components/linkform/LinkForm';
import Particles from 'react-particles-js';
import './App.css';


const particleProperty=
{
	particles: {
		number:{
			value: 150,
			density:{
				enable: true,
				value_area: 800
			}

		}
    },
    "detect_on":"canvas",
    "interactivity":{
    	"events":
    	{
	    	"onhover":{
	    		"enable": true,
	    		"mode": 'repulse'
	    	}
	    }
    }
}




class App extends Component {


	constructor()
	{
		super();
		this.state={
			input: '',
		}
	}
	onInputChange = (event) =>
	{
		this.input = event.target.value;
		//console.log(this.input);
	}

	onButtonSubmit = (event) =>
	{
		
	}
	render() {
	    return (
	      <div >
	      	 <Particles className='particles'
	              params={particleProperty} />
	        <Navigation />
	        <Logo />
	        <LinkForm onInput={this.onInputChange} onClick={this.onButtonSubmit}/>
	      </div>
	    );
	  }



}

export default App;
