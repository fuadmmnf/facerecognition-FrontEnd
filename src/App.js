import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import LinkForm from './components/linkform/LinkForm';
import Particles from 'react-particles-js';
import FaceDetection from './components/facedetection/FaceDetection';
import SignIn from './components/signin/SignIn';
import Register from './components/register/Register';
import Rank from './components/rank/Rank';
import './App.css';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
 apiKey: 'd41157c3022843f3a3bfb78c6b903739'
});



const particleProperty=
{
	particles: {
		number:{
			value: 80,
			density:{
				enable: true,
				value_area: 900
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
			imageLink: '',
			box : {},
			page : 'signin',
			isSignedIn: false,

			user: 
			{
				id:'' ,
				name: '',
				email: '',
				password: '',
				entries: 0,
				joined: ''
			}
		}
	}

	calculateRegion = (resp) =>{
		const region = resp.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById("image");
		const imgWidth = Number(image.width);
		const imgHeight = Number(image.height);

	
		return{
			leftCol: region.left_col * imgWidth ,
			topRow: region.top_row * imgHeight ,
			rightCol: imgWidth - (region.right_col * imgWidth),
			bottomRow: imgHeight - (region.bottom_row * imgHeight)
		}

	}

	loadUser = (data) =>
	{
		this.setState({user:
			{
				id: data.id,
				name: data.name,
				email: data.email,
				password: data.password,
				entries: data.entries,
				joined: data.joined
			}
		});
	}

	calculateBox = (boxData) =>
	{
		this.setState({box:boxData});
	}

	onPageChange=(value) =>
	{
		this.state.imageLink = '';
		if(value === 'FaceDetection') this.setState({isSignedIn : true});
		else this.setState({isSignedIn : false});
		this.setState({page: value});
	}

	
	onInputChange = (event) =>
	{
		this.setState ({input: event.target.value});
	}

	onButtonSubmit = (event) =>
	{
		this.setState({imageLink: this.state.input})
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
		.then(response=>
		{
			if(response)
			{
				fetch('http://localhost:3000/image',
				{
					method: 'put',
					headers: {'content-type':'application/json'},
					body: JSON.stringify(
					{
						id: this.state.user.id
					})
				})
				.then(data => data.json())
				.then(count => 
				{
					
					this.setState(Object.assign(this.state.user,{entries:count}));
				})
				
			}
			this.calculateBox(this.calculateRegion(response));
		}) 
		.catch(err => console.log(err));
	}


	render() {
	    return (
	      <div >
	      	 <Particles className='particles'
	              params={particleProperty} />
	        <Navigation onPageChange={this.onPageChange} isSignedIn = {this.state.isSignedIn} />
	        {	
	        	this.state.page === 'FaceDetection'
	        	? <div>
	      			<Logo />
	      			<Rank name = {this.state.user.name} entries = {this.state.user.entries} />
	     	   		<LinkForm onInput={this.onInputChange} onClick={this.onButtonSubmit}/>
	       			<FaceDetection faceBox={this.state.box} imageURL={this.state.imageLink}/>
	      		 </div> : 
	        	(
	        		this.state.page === 'Register'
	        		? <Register onPageChange={this.onPageChange}/>
	        		:<SignIn onPageChange={this.onPageChange} loadUser={this.loadUser}/>
	        	)

	    	}
	        
	       
	      </div>
	    );
	}



}

export default App;