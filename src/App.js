import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import LinkForm from './components/linkform/LinkForm';
import Particles from 'react-particles-js';
import FaceDetection from './components/facedetection/FaceDetection';
import './App.css';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
 apiKey: 'd41157c3022843f3a3bfb78c6b903739'
});



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
			imageLink: ''
		}
	}
	onInputChange = (event) =>
	{
		this.setState ({input: event.target.value});
		//console.log(this.input);
	}

	onButtonSubmit = (event) =>
	{
		this.setState({imageLink: this.state.input})
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
		    function(response) {
		    	console.log(response/*.outputs[0].data.regions[0].region_info.bounding_box*/);
		    },
		    function(err) {
		      // there was an error
		    }
	  	);
	}
	render() {
	    return (
	      <div >
	      	 <Particles className='particles'
	              params={particleProperty} />
	        <Navigation />
	        <Logo />
	        <LinkForm onInput={this.onInputChange} onClick={this.onButtonSubmit}/>
	        <FaceDetection imageURL={this.state.imageLink}/>
	      </div>
	    );
	  }



}

export default App;
